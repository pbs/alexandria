'use strict';

import { debounce, isViewportOver, isTouchDevice, responsiveAttribute } from '../../scripts/modules/utils-basic';

/**
 * Config object
 */
const _config = {
  poster: {
    attribute: 'poster',
    sizes: [
      {
        dataAttr: 'data-lg-poster',
        minSize: 1280
      },
      {
        dataAttr: 'data-md-poster',
        minSize: 1024
      },
      {
        dataAttr: 'data-sm-poster',
        minSize: 768
      }
    ],
    defaultAttr: 'data-df-poster'
  }
};

/**
 * Cache for referenced elements.
 * @type {object} _cache
 */
const _cache = {};

/**
 * Setup _cache of referenced elements.
 */
const _setupCache = () => {
  _cache.mediaHero = document.querySelector('.media-hero');
  _cache.mediaHeroVideo = document.querySelector('.media-hero__video');
};



/**
 * Adds event handlers.
 */
const _addEvents = () => {

  // If there is a video, and if we're on a touch device,
  // attach a 'orientationchange' event listener to
  // invoke the responsiveAttribute function
  if (_cache.mediaHeroVideo && isTouchDevice()) {
    window.addEventListener('orientationchange', function() {
      responsiveAttribute(_cache.mediaHeroVideo, _config.poster);
    });
  }
};

/**
 * Init on page load
 */
const _init = () => {

  _setupCache();
  _addEvents();

};

_init();
