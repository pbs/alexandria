let jQuery = window.jQuery = require('jquery'),
  PBS = require('../../scripts/_pbs'),
  Utils = require('../../scripts/_utils');

// responsive image processor, and its handlebars helper;
require('picturefill');

jQuery(($) => {

  let _cache = {},

  /**
   * Initializes component.
   */
  init = () => {

    setupCache();
    formatTimes();
    responsiveBackgroundImage();
    addEvents();
    window.picturefill();

  },

  /**
   * Caches re-used elements.
   */
  setupCache = () => {

    _cache.stationSection = $('.station .section-body');
    _cache.times = _cache.stationSection.find('.home-station-schedule__table-cell-time');

  },

  /**
   * Adds event listeners.
   */
  addEvents = () => {

    $(window).on('resize', responsiveBackgroundImage.debounce(PBS.debounceDelay));

  },

  /**
   * Formats times.
   */
  formatTimes = () => {
    
    Utils.replaceWithFormattedTime(_cache.times);

  },
  
  /** a function that swaps the background image based on the screensize
   * this allows for different stations to have different background images
   * which manifest themselves in the html as data attributes.
   * if they do not provide an image, one is assigned in the CSS
   * (see station.scss), but the inline background-image declaration will
   * override the default.
   */
  responsiveBackgroundImage = () => {

    // kill this function if there are no background data attributes
    if (!(_cache.stationSection.attr('data-sm-bg'))) {
      return false;
    }

    // assuming we have background data attributes, assigning them to variables
    let smBg = _cache.stationSection.attr('data-sm-bg'),
      mdBg = _cache.stationSection.attr('data-md-bg');

    // changing the background image based on the screen width
    if (window.matchMedia('(min-width: 1024px)').matches){
      _cache.stationSection.css('background-image', 'url(' + mdBg + ')');
    }
    else if (window.matchMedia('(min-width: 768px)').matches){
      _cache.stationSection.css('background-image', 'url(' + smBg + ')');
    }

  }

  init();

});
