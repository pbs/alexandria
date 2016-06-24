'use strict';

import $ from 'jquery';
import * as Station from './station';
import { isTouchDevice } from '../../../scripts/modules/utils-basic';

const _cache = {};

/**
 * Caches re-used elements.
 */
const _setupCache = () => {
  _cache.body = $('body');
  _cache.mainNavTrigger = $('.page-header__main-nav-trigger');
  _cache.searchInput = $('#header-search');

};

/**
 * Shows the left side nav.
 */
const _showNav = () => {
  Station.hideStationMenu();
  _cache.body.addClass('nav-is-open');
};

/**
 * Hides the left side nav.
 */
const hideNav = () => {
  _cache.body.removeClass('nav-is-open');
  _cache.mainNavTrigger.blur();

  // Remove focus from search input on touch devices - fixes problem of disappearing header
  if (isTouchDevice()) {
    _cache.searchInput.blur();
  }
};

/**
 * Handles a click to the main nav trigger (left side hamburger menu button).
 */
const _onMainNavTriggerClick = (e) => {
  e.preventDefault();
  if (_cache.body.hasClass('nav-is-open')) {
    hideNav();

  } else {
    _showNav();
  }

};

/**
 * Adds event handlers.
 */
const _addEvents = () => {

  // Open/close left side user menu on click
  _cache.mainNavTrigger.on('click', _onMainNavTriggerClick);

};

/**
 * On init.
 */
const init = () => {

  _setupCache();
  _addEvents();

};

export { init, hideNav };
