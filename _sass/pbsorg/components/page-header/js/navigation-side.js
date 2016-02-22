'use strict';

import $ from 'jquery';

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
  _cache.pageHeader = $('.page-header');
  _cache.mainNavTrigger = $('.page-header__main-nav-trigger');
  _cache.pageWrapper = $('.page-wrapper__inner');
  _cache.stationTrigger = $('.page-header__station-trigger');
  _cache.dropdownControl = $('.user-info__dropdown-control');
  _cache.dropdownControlLabel = $('.user-info__dropdown-control__label');

};

/**
 * Handles a click to the main nav trigger (left side hamburger menu button).
 */
const _onMainNavTriggerClick = (e) => {
  e.preventDefault();
  if (_cache.body.hasClass('nav-is-open')) {
    hideUserMenu();
  } else {
    _showUserMenu();
  }

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
 * Shows the left side user menu.
 */
const _showUserMenu = () => {
  hideStationMenu();
  _cache.body.addClass('nav-is-open');
};

/**
 * Hides the left side user menu.
 */
const hideUserMenu = () => {
  _cache.body.removeClass('nav-is-open');
  _cache.mainNavTrigger.blur();
};


/**
 * Shows the right side station menu.
 */
const _showStationMenu = () => {
  _cache.body
    .removeClass('nav-is-open') // make sure the user menu is closed
    .removeClass('user-dropdown-is-open') // make sure the user dropdown is closed
    .addClass('station-is-open');
};

/**
 * Hides the right side station menu.
 */
const hideStationMenu = () => {
  _cache.body.removeClass('station-is-open');
};

/**
 * Updates label for user dropdown in side menu.
 */
const _updateUserDropdownText = (text) => {
  _cache.dropdownControlLabel.text(text);
};

/**
 * Show or hide user dropdown menu in side menu based on local storage.
 * @param {String} toggleDirection - direction to toggle {show|hide}
 */
const _toggleUserDropdown = (toggleDirection) => {

  if (toggleDirection === 'show') {

    // show the user dropdown menu
    _cache.dropdownControl
      .addClass('is-open');

  } else {

    // hide the user dropdown menu
    _cache.dropdownControl
      .removeClass('is-open');

  }

  _cache.dropdownControl.blur();

};

/**
 * Handles a click to the Open/Close button ('.user-info__dropdown-control') within the user side menu.
 */
const _onDropdownControlClick = () => {

  // reverse all current state
  if (sessionStorage.getItem('menu-is-open') === 'true') {

    _toggleUserDropdown('hide');
    _updateUserDropdownText(_config.sideUserText.open);
    sessionStorage.setItem('menu-is-open', 'false');

  } else {

    _toggleUserDropdown('show');
    _updateUserDropdownText(_config.sideUserText.close);
    sessionStorage.setItem('menu-is-open', 'true');

  }
};


/**
 * Checks sessionStorage for previously saved menu state and sets user side menu accordingly
 */
const _setInitialMenuState = () => {

  // check if localstorage set
  if (sessionStorage.getItem('menu-is-open') === 'true') {

    _updateUserDropdownText(_config.sideUserText.close);
    _toggleUserDropdown('show');

  }

};

/**
 * Adds event handlers.
 */
const _addEvents = () => {

  // Open/close left side user menu on click
  _cache.mainNavTrigger.on('click', _onMainNavTriggerClick);

  // Open/close right side station menu on click
  _cache.stationTrigger.on('click', _onStationTriggerClick);

  // In left side user menu, open/close user dropdown links
  _cache.dropdownControl.on('click', _onDropdownControlClick);

};

/**
 * On init.
 */
const init = () => {

  _setupCache();
  _setInitialMenuState();
  _addEvents();

};

export { init, hideStationMenu, hideUserMenu };
