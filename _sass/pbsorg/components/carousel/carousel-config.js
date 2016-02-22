'use strict';

let Carousel = {
    settings: {
      "accessibility": true,
      "dots": true,
      "pauseOnHover": false,
      "prevArrow": '<button type="button" data-role="none" class="slick-prev" aria-label="previous"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 64" enable-background="new 0 0 32 64" xml:space="preserve"><polygon fill="#fff" points="23.6,60.8 6.7,32 23.6,3.2 25.3,4.2 9,32 25.3,59.8 "/></svg></button>',
      "nextArrow": '<button type="button" data-role="none" class="slick-next" aria-label="next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 64" enable-background="new 0 0 32 64" xml:space="preserve"><polygon fill="#fff" points="8.4,3.2 25.3,32 8.4,60.8 6.7,59.8 23,32 6.7,4.2 "/></svg></button>'
    },

    autoplaySpeed: 11500,
    
    /**
     * Generates the greatest common factor for smooth scrolling.
     * @param {Number} totalSlides - total number of slides in carousel
     * @param {Number} slidesToShow - desired slides to show
     * @returns {Number} - updated slide number
     */
    greatestCommonFactor: function gcf(totalSlides, slidesToShow) {
      return (slidesToShow === 0) ? totalSlides : gcf(slidesToShow, totalSlides % slidesToShow);
    }
  };

module.exports = Carousel;
