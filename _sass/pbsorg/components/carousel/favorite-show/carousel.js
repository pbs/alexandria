'use strict';

let jQuery = window.jQuery = require('jquery'),
  Carousel = require('../carousel'),
  PBS = require('../../../scripts/_pbs');

// responsive image processor, and its handlebars helper;
require('picturefill');

jQuery(($) => {

  let init = () => {

    // init the responsive images plugin;
    window.picturefill();

    setupCarousel();
  
  },

  /**
   * Creates up carousel instance with custom settings.
   */
  setupCarousel = () => {

    let options = {
      carousel: $('.carousel-favorite-show').find('.carousel-container'),
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
