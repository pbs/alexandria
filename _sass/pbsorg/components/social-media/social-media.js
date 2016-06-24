'use strict';

// lazy-load background image
require('lazysizes');
require('../../bower_components/lazysizes/plugins/bgset/ls.bgset.js');
require('../../bower_components/slick-carousel');

import $ from 'jquery';
import { debounce, isViewportOver } from '../../scripts/modules/utils-basic';

/**
 * Config for default ad specs.
 * @type {object} _config
 */
const _config = {
  bp: 768,
  buffer: 300,
  carousel: {
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    fade: true,
    speed: 800
  }
};

/**
 * Cache for referenced elements.
 * @type {object} _cache
 */
const _cache = {};

/**
 * Setup _cache of referenced elements.
 */
const _setupCache = () => {
  // we need the jquery object for _setupTweetCarousel
  _cache.tweetsContainers = $('.tweets-container');
  _cache.facebookDiv = document.getElementById('fb-root');
  _cache.socialMediaContainer = document.querySelector('section.social-media');
};

/**
 * Tests to see if the Social Media Component is vertically
 * in or close to the viewport
 * @returns true if it is
 */
const _isSocialMediaVisibleVertically = () => {

  const socialMediaRect = _cache.socialMediaContainer.getBoundingClientRect();
  const socialMediaVertOffset = socialMediaRect.top;

  if (socialMediaVertOffset - _config.buffer <= window.scrollY || socialMediaVertOffset - _config.buffer <= document.documentElement.scrollTop) {
    return true;
  }

  return false;
};

/**
 * First we test if the facebook root div is present
 * Then we test to see if the Social Media Component is vertically
 * in or close to the viewport, and that we are above 768
 * @returns false if none of these conditions are met @returns true if they are
 */

const _shouldFBLoad = () => {

  if (!_cache.facebookDiv) {
    return false;
  }

  if (_isSocialMediaVisibleVertically() && isViewportOver(_config.bp)) {
    return true;
  }

  return false;

};

/**
 * Actually call the Facebook SDK, then remove any event listeners
 */
const _getFacebookSDK = () => {
  // This is the code provided by Facebook's documentation:
  // https://developers.facebook.com/docs/plugins/like-button#example
  (function(d, s, id) {
    var js;
    var fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s); js.id = id;
    js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // since the FB SDK is called, we can now remove both event listeners
  window.removeEventListener('resize', _onWindowResize);
  window.removeEventListener('scroll', _onWindowScroll);
};

/**
 * On window resize event.
 */
const _onWindowResize = debounce(() => {

  if (_shouldFBLoad()) {
    _getFacebookSDK();
  }

}, 200);

/**
 * On window scroll event.
 */
const _onWindowScroll = debounce(() => {

  if (_shouldFBLoad()) {
    _getFacebookSDK();
  }

}, 100);

/**
 * Init the carousel, based on the _config
 */
const _setupTweetCarousel = () => {
  // using .each in the unlikely event we end up with multiple social media components on a page
  _cache.tweetsContainers.each(function() {
    const container = $(this);

    // when this carousel is inited, make sure aria-live is off, because it's annoying
    container.on('init', function() {
      container.find('.slick-list').attr('aria-live', 'off');
    });

    // init the carousel;
    container.slick(_config.carousel);
  });
};

/**
 * Adds event handlers.
 */
const _addEvents = () => {

  if (_cache.facebookDiv) {

    // we only want to attach these event handlers if the facebook div is on the page
    window.addEventListener('resize', _onWindowResize);
    window.addEventListener('scroll', _onWindowScroll);

  }

};

/**
 * Init on page load
 */
const _init = () => {

  _setupCache();
  _setupTweetCarousel();

  if (_shouldFBLoad()) {

    _getFacebookSDK();

  } else {

    _addEvents();

  }

};

_init();
