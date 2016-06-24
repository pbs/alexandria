'use strict';

import $ from 'jquery';
import { debounce, isViewportOver } from '../../scripts/modules/utils-basic';
import { replaceWithFormattedTime } from '../../scripts/modules/utils';

/**
 * Config for station component values.
 * @type {object} _config
 */
const _config = {
  bp: 768,
  buffer: 300
};

/**
 * Cache for referenced elements.
 * @type {object} _cache
 */
const _cache = {};

/**
 * Caches re-used elements.
 */
const _setupCache = () => {

  _cache.stationSection = $('.station .section-body');
  _cache.times = _cache.stationSection.find('.home-station-schedule__table-cell-time');

};

/**
 * Formats times.
 */
const _formatTimes = () => {

  replaceWithFormattedTime(_cache.times);

};

/**
 * Tests to see if the Station Component is vertically
 * in or close to the viewport
 * @returns true if it is
 */
const _isStationVisibleVertically = () => {

  if (_cache.stationSection.length !== 0) {
    const stationRect = _cache.stationSection[0].getBoundingClientRect();
    const stationVertOffset = stationRect.top;

    if (stationVertOffset - _config.buffer <= window.scrollY || stationVertOffset - _config.buffer <= document.documentElement.scrollTop) {
      return true;
    }
  }

  return false;

};

/**
 * Test to see if the Station Component is vertically
 * in or close to the viewport, and that we are above 768
 * @returns false if none of these conditions are met @returns true if they are
 */

const _shouldBGLoad = () => {

  if (_isStationVisibleVertically() && isViewportOver(_config.bp)) {
    return true;
  }

  return false;

};

/**
 * On window resize event.
 */
const _onWindowResize = debounce(() => {

  if (_shouldBGLoad()) {
    _getBackgroundImage();
  }

}, 200);

/**
 * On window scroll event.
 */
const _onWindowScroll = debounce(() => {

  if (_shouldBGLoad()) {
    _getBackgroundImage();
  }

}, 100);

/** a function that swaps the background image based on the screensize
 * this allows for different stations to have different background images
 * which manifest themselves in the html as data attributes.
 * if they do not provide an image, one is assigned in the CSS
 * (see station.scss), but the inline background-image declaration will
 * override the default.
 */
const _getBackgroundImage = () => {

  // assuming we have background data attributes, assigning them to variables
  const smBg = _cache.stationSection.attr('data-sm-bg');
  const mdBg = _cache.stationSection.attr('data-md-bg');

  // changing the background image based on the screen width
  if (isViewportOver(1024)) {
    _cache.stationSection.css('background-image', 'url(' + mdBg + ')');

    // since the highest-res image is called, we can now remove both event listeners
    window.removeEventListener('resize', _onWindowResize);
    window.removeEventListener('scroll', _onWindowScroll);

  } else if (isViewportOver(_config.bp)) {
    _cache.stationSection.css('background-image', 'url(' + smBg + ')');
  }

};

/**
 * Adds event listeners.
 */
const _addEvents = () => {

  // only listen for these events if there are background data attributes
  if (_cache.stationSection.attr('data-sm-bg')) {
    window.addEventListener('resize', _onWindowResize);
    window.addEventListener('scroll', _onWindowScroll);
  }

};

/**
 * Initializes component on page load.
 */
const _init = () => {

  _setupCache();
  _formatTimes();

  if (_shouldBGLoad() && isViewportOver(1024)) {

    _getBackgroundImage();

  } else if (_shouldBGLoad()) {

    _getBackgroundImage();
    _addEvents();

  } else {

    _addEvents();

  }

};

_init();
