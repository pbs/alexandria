'use strict';

let jQuery = window.jQuery = require('jquery');
let Utils = require('../../scripts/_utils');

jQuery(($) => {

  let _cache = {};

  /**
   * Caches re-used elements.
   * @returns {function} _setupCache
   */
  let _setupCache = () => {

    _cache.scheduleSection = $('.schedule .section-title');

  };

  /**
   * Formats times.
   * @returns {function} _formatTimes
   */
  let _formatTimes = () => {

    // format times in home schedule section
    Utils.replaceWithFormattedTime($('.home-schedule__table-cell-time'));

  };

  /**
   * Initializes component.
   * @returns {function} _init
   */
  let _init = () => {

    _setupCache();
    _formatTimes();

  };

  _init();

});
