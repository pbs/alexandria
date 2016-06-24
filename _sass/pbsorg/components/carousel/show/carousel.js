'use strict';

import jQuery from 'jquery';
import { checkForZeroNaturalImageWidth } from '../../../scripts/modules/utils';

const Carousel = require('../carousel');
const FallbackLogo = require('../../../scripts/_fallback-logo');

/**
 * @todo: create general hero carousel.
 */
jQuery(($) => {

  const _cache = {};

  /**
   * Caches re-used elements.
   */
  const setupCache = () => {

    _cache.carouselSection = $('.carousel--show');
    _cache.carousel = _cache.carouselSection.find('.carousel-container');
    _cache.carouselImages = _cache.carousel.find('.carousel--show__image');

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
      }
    };
    const carousel = new Carousel(options);

    if (carousel) {
      _cache.pauseButton = _cache.carouselSection.find('.slick-pause');
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
   * Checks carousel show logo to see if it is broken.
   */
  const checkForBrokenLogo = () => {

    const showLogos = $('.carousel--show__headline--logo__logo');
    let logo;

    for (let i = 0; i < showLogos.length; i += 1) {

      logo = showLogos[i];

      checkForZeroNaturalImageWidth(logo)

        // if broken, create fallback logo element.
        .fail(createFallbackLogo);

    }

  };

  /**
   * Adds event handlers.
   */
  const addEvents = () => {

    _cache.pauseButton.on('click', onPauseClick);

  };

  /**
   * Initializes.
   */
  const init = () => {

    setupCache();
    setupCarousel();
    checkForBrokenLogo();
    addEvents();

  };

  init();

});

