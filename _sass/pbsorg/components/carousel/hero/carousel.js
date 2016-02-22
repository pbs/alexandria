let jQuery = window.jQuery = require('jquery'),
  PBS = require('../../../scripts/_pbs'),
  Carousel = require('../carousel'),
  Utils = require('../../../scripts/_utils'),
  FallbackLogo = require('../../../scripts/_fallback-logo');

// jQuery throttle/debounce plugin;
require('../../../bower_components/limit/limit.js');

jQuery(($) => {

  let _cache = {},

  /**
   * Initializes.
   */
  init = () => {

    setupCache();
    checkForBrokenLogos();
    setupCarousel();
    addEvents();

  },

  /**
   * Caches re-used elements.
   */
  setupCache = () => {

    _cache.window = $(window);
    _cache.carouselSection = $('.carousel--hero');
    _cache.carousel = _cache.carouselSection.find('.carousel-container');
    _cache.carouselImages = _cache.carousel.find('.carousel--hero__image');

  },

  /**
   * Adds event handlers.
   */
  addEvents = () => {

    _cache.window.on('resize.carousel--hero', onCarouselResize.debounce(PBS.debounceDelay));
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
        allowFallbackImages: false,
        onInit: onCarouselResize.bind(this)
      },
      carousel = new Carousel(options);

    _cache.pauseButton = _cache.carouselSection.find('.slick-pause');

  },

  /**
   * On window resize for carousel.
   * @note need to position the arrows on mobile properly,
   * can't do it with JUST css because we don't know the width
   */
  onCarouselResize = () => {

    let width = _cache.window.innerWidth(),
      newTop = width * 0.28;

    _cache.carouselControls = _cache.carousel.find('.slick-prev, .slick-next');

    if (width < PBS.breakpoints.sm) {

      // should change to class instead of css props
      _cache.carouselControls.css('top', newTop);
    } else {

      _cache.carouselControls.removeAttr('style');

    }

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
   * Checks all carousel show logos to see if they are broken.
   */
  checkForBrokenLogos = () => {

    let showLogos = $('.carousel--hero__headline__logo'),
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
