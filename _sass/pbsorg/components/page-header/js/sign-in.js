'use strict';

import $ from 'jquery';

/**
 * @todo: move other sign-in code to here
 * and clean up global variables
 */

/**
 * When 'Sign In' is clicked in navigation.
 * @param {event} e
 */
const _onSignInClick = (e) => {

  e.preventDefault();

  if (window.PBS) {
    window.PBS.Profile.signIn('LNK', 'Home', 'sign-in', window.location.href);
  }

};

/**
 * When 'Sign Out' is clicked in navigation.
 * @param {event} e
 */
const _onSignOutClick = (e) => {

  e.preventDefault();

  if (window.PBS) {
    window.PBS.Profile.signOut();
  }

};

/**
 * Adds events for this module.
 */
const _addEvents = () => {

  $('.nav-user__links__sign-out').on('click', _onSignOutClick);
  $('.btn--sign-in').on('click', _onSignInClick);

};

/**
 * On init.
 */
const init = () => {

  _addEvents();

};

export { init };
