'use strict';

import $ from 'jquery';
import queryString from 'query-string';
import * as SignInModal from '../../sign-in/sign-in';
import Modal from '../../modal/modal';

let _signInModal;

/**
 * Shows sign in modal.
 */
const _showModal = (customParams) => {

  const data = customParams || {};

  if (_signInModal) {
    _signInModal.show(data);
  }

};

/**
 * When 'Sign In' is clicked in navigation.
 * @param {event} e
 */
const _onSignInClick = (e) => {

  e.preventDefault();
  _showModal();

};

/**
 * When 'Sign Out' is clicked in navigation.
 * @param {event} e
 */
const _onSignOutClick = (e) => {

  e.preventDefault();

  SignInModal.signOut();

};

/**
 * Adds events for this module.
 */
const _addEvents = () => {

  $('.js-user-dropdown__sign-out').on('click', _onSignOutClick);
  $('.js-user-dropdown__sign-in').on('click', _onSignInClick);

};

const _setupSignInModal = () => {

  const options = {
    modalId: '#loginModalWindow',
    modalTrigger: '.btn--sign-in',
    focusTarget: '#modal-login__dialog',
    childView: SignInModal
  };

  _signInModal = new Modal(options);

};

/**
 * Checks for re-direct and if we need to open the sign-in modal.
 */
const _checkForMvodRedirect = () => {

  const params = queryString.parse(window.location.search);

  if (params.showSignIn === 'true' && params.returnURL) {

    _showModal({
      code: 'MVOD',
      action: 'Upsell screen',
      type: 'sign-in',
      url: params.returnURL
    });
  }

};

/**
 * On init.
 */
const init = () => {

  _addEvents();
  _setupSignInModal();
  _checkForMvodRedirect();

};

export { init };
