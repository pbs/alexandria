'use strict';

import { debounce, isViewportOver, responsiveAttribute } from '../../scripts/modules/utils-basic';

/**
 * Config object
 */
const _config = {
  bg: {
    attribute: 'style',
    sizes: [
      {
        dataAttr: 'data-md-bg',
        minSize: 1024
      },
      {
        dataAttr: 'data-sm-bg',
        minSize: 768
      },
      {
        dataAttr: 'data-xs-bg',
        minSize: 480
      }
    ],
    defaultAttr: 'data-df-bg',
    valueWrapper: {
      prefix: 'background-image: url(',
      suffix: ')'
    }
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
  _cache.collections = document.querySelectorAll('.collection');
};

/**
 * On window resize event.
 * This needs a separate function so we can debounce it
 */
const _onWindowResize = debounce(() => {
  for (let i = 0; i < _cache.collections.length; i++) {
    responsiveAttribute(_cache.collections[i], _config.bg);
  }
}, 200);

/**
 * Adds event handlers.
 */
const _addEvents = () => {
  window.addEventListener('resize', _onWindowResize);
};

/**
 * Init on page load
 */
const _init = () => {

  _setupCache();
  _addEvents();

  for (let i = 0; i < _cache.collections.length; i += 1) {
    responsiveAttribute(_cache.collections[i], _config.bg);
  }

};

_init();
