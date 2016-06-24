'use strict';

import $ from 'jquery';

const Ad = class Ad {

  /**
   * Initializes class instance.
   * param {object} options - any custom options passed in
   * @param {number} options.div_id - div id where to add ad to DOM (mandatory for ad to show)
   * @param {number} options.unit - page unit for ad (mandatory for ad to show)
   * @constructor
   */
  constructor(options) {

    const defaults = {
      _loaded: false,
      slot: null,
      el: null,
      div_id: '',
      network_id: window.PBS.GOOGLE_DFP_DESKTOP,
      sizes: [],
      unit: '',
      responsive: false,
      type: null
    };

    // loop through all defaults and set value to any options passed in
    this._updateDefaults(this, defaults, options);

    this._onAdRendered = this._onAdRendered.bind(this);

  }

  /**
   * Updates defaults to override with options passed in and sets to this instance.
   * @param {object} ad - current ad instance
   * @param {object} defaults - default values
   * @param {object} options - options values passed in
   * @param {object} context - if nested object,
   * this context will be the higher level key (optional)
   * @todo investigate using Map
   */
  _updateDefaults(ad, defaults, options, context) {

    // if no context passed in
    // then we are on the top level of the modal object
    let currentContext = context ? context : ad;

    // loop through defaults
    for (let key in defaults) {
      if (defaults.hasOwnProperty(key)) {

        // if the value of the key is a nested object
        // use this function recursively to loop through again
        if ($.isPlainObject(defaults[key])) {

          ad[key] = {};
          ad._updateDefaults(ad, defaults[key], options[key], ad[key]);

        } else {

          // update the keys value
          currentContext[key] = (options && typeof options[key] !== 'undefined') ? options[key] : defaults[key];
        }
      }
    }

  }

  /**
   * Sets default slot definition.
   */
  _setSlot() {

    return this._defineSlot()
      .setCollapseEmptyDiv(true)
      .addService(window.googletag.pubads());

  }

  /**
   * Gets the slot DOM element by slot id.
   * checks for slot and if not, uses the div_id passed in
   * @returns {HTML node}
   */
  _getSlotElement() {

    const slotId = this.slot ? this.slot.getSlotElementId() : this.div_id;
    const slotEl = document.getElementById(slotId);

    return slotEl.parentNode ? slotEl.parentNode : slotEl;

  }

  /**
   * Sets slot element.
   */
  _setSlotElement() {
    this.el = this._getSlotElement();
  }


  /**
   * Defines an ad slot via google tag manager.
   * @returns {object} - googletag slot definition
   */
  _defineSlot() {
    return window.googletag.defineSlot(this.network_id + this.unit, this.sizes, this.div_id);
  }

  /**
   * Displays ad in ad slot.
   */
  _display() {

    window.googletag.cmd.push(() => {
      window.googletag.display(this.div_id);
    });

  }

  /**
   * Registers slot and wraps it in a Promise.
   */
  _registerSlot() {

    const deferred = $.Deferred();

    // set slot definition
    this.slot = this._setSlot();

    // add callback for when slot is rendered
    // to add class so text/link will be displayed
    window.googletag.pubads().addEventListener('slotRenderEnded', this._onAdRendered);

    deferred.resolve();

    return deferred.promise();

  }

  /**
   * When an ad is rendered.
   * @param {event} e
   * triggered by 'slotRenderEnded' event
   */
  _onAdRendered(e) {

    // for some reason, no event exists
    // or if already loaded
    if (!e || this._loaded) {
      return;
    }

    // if this isn't relevant to this ad
    if (this.div_id !== e.slot.getSlotElementId()) {
      return;
    }

    this._loaded = !e.isEmpty;

  }

  /**
   * Refreshes slot and makes call to load ad.
   */
  _refreshSlot() {

    window.googletag.cmd.push(function() {

      window.googletag.pubads().refresh([this.slot]);

    }.bind(this));

  }

  /**
   * Loads ad by calling .refresh() via _refreshSlot()
   * needed because we want to lazyload some ads.
   */
  _load() {

    // if already loaded, do nothing
    if (this._loaded) {
      return;
    }

    this._refreshSlot();

  }

  /**
   * Renders ad.
   */
  render() {

    window.googletag.cmd.push(function() {

      // register slot definition
      this._registerSlot()
        .then(function() {

          // then display the ad
          this._display();

          // set the el reference
          this._setSlotElement();

          // try and load!
          if (!this._loaded) {
            this._load();
          }

        }.bind(this));

    }.bind(this));

    return this;

  }

};

export default Ad;
