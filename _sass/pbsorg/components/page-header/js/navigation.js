'use strict';

import $ from 'jquery';
import * as SideNav from './navigation-side';
import * as Station from './station';
import * as UserMenu from './user-menu';
import * as ShowsDropdown from './shows-dropdown';
import { isViewportOver, isTouchDevice } from '../../../scripts/modules/utils-basic';

const PBS = require('../../../scripts/_pbs');

require('../../../bower_components/limit/limit');
require('../../../scripts/jquery.pbs.cookie');

const _config = {
  donateRequest: {
    url: 'profile/updateDonateHistory/',
    type: 'post'
  }
};

const _cache = {};

/**
 * Caches re-used elements.
 */
const _setupCache = () => {
  _cache.window = $(window);
  _cache.body = $('body');
  _cache.navItems = $('.page-header__nav-items');
  _cache.pageWrapperInner = $('.page-wrapper__inner');
  _cache.searchInput = $('.header-search');
  _cache.searchListItem = $('.nav-item--search');
  _cache.tvSchedules = $('#tvSchedules');
  _cache.donateUnlocalized = $('#donateUnlocalized');
};

/**
 * Closes all the menus, depending on body classes that are present.
 * Used in both mobile and desktop breakpoints.
 */
const _closeAllMenus = () => {

  if (_cache.body.hasClass('nav-is-open')) {
    SideNav.hideNav();
  } else if (_cache.body.hasClass('station-is-open')) {
    Station.hideStationMenu();
  } else if (_cache.body.hasClass('desktop-user-menu-is-open')) {
    UserMenu.hideDesktopUserMenu();
  }

};

/**
 * This is triggered by clicking on the nav items area.
 * We're basically making sure that they haven't clicked on the User button.
 * It's nav item has a class of "prevent-close".
 */
const _closeMenusOrShowUserMenu = (e) => {

  // $el is the thing that has been clicked on, which can be either the ul.nav-items, a .nav-item,
  // or more specifically the .nav-item.prevent-close
  const $el = $(e.target);

  // we need to evaluate on each click/tap whether or not the viewport is over $md (1024px)
  if(isViewportOver(1024)) {
    // if there is NOT a parent with the class "prevent-close" (which the user nav item *does*)
    // we will close *all* the menus
    if ($el.closest('.prevent-close').length === 0) {
      _closeAllMenus(e);

    // Otherwise we can assume the user has clicked on the user nav item, or an element within it
    // If the body has the class indicating that the desktop user menu is open,
    // hide the desktop user menu
    } else if (_cache.body.hasClass('desktop-user-menu-is-open')) {
      UserMenu.hideDesktopUserMenu();

    // The body does not have the class indicating that the desktop user menu is open,
    // so we need to *show* the desktop user menu.
    // This needs to be explicity re-stated (as opposed to _onUserTriggerClick in user-menu.js)
    // Because touch devices need the extra prodding.
    } else {
      UserMenu.showDesktopUserMenu();
    }
  }
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
  if (_cache.searchInput.val() !== '') {
    _keepSearchDropdownOpen();
  } else {
    _cache.searchListItem.removeClass('is-open');
  }
};

/**
 * Handles the window expanding past 1023px wide while a menu is open
 */
const onWindowResize = () => {
  if (isViewportOver(1024)) {
    SideNav.hideNav();
    Station.hideStationMenu();
  }
};

/**
 * This happens when there is no localization
 */
const _initJAWS = (e, msg) => {
  if (window.JAWS && window.JAWS.Localization) {
    window.JAWS.Localization.init(msg);
  }
};

const _onDonateClick = (e) => {
  _initJAWS(e, 'Donate');
  $.ajax(_config.donateRequest);
};

const _onTvSchedulesClick = (e) => {
  _initJAWS(e, 'TVSchedules');
};

/**
 * Adds event handlers.
 */
const _addEvents = () => {

  if (isTouchDevice()) {

    // Close menus if user taps in main content while a menu is open
    _cache.pageWrapperInner.on('touchend', _closeAllMenus);

    // If a user on a touch device taps on the nav items area,
    // we will determine whether or not to close menus or show the User Menu
    // (this applies mostly to > 1024 - eg. iPad Landscape)
    _cache.navItems.on('touchend', _closeMenusOrShowUserMenu);

  } else {
    // Close menus if user clicks in main content while a menu is open
    _cache.pageWrapperInner.on('click', _closeAllMenus);

    if (isViewportOver(1024)) {

      // if the search input is in focus, we always want it open.
      // this enables right-click filling of the input
      _cache.searchInput.on('focus', _keepSearchDropdownOpen);

      // when someone is entering search terms, or clearing them,
      // we need to figure out of the search drop down should stay open
      _cache.searchInput.on('keyup change blur', _shouldSearchDropdownBeOpen);
    }
  }

  // Close menus if page expands past 1023px wide
  _cache.window.resize(onWindowResize.debounce(PBS.debounceDelay));

  // when donate is clicked and user is not localized
  if (_cache.donateUnlocalized.length > 0) {
    _cache.donateUnlocalized.on('click', _onDonateClick);
  }

  // when tv schedules button is clicked and user is not localized
  if (_cache.tvSchedules.length > 0) {
    _cache.tvSchedules.on('click', _onTvSchedulesClick);
  }

};

/**
 * On init.
 */
const init = () => {

  _setupCache();
  _addEvents();
  SideNav.init();
  UserMenu.init();
  Station.init();
  ShowsDropdown.init();

};

export { init };
