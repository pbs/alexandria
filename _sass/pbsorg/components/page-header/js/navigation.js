'use strict';

import jQuery from 'jquery';
import * as SideNav from './navigation-side';

const PBS = require('../../../scripts/_pbs');
const Utils = require('../../../scripts/_utils');

require('../../../bower_components/limit/limit.js');

const _cache = {};

/**
 * Caches re-used elements.
 */
const _setupCache = () => {
  _cache.window = $(window);
  _cache.body = $('body');
  _cache.navItems = $('.page-header__nav-items');
  _cache.pageWrapperInner = $('.page-wrapper__inner');
  _cache.userDropdownTrigger = $('#userDropdown');
  _cache.searchInput = $('.header-search');
  _cache.searchListItem = $('.nav-item--search');
};

/**
 * Handles a click outside of the side menus while a menu is open.
 */
const _closeAllMenus = (e) => {

  const $el = $(e.target);

  if (_cache.body.hasClass('nav-is-open')) {
    SideNav.hideUserMenu();
  } else if (_cache.body.hasClass('station-is-open')) {
    SideNav.hideStationMenu();
  } else if (_cache.body.hasClass('user-dropdown-is-open')) {
    _hideUserDropdown();
  }

};

/**
 * If the clicked element has a parent of 'prevent-close', we show the user menu. If not, we close all menus.
 */
const _showUserMenuOrCloseMenus = (e) => {

  const $el = $(e.target);

  if($el.closest('.prevent-close').length > 0) {
    if (_cache.body.hasClass('user-dropdown-is-open')) {
      _hideUserDropdown();
    } else {
      _showUserDropdown();
    }
  } else {
    _closeAllMenus(e);
  };

};

/**
 *  Shows the user dropdown menu on touch devices over 1023px wide.
 */
const _showUserDropdown = () => {
  if (_cache.body.hasClass('station-is-open')) {
    SideNav.hideStationMenu();
  }
  _cache.body.addClass('user-dropdown-is-open');
};

 /**
  * Hides the user dropdown menu on touch devices over 1023px wide.
  */
const _hideUserDropdown = () => {
  _cache.body.removeClass('user-dropdown-is-open');
};

/**
 * Checks if screen size is over 1023px wide, or the "medium" breakpoint.
 */
const _isOverMdSize = () => {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    return true;
  }
  return false;
};

/**
 * Keeps search menu open
 */
const _keepSearchDropdownOpen = () => {
  _cache.searchListItem.addClass('is-open');
};

/**
 * Makes sure the search dropdown stays open if the user has started to fill it in
 */
const _shouldSearchDropdownBeOpen = () => {
  if ( _cache.searchInput.val() !== '' ) {
    _keepSearchDropdownOpen();
  } else {
    _cache.searchListItem.removeClass('is-open');
  }
};

/**
 * Handles the window expanding past 1023px wide while a menu is open
 */
const onWindowResize = () => {
  if (_isOverMdSize()) {
    SideNav.hideUserMenu();
    SideNav.hideStationMenu();
  }
};

/**
 * Adds event handlers.
 */
const _addEvents = () => {

  if (Utils.isTouchDevice()) {

    // Close menus if user taps in main content while a menu is open
    _cache.pageWrapperInner.on('touchend', _closeAllMenus);

    // Open/close user dropdown with tap (for touch screens above 1023px e.g. iPad landscape)
    if ( _isOverMdSize()) {
      _cache.navItems.on('touchend', _showUserMenuOrCloseMenus);
    }
  } else {
    // Close menus if user clicks in main content while a menu is open
    _cache.pageWrapperInner.on('click', _closeAllMenus);

    if ( _isOverMdSize()) {
      // if the search input is in focus, we always want it open. this enables right-click filling of the input
      _cache.searchInput.on('focus', _keepSearchDropdownOpen);

      // when someone is entering search terms, or clearing them, we need to figure out of the search drop down should stay open
      _cache.searchInput.on('keyup change', _shouldSearchDropdownBeOpen);
    }
  }

  // Close menus if page expands past 1023px wide
  _cache.window.resize(onWindowResize.debounce(PBS.debounceDelay));

};

/**
 * On init.
 */
const init = () => {

  _setupCache();
  _addEvents();
  SideNav.init();

};

export { init };
