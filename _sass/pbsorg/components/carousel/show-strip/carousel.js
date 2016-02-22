'use strict';

let jQuery = window.jQuery = require('jquery');
let Carousel = require('../carousel');
let PBS = require('../../../scripts/_pbs');

// responsive image processor;
require('picturefill');

jQuery(($) => {

  let _cache = {},

  /**
   * Initializes component.
   */
  init = () => {

    setupCache();

    // init the responsive images plugin
    window.picturefill({
      elements: _cache.carousel.find('.carousel__slide-image').filter('[srcset]')
    });

    setupCarousel();

  },

  /**
   * Caches re-used elements
   */
  setupCache = () => {
    _cache.carousel = $('.carousel-show-strip').find('.carousel-container');
  },

  /**
   * Creates up carousel instance with custom settings.
   */
  setupCarousel = () => {

    let options = {
      carousel: _cache.carousel,
      settings: {
        infinite: true,
        dots: false,
        slidesToShow: 6,
        responsive: [
          {
            breakpoint: PBS.breakpoints.slick.lg,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: PBS.breakpoints.slick.md,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: PBS.breakpoints.slick.sm,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: PBS.breakpoints.slick.smaller,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      }
    },

    // create new carousel instance and init
    carousel = new Carousel(options);

  };

  init();

});
