'use strict';

import $ from 'jquery';
import * as Station from './station';
import { isViewportOver, isTouchDevice } from '../../../scripts/modules/utils-basic';

const _cache = {};

const _config = {
  sideUserText: {
    close: 'Close',
    open: 'Open'
  }
};

/**
 * Caches re-used elements.
 */
const _setupCache = () => {
  _cache.body = $('body');
  _cache.userContainer = $('.nav-item--user');
  _cache.userTrigger = $('.user-name-toggle');
  _cache.userTriggerLabel = $('.user-info__dropdown-control__label');
  _cache.nextLinks = $('.nav-item--home > a, .nav-item--shows > a');
};

/**
 * Updates label for user dropdown in side menu.
 */
const _updateUserDropdownText = (text) => {
  _cache.userTriggerLabel.text(text);
};

/**
 * Show user dropdown menu in side menu.
 */
const _showMobileUserMenu = () => {

  _cache.body.addClass('mobile-user-menu-is-open');
  _updateUserDropdownText(_config.sideUserText.close);
  sessionStorage.setItem('mobile-user-menu-is-open', 'true');
  _cache.userTrigger.blur();

};

/**
 * Show or hide user dropdown menu in side menu based on local storage.
 */
const _hideMobileUserMenu = () => {

  // hide the user dropdown menu
  _cache.body.removeClass('mobile-user-menu-is-open');
  _updateUserDropdownText(_config.sideUserText.open);
  sessionStorage.setItem('mobile-user-menu-is-open', 'false');
  _cache.userTrigger.blur();

};

/**
 * Show desktop user dropdown menu, and hide the station menu (if it's open)
 */
const showDesktopUserMenu = () => {

  Station.hideStationMenu();
  _cache.body.addClass('desktop-user-menu-is-open');
  _cache.userTrigger.attr('aria-expanded', true);

};

/**
 * Show or hide user dropdown menu in side menu based on local storage.
 * @param {String} toggleDirection - direction to toggle {show|hide}
 */
const hideDesktopUserMenu = () => {

  _cache.body.removeClass('desktop-user-menu-is-open');
  _cache.userTrigger.attr('aria-expanded', false);

};

/**
 * Handles a click to the user trigger. Some scenarios here are covered
 * in navigation.js > _closeMenusOrShowUserMenu
 */
const _onUserTriggerClick = () => {
  // We want to react if we're below $md
  if (!isViewportOver(1024)) {
    // If the body has the class indicating that the mobile user menu is open
    if (_cache.body.hasClass('mobile-user-menu-is-open')) {
      // Then hide the mobile user menu
      _hideMobileUserMenu();
    } else {
      // If the body does NOT have the class indicating that the mobile user menu is open,
      // Show the mobile user menu
      _showMobileUserMenu();
    }

  // If we are above $md, but NOT on a touch device, we want to react.
  // This addresses keyboard navigation scenarios at desktop
  } else if (!isTouchDevice()) {
    if (_cache.body.hasClass('desktop-user-menu-is-open')) {
      hideDesktopUserMenu();
    } else {
      // Let's show the desktop user menu
      showDesktopUserMenu();
    }
  }

};


/**
 * Checks sessionStorage for previously saved menu state and sets user side menu accordingly
 */
const _setInitialMenuState = () => {

  // check if localstorage set
  if (sessionStorage.getItem('mobile-user-menu-is-open') === 'true') {

    _showMobileUserMenu();

  }

};

/**
 * Adds event handlers.
 */
const _addEvents = () => {

  // When the user clicks on the user trigger, both on mobile and desktop breakpoints
  _cache.userTrigger.on('click', _onUserTriggerClick);

  if (!isTouchDevice()) {
    _cache.userContainer.on('mouseleave', hideDesktopUserMenu);
  }

  _cache.nextLinks.on('focus', hideDesktopUserMenu);


};

/**
 * On init.
 */
const init = () => {

  _setupCache();
  _setInitialMenuState();
  _addEvents();

};

export { init, hideDesktopUserMenu, showDesktopUserMenu };
