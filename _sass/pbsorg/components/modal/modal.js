'use strict';

import jQuery from 'jquery';
import { debounce, isTouchDevice } from '../../scripts/modules/utils-basic';

/**
 * Class for .org Modal implementation.
 */
export default class {

  /**
   * Initializes class.
   * @param {object} options - custom settings passed in (optional)
   * @constructor
   */
  constructor(options) {

    if (options) {
      this._setupProps(options);
    }

    // bind instance method to 'this' in constructor
    // see this http://alexfedoseev.com/post/65/react-event-handlers-and-context-binding
    this._bindToContext(
      this,
      'hide',
      '_onEscapeClick',
      '_onBackgroundClick',
      '_onLastFocusableElTabPress',
      '_onModalShiftTabPress'
    );
    this._onWindowResizeDebounced = debounce(this._onWindowResize.bind(this), 10);

    // if child view was passed in, init it
    if (this.childView) {
      this.childView.init();
    }

    return this;

  }

  /**
   * Bind methods to same instance of this
   * for removing event listeners.
   * @param {object} context - this
   * @param {object} ...methods - event functions that require binding of this
   */
  _bindToContext(context, ...methods) {
    methods.map((method) => {
      context[method] = context[method].bind(context);
    });
  }

  /**
   * Sets up default properties.
   * @param {object} options - any custom options passed in
   */
  _setupProps(options) {

    const defaults = {
      documentHtml: jQuery('html'),
      modalId: undefined,
      closeButton: undefined,
      outsideModal: true,
      modalTrigger: undefined,
      focusTarget: undefined,
      lastFocusableEl: jQuery('.close-modal'),
      childView: undefined,
      settings: {
        scroll: false,
        accessibility: true,
        phead: false
      }
    };

    // loop through all defaults and set value to any options passed in
    this._updateDefaults(this, defaults, options);

    this._cacheEls();

  }

  /**
  * caching some of the Options from setupProps
  */
  _cacheEls() {

    if (this.modalId) {
      this.modal = jQuery(this.modalId);
      this.modalBody = this.modal.find('.modal-window__body');
      this.modalScrollable = this.modal.find('.modal-window__dialog--scrollable');
      this.closeButton = this.modal.find('.close-modal');
    }

    if (this.focusTarget) {
      this.focusTarget = jQuery(this.focusTarget);
      this.modalTrigger = jQuery(this.modalTrigger);
      this.lastFocusableEl = jQuery(this.lastFocusableEl);
    }

  }
  /**
   * Updates defaults to override with options passed in and sets to this instance.
   * @param {object} modal - current modal instance
   * @param {object} defaults - default values
   * @param {object} options - options values passed in
   * @param {object} context - if nested object,
   * this context will be the higher level key (optional)
   * @todo investigate using Set
   *
   */
  _updateDefaults(modal, defaults, options, context) {

    // if no context passed in
    // then we are on the top level of the modal object
    let currentContext = context ? context : modal;

    // loop through defaults
    for (let key in defaults) {
      if (defaults.hasOwnProperty(key)) {

        // if the value of the key is a nested object
        // use this function recursively to loop through again
        if (jQuery.isPlainObject(defaults[key])) {

          modal[key] = {};
          modal._updateDefaults(modal, defaults[key], options[key], modal[key]);

        } else {

          // update the keys value
          currentContext[key] = (options && typeof options[key] !== 'undefined') ? options[key] : defaults[key];
        }
      }
    }

  }

  /**
   * On window resize, don't let modal go off screen
   */
  _onWindowResize() {

    if (this._allowScrolling()) {
      this.modalScrollable
        .addClass('modal-window__dialog--has-scroll');
    } else {
      this.modalScrollable
        .removeClass('modal-window__dialog--has-scroll');
    }
  }

  /**
   * Adds event listeners.
   */
  _addEvents() {

    this.closeButton.on('click', this.hide);
    jQuery(document).on('keyup', this._onEscapeClick);
    this.modal.on('click', this._onBackgroundClick);
    window.addEventListener('resize', this._onWindowResize.bind(this));

    if (this.focusTarget) {
      this.lastFocusableEl.on('keydown', this._onLastFocusableElTabPress);
      this.focusTarget.on('keydown', this._onModalShiftTabPress);
    }
  }

  /**
   * Removes event listeners.
   */
  _removeEvents() {

    this.closeButton.off('click', this.hide);
    jQuery(document).off('keyup', this._onEscapeClick);
    this.modal.off('click', this._onBackgroundClick);
    window.removeEventListener('resize', this._onWindowResize.bind(this));

    if (this.focusTarget) {
      this.lastFocusableEl.off('keydown', this._onLastFocusableElTabPress);
      this.focusTarget.off('keydown', this._onModalShiftTabPress);
    }

  }

  /**
   * Determines if should allow scrolling
   * @returns {boolean} - if modal height is taller than window
   */
  _allowScrolling() {

    return this.modalBody.outerHeight() > window.innerHeight;
  }

  /**
  * Makes modal visible through toggling classes
  */
  _addVisibleClass() {

    this.modal.addClass('is-visible');
    this.documentHtml
      .addClass('has-visible-modal');

    if (this._allowScrolling()) {
      this.modalScrollable
        .addClass('modal-window__dialog--has-scroll');
    }
  }

  /**
  * Hides modal through toggling classes
  */
  _removeVisibleClass() {

    this.modal.removeClass('is-visible');
    this.documentHtml
      .removeClass('has-visible-modal');

    if (this.modalScrollable.hasClass('modal-window__dialog--has-scroll')) {
      this.modalScrollable
        .removeClass('modal-window__dialog--has-scroll');
    }
  }

  /**
   * When user clicks outside modal, calls the function to close modal
   * @param {object} e - jQuery event
   */
  _onBackgroundClick(e) {

    // cache this for later use
    this.modalBody = this.modalBody || this.modal.find('.modal-window__body');

    if (!this.modal.hasClass('.is-visible')) {

      // if clickout outside the modal, hide the modal
      if (!jQuery(e.target).parents().is(this.modalBody)) {
        this.hide(e);
      }
    }
  }

  /**
   * calls the close function when the escape key is pressed
   * @param {object} e - jQuery event
   */
  _onEscapeClick(e) {
    e.preventDefault(e);

    // checks if modal is open
    if (!this.modal.hasClass('.is-visible')) {
      // checks if key clicked is the escape key
      if (e.keyCode === 27) {
        this.hide(e);
      }
    }
  }

  /**
   * Passes focus to the last focusable element when on the focusTarget, and shift-tab is pressed
   * Note: because we're relying on a jQuery object and [0], we assume that we're passing IDs
   * @param {object} e - jQuery event
   */
  _onModalShiftTabPress(e) {

    if (e.keyCode !== 9 || !e.shiftKey) {
      return;
    }

    if (this.focusTarget[0] === e.target) {
      e.preventDefault(e);
      this.lastFocusableEl.focus();
    }
  }

  /**
   * Passes focus to the focusTarget when on the last focusable element, and tab is pressed
   * The default for this is the close button, but an alternative can be specified
   * @param {object} e - jQuery event
   */
  _onLastFocusableElTabPress(e) {

    // if the keyCode is not tab (9) OR the shift key is being held, return
    if (e.keyCode !== 9 || e.shiftKey) {
      return;
    }

    // if we have a focusTarget, pass focus back to it
    if (this.focusTarget) {
      e.preventDefault(e);
      this.focusTarget.focus();
    }
  }

  /**
   * Sets modal trigger value.
   * @param {string} className - new modal trigger class name
   */
  setModalTrigger(className) {

    this.modalTrigger = className;

    return this;

  }

  /**
   * closes the modal
   * @param {object} e - jQuery event
   */
  hide(e) {

    e.preventDefault(e);
    this._removeEvents();
    this._removeVisibleClass();

    if (this.childView && this.childView.onHide) {
      this.childView.onHide();
    }

    // For keyboard navigation, focus returns to the trigger for the modal
    if (!isTouchDevice()) {
      if (this.modalTrigger) {
        this.modalTrigger.focus();
      }
    }

  }

  /**
   * Makes the modal visible
   * @param {object} data - any data to pass in
   */
  show(data) {

    const customData = data || {};

    this._addVisibleClass();
    this._addEvents();

    if (this.childView && this.childView.onShow) {
      this.childView.onShow(customData);
    }

    // For keyboard navigation, passes focus to the modal
    if (!isTouchDevice()) {
      if (this.focusTarget) {
        this.focusTarget.on('mouseup', function(e) {
          e.preventDefault();
        });
        this.focusTarget.focus();
      }
    }

  }

}
