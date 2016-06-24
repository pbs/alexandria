'use strict';

import FunderAd from './ad-funder';
import ResponsiveAd from './ad-responsive';
import AdhesionAd from './ad-adhesion';
import LazyloadAd from './ad-lazyload';

/**
 * Data from python bundle, set on _init.
 * @type {object} _data
 */
let _data = {};

/**
 * Instantiates new ads based on data passed from view.
 */
const _createAds = (ads, adClass) => {

  ads.map((adData) => {

    let AdClass = adClass;

    if (adData.lazyload) {
      AdClass = LazyloadAd;
    }

    const ad = new AdClass(adData);
    ad.render();

  });

};

/**
 * Waits for DOM before creating ads.
 */
const _onDomReady = () => {

  if (_data.ad_slots) {
    _createAds(_data.ad_slots, ResponsiveAd);
  }

  if (_data.adhesion_slot) {
    _createAds([_data.adhesion_slot], AdhesionAd);
  }

  if (_data.funder_slots) {
    _createAds(_data.funder_slots, FunderAd);
  }

  document.removeEventListener('DOMContentLoaded', _onDomReady);

};

/**
 * Enables pubads service once,
 * implementing async rendering and disabling initial load
 */
const _enablePubServices = () => {

  window.googletag.cmd.push(function() {

    window.googletag.pubads().enableAsyncRendering();

    // disable initial load
    // google's recommended implementation of lazy loading
    // see https://support.google.com/dfp_premium/answer/4578089?hl=en
    window.googletag.pubads().disableInitialLoad();
    window.googletag.enableServices();

  });

};

/**
 * Inits ads component.
 * @param {ojbect} data - ad data from python
 */
const init = (data) => {

  // googletag exists
  if (window.googletag) {

    _data = data;

    _enablePubServices();

    // add event listener for when DOM is ready
    // need to wait to add events, cache els, etc
    document.addEventListener('DOMContentLoaded', _onDomReady);

  }

};


export { init };
