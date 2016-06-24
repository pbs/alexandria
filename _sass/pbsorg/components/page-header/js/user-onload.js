'use strict';

import $ from 'jquery';
import * as ResumeWatchingVideo from './resume-watching';
import * as User from '../../../scripts/modules/personal';
import { isHeavyTrafficMode } from '../../../scripts/modules/utils-basic';
import { isSignedIn } from '../../../scripts/modules/utils';
import WatchlistCounter from './watchlist-counter';

/**
 * Caches reuseable elements.
 * @type {object} _cache
 */
const _cache = {};

/**
 * Config for default user onload values.
 * @type {object} _config
 */
const _config = {
  hiddenClass: 'is-hidden',
  defaultMvodCookie: {
    expires: 0,
    path: '/',
    domain: '.pbs.org'
  }
};

/**
 * Sets up cache of of resuable elements.
 */
const _setupCache = () => {

  if (!_cache.signInButton) {
    _cache.signInButton = $('#userDropdownLoggedOut');
    _cache.body = $('body');
  }

  if (isSignedIn()) {
    _cache.$viewingHistoryContent = $('.user-dropdown__viewing-history, .nav-item--resume-video');
    _cache.$userDropdownContent = $('#userDropdown, .user-dropdown__links, .user-dropdown');
    _cache.$userDropdown = _cache.$userDropdownContent.filter('.user-dropdown');
    _cache.$username = $('.user-name, .user-info__name');
    _cache.$profileImageContainer = $('.header__image-container');
    _cache.$profileImage = _cache.$profileImageContainer.find('.user-info__image');
    _cache.$passportProfileImage = $('.passport-logo-image__container');
    _cache.$resumeWatching = $('.user-dropdown__viewing-history__videos');
    _cache.$resumeWatchingVideo = $('.user-dropdown__viewing-history__video');
  }

};

/**
 * Shows the 'Sign in' button in the header.
 */
const _showHeaderSignInButton = () => {

  _cache.signInButton.removeClass(_config.hiddenClass);

};

/**
 * Enables the user dropdown in the header to be seen.
 */
const _enableUserDropdown = () => {

  _cache.$userDropdownContent.removeClass(_config.hiddenClass);

};

const _getResumeVideoMarkup = (videos) => {

  // create temp fragment to store udpated videos
  let updatedVideos = document.createDocumentFragment();
  let videoMarkupTemplate = _cache.$resumeWatchingVideo.detach();

  _cache.$mobileResumeVideo = $('.nav-item--resume-video');

  videos.map((video, i) => {

    const newVideo = ResumeWatchingVideo.setData(videoMarkupTemplate.clone(), video);
    if (newVideo) {
      updatedVideos.appendChild(newVideo[0]);
    }

    // append to mobile menu as well
    if (i === 0) {
      _cache.$mobileResumeVideo.append(newVideo.clone());
    }

  });

  videoMarkupTemplate = null;

  return updatedVideos;

};

/**
 * Updates resume watching section in dropdown of the header.
 * @param {object} data - data object from request
 */
const _updateResumeWatching = (videos) => {

  // if there are no videos, return;
  if (videos.length === 0) {
    return;
  }

  // add updated markup back to resume watching section
  _cache.$resumeWatching.append(_getResumeVideoMarkup(videos));

  // show divs for content
  _cache.$viewingHistoryContent.removeClass(_config.hiddenClass);

  // add class to shift dropdown to the left
  _cache.$userDropdown.addClass('has-viewing-history');

};

/**
 * Initializes watchlist counter.
 * @param {object} favoriteVideos - data object from request
 * @param {number} favoriteVideos.count - count of favorite videos
 */
const _updateWatchlistCount = (favoriteVideos) => {

  if (favoriteVideos.count === 'undefined') {
    return;
  }

  const watchlistCounter = new WatchlistCounter({
    count: favoriteVideos.count
  });
  watchlistCounter.updateCount();

};

/**
 * Updates passport cookies based on data when user signs in.
 * @param {object} data - user data
 */
const _updatePassportCookies = (data) => {

  const mvodCookie = $.cookie('pbs_mvod');

  if (data.is_passport && !mvodCookie) {

    const config = Object.assign({}, _config.defaultMvodCookie, {
      expires: 30
    });

    $.cookie('pbs_mvod', data.stations, config);

  } else if (!data.is_passport && mvodCookie) {

    $.cookie('pbs_mvod', null, _config.defaultMvodCookie);

  }

};

/**
 * Updates username and thumbnail based on data when user signs in.
 * @param {object} data - user data
 */
const _updateNameAndThumbnail = (data) => {

  const { username, thumbnail_URL } = data;

  // update name
  _cache.$username.html(username);

  // if there is a thumbnail image, update src
  if (thumbnail_URL) {
    _cache.$profileImage.attr('src', thumbnail_URL);
  } else {
    _cache.$profileImageContainer.remove();
  }

  // if is passport, show passport icon
  // display smaller passport logo in corner of profile image if profile image exists
  // if no profile image, just display passport logo on its own
  if (data.is_passport) {
    _cache.$passportProfileImage.removeClass('is-hidden');
  }

};

/**
 * Check is video page and updates DOM.
 * @param {object} data - user data returned from request.
 * @todo - reassass how we handle page level on load functionality
 */
const _updateVideoPage = (data) => {

  _cache.$videoExpiration = $('#videoExpirationVariable');

  if (data.user_passport_video && _cache.$videoExpiration.length > 0) {
    if (data.user_passport_video.has_expire_date) {

      // new expire date, replace content
      _cache.$videoExpiration
        .html('Expires: ' + data.user_passport_video.expire_date)
        .removeClass('is-hidden');

    } else {

      // never expires, remove whole Expire section
      _cache.$videoExpiration.addClass('is-hidden');

    }
  }
};

/**
 * Updates buttons based on data returned when user signs in.
 * @param {array} content - array of videos
 * @param {string} key - slug or id of video
 * @todo rework this when refactor buttons via RWEB-4481
 */
const _updateButtons = (content, key) => {

  if (content.length === 0) {
    return;
  }

  // for each video, update button if on the page
  content.map((obj) => {
    const $btn = $('*[data-' + key + '-id="' + obj.id + '"]');
    const txt = $btn.find('.btn--text').data('text-selected');

    // set as selected visually and via text
    $btn
      .addClass('selected')
      .find('.btn--text')
          .text(txt);

  });

};

/**
 * Updates all of the places on a page with user-dynamic data.
 * @param {object} data - data returned from request
 */
const _updateLayoutWithUserData = (data) => {

  _cache.body.addClass('user-is-signed-in');

  // updates username and thumbnail
  _updateNameAndThumbnail(data);

  // updates resume video in user dropdown
  if (data.resume_watching) {
    _updateResumeWatching(data.resume_watching.content);
  }

  // updates watchlist count
  if (data.favorite_videos) {
    _updateWatchlistCount(data.favorite_videos);
  }

  // show dropdown
  _enableUserDropdown();

  // update buttons
  _updateButtons(data.favorite_videos.content, 'video');
  _updateButtons(data.favorite_shows.content, 'show');

  // for video page, update expiration
  if (_cache.body.hasClass('video')) {
    _updateVideoPage(data);
  }

};

/**
 * When /personal request is done.
 * @param {object} data - data returned from request.
 */
const _onRequestDone = (data) => {

  // @todo: change this to use getters for personal data object
  window.PBS.personalData = data;

  // setup cache for items related to signed in
  _setupCache();

  // update passport cookie
  _updatePassportCookies(data);

  // if data has username
  if (data.username) {

    // update page layout based on data
    _updateLayoutWithUserData(data);

  } else {

    // otherwise, show sign in button again
    _showHeaderSignInButton();

  }

};

/**
 * On /personal request error.
 */
const _onRequestError = () => {

  _showHeaderSignInButton();

};

/**
 * Initializes user onload module.
 */
const init = () => {

  _setupCache();

  // if user is signed in
  if (isSignedIn()) {

    // if heavy traffic, sign out
    if (isHeavyTrafficMode()) {

      User.logout();

    } else {

      // otherwise, get users data
      User
        .sendRequest()
        .done(_onRequestDone)
        .error(_onRequestError);

    }

  // if user isn't signed in yet
  } else {

    // set cookie
    if ($.cookie('pbs_mvod')) {
      $.cookie('pbs_mvod', null, _config.defaultMvodCookie);
    }

    // show sign in button
    _showHeaderSignInButton();

  }

};

export { init };
