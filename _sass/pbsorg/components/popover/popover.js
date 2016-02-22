import jQuery from 'jquery';

/**
* plugin from http://qtip2.com/
* Packages are 'viewport adjustment' and 'speech bubble tips'
*/
require('../../scripts/jquery.qtip.min');

// include button actions
require('../../scripts/_buttons');

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
    // only creates popover if there's actual content
    if (options.popoverContent) {
      this._createPopover();
    }
  }

  /**
   * Sets up default properties.
   * @param {object} options - any custom options passed in
   */
  _setupProps(options) {

    const defaults = {
      popoverContainer: undefined,
      popoverTrigger: undefined,
      popoverContent: undefined,
      addWatchlistButtons: false,
      viewport: jQuery(window)
    };

    // loop through all defaults and set value to any options passed in
    this._updateDefaults(this, defaults, options);

    // caches elements passed in here
    this._cacheEls();
  }

  /**
  * caching some of the Options from setupProps
  */
  _cacheEls() {

    if (this.popoverContent) {
      this.container = jQuery(this.popoverContainer);
      this.trigger = jQuery(this.popoverTrigger);
      this.popoverContent = jQuery(this.popoverContent);
    }

  }

  /**
   * Updates defaults to override with options passed in and sets to this instance.
   * @param {object} carousel - current popover instance
   * @param {object} defaults - default values
   * @param {object} options - options values passed in
   * @param {object} context - if nested object,
   * this context will be the higher level key (optional)
   *
   */

  _updateDefaults(popover, defaults, options, context) {

    // if no context passed in
    // then we are on the top level of the popover object
    let currentContext = context ? context : popover;

    // loop through defaults
    for (let key in defaults) {
      if (defaults.hasOwnProperty(key)) {

        // if the value of the key is a nested object
        // use this function recursively to loop through again
        if (jQuery.isPlainObject(defaults[key])) {

          popover[key] = {};
          popover._updateDefaults(popover, defaults[key], options[key], popover[key]);

        } else {

          // update the keys value
          currentContext[key] = (options && typeof options[key] !== 'undefined') ? options[key] : defaults[key];
        }
      }
    }

  }

  /**
   * Updates button based on whether a video/show is already in a user's favorites/watchlist
   * @param {object} dataID - type (video/show) of button
   *
   */
  _updateButtons(dataID, objID) {
    const $btn = jQuery('*[data-' + dataID + '-id="' + objID + '"]');
    const txt = $btn.find('.btn--text').data('text-selected');

    $btn.addClass('selected').find('.btn--text').text(txt);
  }

  /**
   * Adds optional Add To Watchlist or Favorite Show buttons to popovers
   */
  _addButtons() {
    if (!window.PBS.personalData) {
      return;
    }

    jQuery.each(window.PBS.personalData.favorite_shows.content, (index, obj) => {
      this._updateButtons('show', obj.id);
    });
    jQuery.each(window.PBS.personalData.favorite_videos.content, (index, obj) => {
      this._updateButtons('video', obj.id);
    });
  }

  /**
   * Creates popovers using qtip2
   */
  _createPopover() {

    // popovers are not available on touch devices
    if (jQuery('html').hasClass('no-touchevents')) {
      this.trigger.qtip({
        position: {
          // properly positions the tooltip body
          my: 'right center',
          at: 'left center',
          // moves tooltip so it doesn't go off screen
          adjust: {
            resize: true,
            method: 'flipinvert flipinvert'
          },
          // use window as default stays within browser viewport
          viewport: this.viewport
        },
        show: {
          delay: 500
        },
        // allows mouseover of tooltip
        hide: {
          delay: 200,
          fixed: true
        },
        content: {
          text: this.popoverContent
        },
        style: {
          width: 384,
          tip: {
            width: 18,
            height: 12,
            mimic: 'center',
            offset: 30
          }
        },
        events: {
          // function which can happen on 'show'
          show: () => {
            // adds optional buttons to popover
            if (this.addWatchlistButtons) {
              this._addButtons();
            }
          }
        }
      });
    }
  }
}
