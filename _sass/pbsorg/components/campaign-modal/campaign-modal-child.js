'use strict';

import $ from 'jquery';

const _cache = {};

/**
 * Sets up _cache object of element references.
 */
const _setupCache = () => {
  _cache.cookieValue = 0;
  _cache.donateLink = $('.donate-link');
};

/**
 * Creates cookie when user clicks donate link
 */
const _onDonateLinkClick = () => {
  createCookie('pbs.donateCampaign.donated', 1, 60);
};

/**
 * Event listener for user clicking donate link
 */
const _addEvents = () => {
  _cache.donateLink.on('click', _onDonateLinkClick);
};

/**
 * Removes event listener after user clicks donate link
 */
const _removeEvents = () => {
  _cache.donateLink.off('click', _onDonateLinkClick);
};

/**
 * Registering the modal impression via the GTM Data Layer
 */
const _addEventToGTM = () => {
  GTMDataLayer.push({
    'event': 'DonateModalImpression',
  });
};

/**
 * Creates cookies so users is only shown 1 modal a day and 3 total
 */
const _createCookies = () => {
  let today_midnight = new Date();
  let cookieValue = !isNaN(parseInt(readCookie('pbs.donateCampaign.counter'))) ? parseInt(readCookie('pbs.donateCampaign.counter')) : 0;

  today_midnight.setHours(23,59,59);

  let d = new Date();
  d.setDate(d.getDate() + 1); //add a day
  document.cookie = 'pbs.donateCampaign.dontShowToday=1; expires='+ d.toString() +'; path=/; domain=.pbs.org';

  createCookie('pbs.donateCampaign.counter', ++cookieValue, 60);
};

/**
 * From modal.js, called when modal is shown
 */
const onShow = () => {
  if (GTMDataLayer) {
    _addEventToGTM();
  }
  _addEvents();
};

/**
 * From modal.js, called when modal is closed
 */
const onHide = () => {
  _createCookies();
  _removeEvents();
};

/**
 * Initializes
 */
const init = () => {
  _setupCache();
  _addEvents();
};

export { init, onShow, onHide };
