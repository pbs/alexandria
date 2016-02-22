let jQuery = window.jQuery = require('jquery'),
  Carousel = require('../carousel'),
  Utils = require('../../../scripts/_utils'),
  FallbackLogo = require('../../../scripts/_fallback-logo');

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
    checkForBrokenLogo();
    addEvents();

  },

  /**
   * Caches re-used elements.
   */
  setupCache = () => {

    _cache.carouselSection = $('.carousel--show');
    _cache.carousel = _cache.carouselSection.find('.carousel-container');
    _cache.carouselImages = _cache.carousel.find('.carousel--show__image');

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
        }
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
  },

  /**
   * Checks carousel show logo to see if it is broken.
   */
  checkForBrokenLogo = () => {

    let showLogos = $('.carousel--show__headline--logo__logo'),
      logo;

    for (let i = 0; i < showLogos.length; i++) {

      logo = showLogos[i];

      Utils.checkForZeroNaturalImageWidth(logo)
        .fail((image) => {

          // if broken, create fallback logo element.
          createFallbackLogo(image);

        });

    }

  },

  /**
   * Instantiates new fallback logo.
   * @param {HTML element} logo - logo element to replace
   */
  createFallbackLogo = (logo) => {

    let fallbackLogo = new FallbackLogo({
        el: logo,
        element: 'span',
        text: logo.getAttribute('alt'),
        className: 'show-logo-fallback'
      });

    fallbackLogo.init();

  };

  init();

});

