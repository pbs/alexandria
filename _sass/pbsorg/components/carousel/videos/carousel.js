let jQuery = window.jQuery = require('jquery'),
  Carousel = require('../carousel');

/**
 * @todo: create general hero carousel.
 */
jQuery(($) => {

  let _cache = {},

  /**
   * Initializes.
   */
  init = () => {

    setupCache();
    setupCarousel();
    addEvents();

  },

  /**
   * Caches re-used elements.
   */
  setupCache = () => {

    _cache.carouselSection = $('.carousel--videos');
    _cache.carousel = _cache.carouselSection.find('.carousel-container');
    _cache.carouselImages = _cache.carousel.find('.carousel__slide-image');

  },

  /**
   * Adds event handlers.
   */
  addEvents = () => {

    _cache.pauseButton.on('click', onPauseClick);

  },

  /**
   * Sets up carousel.
   */
  setupCarousel = () => {

    let options = {
        carousel: _cache.carousel,
        settings: {
          autoplay: true,
          autoplaySpeed: 11500
        },
        allowFallbackImages: false
      },
      carousel = new Carousel(options);

    _cache.pauseButton = _cache.carouselSection.find('.slick-pause');

  },

  /**
   * Callback for when pause button is clicked.
   * @note Manual pause solution found here:
   * http://stackoverflow.com/questions/29707645/slick-carousel-functions-not-executing
   */
  onPauseClick = (e) => {

    let $icon = $(e.currentTarget).find('i');

      if ($icon.hasClass('icon-pbs-pause-2')) {
        _cache.carousel.slick('slickPause');
        $icon.removeClass('icon-pbs-pause-2').addClass('icon-pbs-play-2');
      } else {
        _cache.carousel.slick('slickPlay').slick('slickNext');
        $icon.removeClass('icon-pbs-play-2').addClass('icon-pbs-pause-2');
      }
  };

  init();

});
