'use strict';

const jQuery = require('jquery');
const FallbackImage = require('../../scripts/_fallback-image');

require('../../bower_components/slick-carousel');
require('picturefill');
require('lazysizes');

/**
 * Class for .org Carousel implementation.
 */
const Carousel = class Carousel {

  /**
   * Initializes class.
   * @param {object} options - custom settings passed in (optional)
   * @constructor
   */
  constructor(options) {

    if (options) {
      this.setupProps(options);
      this.addEvents();
      this.setupCarousel();
    }

  }

  /**
   * Sets up default properties.
   * @param {object} options - any custom options passed in
   */
  setupProps(options) {

    let defaults = {
      carousel: undefined,
      smoothScrolling: true,
      loaded: false,
      slides: [],
      slideImages: [],
      onInit: undefined,
      settings: {
        autoplay: false,
        autoplaySpeed: 0,
        accessibility: true,
        dots: true,
        infinite: true,
        pauseOnHover: false,
        slidesToShow: 1,
        // @todo: this should be markup, not in JS
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">' + this.getSvgArrow('prev') + '</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">' + this.getSvgArrow('next') + '</button>',
        responsive: []
      },
      allowFallbackImages: true
    };

    // loop through all defaults and set value to any options passed in
    this.updateDefaults(this, defaults, options);
  }

  /**
   * Builds SVG arrows for carousel navigation.
   * @param {string} direction - direction arrow should point
   * @returns {string} svg markup
   */
  getSvgArrow(direction) {

    const points = (direction === 'prev') ? '23.6,60.8 6.7,32 23.6,3.2 25.3,4.2 9,32 25.3,59.8' : '8.4,3.2 25.3,32 8.4,60.8 6.7,59.8 23,32 6.7,4.2';
    return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 64" enable-background="new 0 0 32 64" xml:space="preserve"><polygon fill="#fff" points="' + points + ' "/></svg>';

  }

  /**
   * Updates defaults to override with options passed in and sets to this instance.
   * @param {object} carousel - current carousel instance
   * @param {object} defaults - default values
   * @param {object} options - options values passed in
   * @param {object} context - if nested object,
   * this context will be the higher level key (optional)
   *
   */
  updateDefaults(carousel, defaults, options, context) {


    // if no context passed in
    // then we are on the top level of the Carousel object
    let currentContext = context ? context : carousel;

    // loop through defaults
    for (let key in defaults) {
      if (defaults.hasOwnProperty(key)) {

        // if the value of the key is a nested object
        // use this function recursively to loop through again
        if (jQuery.isPlainObject(defaults[key])) {

          carousel[key] = {};
          carousel.updateDefaults(carousel, defaults[key], options[key], carousel[key]);

        } else {

          // update the keys value
          currentContext[key] = (options && typeof options[key] !== 'undefined') ? options[key] : defaults[key];
        }
      }
    }

    if (this.carousel) {
      this.slides = this.carousel.find('.carousel-slide');
      this.slideImages = this.slides.find('.carousel__slide-image');
    }
  }

  /**
   * Adds event listeners.
   */
  addEvents() {

    this.slideImages.on('error', this.onImageError.bind(this));

  }

  /**
   * Checks if any images are broken and creates a fallback.
   * @param {object} e - jQuery event
   */
  onImageError(e) {

    let image = e.target;

    if (image) {

      if (this.allowFallbackImages && !image.classList.contains('lazyloaded')) {

        const fallbackImage = new FallbackImage({
          el: image
        });
        fallbackImage.init();
      }

      // remove error listener
      jQuery(image).off('error', this.onImageError);

    }

  }

  /**
   * Sets up carousel using slick caorusel.
   */
  setupCarousel() {

    // if we want smooth, constant scrolling
    if (this.smoothScrolling) {

      // add those settings to any responsive breakpoints
      this.addSmoothScrollingSettings();
    }

    // actually init slick carousel
    this.carousel.slick(this.settings);
    if (this.onInit) {
      this.onInit();
    }

  }

  /**
   * Adds smooth, constant scrolling via the slidesToShow property.
   */
  addSmoothScrollingSettings() {

    const breakpoints = this.settings.responsive || [];
    let settings;

    if (breakpoints.length > 0) {
      for (let i = 0; i < breakpoints.length; i += 1) {
        settings = breakpoints[i].settings;
        settings.slidesToScroll = this.greatestCommonFactor(this.slideImages.length, settings.slidesToShow);
      }

      this.settings = jQuery.extend({}, this.settings, {
        slidesToScroll: this.greatestCommonFactor(this.slideImages.length, this.settings.slidesToShow),
        responsive: breakpoints
      });
    }

  }

  /**
   * Generates the greatest common factor for smooth scrolling.
   * @param {Number} totalSlides - total number of slides in carousel
   * @param {Number} slidesToShow - desired slides to show
   * @returns {Number} - updated slide number
   */
  greatestCommonFactor(totalSlides, slidesToShow) {
    return (slidesToShow === 0) ? totalSlides : this.greatestCommonFactor(slidesToShow, totalSlides % slidesToShow);
  }

};

module.exports = Carousel;
