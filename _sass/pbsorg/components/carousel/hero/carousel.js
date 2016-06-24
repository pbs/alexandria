'use strict';

import jQuery from 'jquery';
import { checkForZeroNaturalImageWidth } from '../../../scripts/modules/utils';

const PBS = require('../../../scripts/_pbs');
const Carousel = require('../carousel');
const FallbackLogo = require('../../../scripts/_fallback-logo');

// jQuery throttle/debounce plugin;
require('../../../bower_components/limit/limit.js');

jQuery(($) => {

  const _cache = {};

  /**
   * Caches re-used elements.
   */
  const setupCache = () => {

    _cache.window = $(window);
    _cache.carouselSection = $('.carousel--hero');
    _cache.carousel = _cache.carouselSection.find('.carousel-container');
    _cache.carouselImages = _cache.carousel.find('.carousel--hero__image');

  };

  /**
   * On window resize for carousel.
   * @note need to position the arrows on mobile properly,
   * can't do it with JUST css because we don't know the width
   */
  const onCarouselResize = () => {

    const width = _cache.window.innerWidth();
    const newTop = width * 0.28;

    _cache.carouselControls = _cache.carousel.find('.slick-prev, .slick-next');

    if (width < PBS.breakpoints.sm) {

      // should change to class instead of css props
      _cache.carouselControls.css('top', newTop);
    } else {

      _cache.carouselControls.removeAttr('style');

    }

  };

  /**
   * Callback for when pause button is clicked.
   * @note Manual pause solution found here:
   * http://stackoverflow.com/questions/29707645/slick-carousel-functions-not-executing
   */
  const onPauseClick = (e) => {

    let $icon = $(e.currentTarget).find('i');

    if ($icon.hasClass('icon-pbs-pause-2')) {
      _cache.carousel.slick('slickPause');
      $icon.removeClass('icon-pbs-pause-2').addClass('icon-pbs-play-2');
    } else {
      _cache.carousel.slick('slickPlay').slick('slickNext');
      $icon.removeClass('icon-pbs-play-2').addClass('icon-pbs-pause-2');
    }
  };

  /**
   * Instantiates new fallback logo.
   * @param {HTML element} logo - logo element to replace
   */
  const createFallbackLogo = (logo) => {

    const fallbackLogo = new FallbackLogo({
      el: logo,
      element: 'span',
      text: logo.getAttribute('alt'),
      className: 'show-logo-fallback'
    });

    fallbackLogo.init();

  };

  /**
   * Checks all carousel show logos to see if they are broken.
   */
  const checkForBrokenLogos = () => {

    const showLogos = $('.carousel--hero__headline__logo');
    let logo;

    for (let i = 0; i < showLogos.length; i += 1) {

      logo = showLogos[i];

      checkForZeroNaturalImageWidth(logo)
        // if broken, create fallback logo element.
        .fail(createFallbackLogo.bind(this));

    }

  };

  /**
   * Sets up carousel.
   */
  const setupCarousel = () => {

    const options = {
      carousel: _cache.carousel,
      removeAriaLive: true,
      settings: {
        autoplay: true,
        autoplaySpeed: 11500
      },
      allowFallbackImages: false,
      onInit: onCarouselResize.bind(this)
    };
    const carousel = new Carousel(options);

    if (carousel) {
      _cache.pauseButton = _cache.carouselSection.find('.slick-pause');
    }

  };

  /**
   * Adds event handlers.
   */
  const addEvents = () => {

    _cache.window.on('resize.carousel--hero', onCarouselResize.debounce(PBS.debounceDelay));
    _cache.pauseButton.on('click', onPauseClick);

  };

  /**
   * Initializes.
   */
  const init = () => {

    setupCache();
    checkForBrokenLogos();
    setupCarousel();
    addEvents();

  };

  init();

});
