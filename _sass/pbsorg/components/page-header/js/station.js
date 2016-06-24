'use strict';

import $ from 'jquery';
import { isViewportOver, isTouchDevice } from '../../../scripts/modules/utils-basic';

const _cache = {};


/**
 * Caches re-used elements.
 */
const _setupCache = () => {

  _cache.body = $('body');
  _cache.stationTrigger = $('.page-header__station-trigger');
  _cache.stationContainer = $('.page-header__station-container');
  _cache.searchLink = $('.search-label');

};

/**
 * Shows the right side station menu.
 */
const _showStationMenu = () => {
  _cache.body
    // make sure the nav is closed
    .removeClass('nav-is-open')
    // make sure the user dropdown is closed
    .removeClass('desktop-user-menu-is-open')
    .addClass('station-is-open');
  _cache.stationTrigger.attr('aria-expanded', true);
};

/**
 * Hides the right side station menu.
 */
const hideStationMenu = () => {
  _cache.body.removeClass('station-is-open');
  _cache.stationTrigger.attr('aria-expanded', false);
};

/**
 * Handles a click to the station trigger (right side station menu button).
 */
const _onStationTriggerClick = () => {

  if (_cache.body.hasClass('station-is-open')) {
    hideStationMenu();
  } else {
    _showStationMenu();
  }

};

/**
 * If user clicks on station dropdown at 1024px+ screen,
 * we want the station dropdown to hide on mouseleave
 */
const onStationMouseLeave = () => {
  if (isViewportOver(1024) && !isTouchDevice()) {
    hideStationMenu();
  }
};

/**
 * Adds event handlers.
 */
const _addEvents = () => {

  // Open/close right side station menu on click
  _cache.stationTrigger.on('click', _onStationTriggerClick);

  // We want to hide the station menu
  // if a user has triggered the station-is-visible class but have moused out -
  // we need 'mouseleave' so it works on child elements
  _cache.stationContainer.on('mouseleave', onStationMouseLeave);

  // if a user has invoked the station menu with a keyboard,
  // leaving the station menu jumps you to the search link.
  // At this point we want to hide the station menu
  _cache.searchLink.on('focus', hideStationMenu);

};

/**
 * On init.
 */
const init = () => {

  _setupCache();
  _addEvents();

};

export { init, hideStationMenu };
