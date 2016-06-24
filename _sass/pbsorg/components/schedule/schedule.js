'use strict';

import jQuery from 'jquery';
import { replaceWithFormattedTime } from '../../scripts/modules/utils';

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
    replaceWithFormattedTime($('.home-schedule__table-cell-time'));

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
