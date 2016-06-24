'use strict';

const jQuery = require('jquery');
const FallbackImage = require('../../../scripts/_fallback-image');

require('picturefill');
require('lazysizes');

jQuery(($) => {

  const _cache = {},

  /**
   * Caches re-used elements
   */
  setupCache = () => {
    _cache.showBlock = $('.show-block');
    _cache.toBeLazyLoadedImages = _cache.showBlock.find('.lazyload');
  },

  /**
   * Applies picturefill only when an image has been lazy loaded
   * @param (jQuery event) e
   */
  _onLazyLoaded = (e) => {
    window.picturefill({
      elements: [e.target]
    });
  },

  /**
   * Initializes component.
   */
  init = () => {

    setupCache();

    // init the responsive images plugin
    window.picturefill({
      elements: _cache.showBlock.find('.lazyloaded')
    });

    _cache.toBeLazyLoadedImages.on('load', _onLazyLoaded);

  };

  init();

});
