'use strict';

import $ from 'jquery';
require('../../scripts/jquery.pbs.cookie.js');

/**
 * Reference object for re-usable elements.
 * @type {object}
 */
const _cache = {};

/**
 * Reference object for static data.
 * @type {object}
 */
const _config = {
  defaults: {
    // valid options are 'LNK' or 'MVOD'
    code: 'LNK',
    action: 'Home',
    type: 'sign-in',
    url: window.location.href
  },
  domain: '.pbs.org',
  csrftoken: $.cookie('csrftoken'),
  cookies: {
    redirect: {
      name: 'pbsol.redirect_url',
      duration: 360
    },
    campaign: {
      name: 'tmp_campaign_info',
      duration: 10
    }
  }
};

/**
 * Sets up _cache object of element references.
 */
const _setupCache = () => {

  _cache.modal = $('.login-modal');
  _cache.whyPbsLink = $('.sign-in__message--question');
  _cache.whyPbsContent = $('.sign-in__message--answer');
  _cache.messages = _cache.modal.find('.copy-message');
  _cache.body = $('body');

};

/**
 * On 'Why sign in to PBS?' link click
 * @param {jQuery event} e
 */
const _onWhyPbsLinkClick = (e) => {

  e.preventDefault();

  // toggle content to show and hide
  if (_cache.whyPbsContent.hasClass('is-hidden')) {
    _cache.whyPbsContent.removeClass('is-hidden');
  } else {
    _cache.whyPbsContent.addClass('is-hidden');
  }

};

/**
 * Update modal messaging for various scenarios
 * @param {string} messageTypeToShow - class of message div to show
 */
const _updateMessaging = (messageTypeToShow) => {

  _cache.messages.filter('.' + messageTypeToShow)
    .removeClass('is-hidden')
    .siblings('.copy-message')
      .addClass('is-hidden');

};

/**
 * Sets cookie.
 * @param {string} cookieKey - cookie to set
 * @param {string | null} val - value to set cookie to
 */
const _setCookie = (cookieKey, val) => {

  const cookie = _config.cookies[cookieKey];
  $.cookie(cookie.name, val, {
    expires: cookie.duration,
    path: '/',
    domain: _config.domain
  });

};

/**
 * Sets cookies needed to redirect after sign-in flow.
 * @param {string} campaignCode - campaign code
 * @param {string} action - @todo find out what this does
 * @param {string} message - @todo find out what this is
 * @param {string} redirectUrl - if redirected, page to go to
 */
const signIn = (campaignCode, action, message, redirectUrl) => {

  // why are we setting this?
  window.GAaction = action || '';

  const url = redirectUrl || window.location.href;

  _setCookie('redirect', url);

  if (campaignCode) {
    _setCookie('campaign', campaignCode);
  }

};

/**
 * Signs out of profile service.
 */
const signOut = () => {

  const iframe = document.createElement('iframe');
  iframe.className = 'is-hidden';
  iframe.src = window.PBS_ACCOUNT_BASE_URL + 'logout/';

  document.body.appendChild(iframe);

  // logout and reload page
  $(iframe).load(function() {
    $.ajax({
      url: '/logout/',
      type: 'post',
      success: () => {
        location.reload();
      }
    });
  });

};

/**
 * Adds event handlers.
 */
const _addEvents = () => {

  _cache.whyPbsLink.on('click', _onWhyPbsLinkClick);

};

/**
 * Removes event handlers.
 */
const _removeEvents = () => {

  _cache.whyPbsLink.off('click', _onWhyPbsLinkClick);

};


/**
 * Inits sign in.
 */
const init = () => {

  _setupCache();

};

/**
 * On show public method.
 * @param {object} data - custom data
 */
const onShow = (data) => {

  const updatedData = Object.assign({}, _config.defaults, data);

  // hide any nav if it is open
  _cache.body.removeClass('nav-is-open');

  // show correct message
  _updateMessaging(updatedData.type);

  // set redirect url and cookies
  signIn(updatedData.code, updatedData.action, updatedData.type, updatedData.url);

  // add events
  _addEvents();

};

/**
 * On hide public method.
 */
const onHide = () => {

  _removeEvents();

  // update cookie for redirect
  _setCookie('redirect', null);


};

export { init, onShow, onHide, signIn, signOut };
