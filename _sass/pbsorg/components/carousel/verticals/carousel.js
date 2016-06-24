'use strict';

import jQuery from 'jquery';

const Carousel = require('../carousel');
const PBS = require('../../../scripts/_pbs');

// responsive image processor;
require('picturefill');

jQuery(($) => {

  const _cache = {},

  /**
   * Initializes component.
   */
  _init = () => {

    _setupCache();

    // init the responsive images plugin
    window.picturefill({
      elements: _cache.carousel.find('.carousel__slide-image').filter('[srcset]')
    });

    _setupCarousel();

  },

  /**
   * Caches re-used elements
   */
  _setupCache = () => {
    _cache.carousel = $('.carousel--verticals').find('.carousel-container');
  },

  /**
   * Creates a carousel instance with custom settings.
   */
  _setupCarousel = () => {

    const options = {
      carousel: _cache.carousel,
      smoothScrolling: false,
      settings: {
        infinite: true,
        dots: false,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: PBS.breakpoints.slick.lg,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: PBS.breakpoints.slick.md,
            settings: {
              slidesToShow: 3
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

  _init();

});
