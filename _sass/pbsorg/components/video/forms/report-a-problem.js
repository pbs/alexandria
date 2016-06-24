'use strict';

import $ from 'jquery';
require('../../../scripts/pbs_storage.js');

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
  cookieDomain: 'pbs.org',
  csrftoken: $.cookie('csrftoken'),
  url: '/feedback/submit/',
  defaultErrorMsg: 'There was an error sending your request. Please try again later',
  maxChar: 500,
  params: {
    videoTitle: window.PBS.playerConfig.title,
    videoId: window.PBS.playerConfig.id,
    // @todo: these two properties aren't working now and we need to determine which values to send
    // @todo: consider adding os/browser
    x_client_id: window.Storage.getStorageItem(localStorage, 'guid'),
    x_session_id: window.Storage.getStorageItem(sessionStorage, 'guid') || window.Storage.getStorageItem(localStorage, 'guid')
  }
};

/**
 * Sets up _cache object of element references.
 */
const _setupCache = () => {

  _cache.modal = $('.report-problem__dialog');
  _cache.formContainer = $('.report-problem__form-container');
  _cache.form = _cache.formContainer.find('.report-problem__form');
  _cache.select = _cache.form.find('.report-problem__form-select');
  _cache.detailsContainer = _cache.form.find('.report-problem__form-more-details');
  _cache.textarea = _cache.detailsContainer.find('.report-problem__form-textarea');
  _cache.messageContainer = $('.report-problem__form-message-container');
  _cache.message = _cache.messageContainer.find('.report-problem__form-message');

};

/**
 * Shows textarea details.
 */
const _showDetails = () => {
  _cache.detailsContainer
    .addClass('report-problem__form--visible');
};

/**
 * Hides textarea details.
 */
const _hideDetails = () => {
  _cache.detailsContainer
    .removeClass('report-problem__form--visible');
};

/**
 * On select option changed.
 * @param {jQuery event} e
 */
const _onSelectChange = (e) => {

  _checkTextAreaVisibility(e.target);

};

/**
 * Check which option is selected and show a textarea if needed.
 * @param {DOM element} select - the selected form option
 */
const _checkTextAreaVisibility = (select) => {
  if (select) {
    const selectedIndex = select.selectedIndex;
    const selectedOption = select[selectedIndex];

    if (selectedOption.classList.contains('report-problem__form-trigger')) {
      _showDetails();
    } else {
      _hideDetails();
    }
  }
}

/**
 * Limits text length.
 * @param {jQuery event} e
 */
const _limitText = (e) => {

  let timeout;

  clearTimeout(timeout);

  // delay the text triming, otherwise the last charcter will always change
  // and also for paste so value is set before we check how long it is
  timeout = setTimeout(() => {
    const input = e.target;
    const value = input.value;

    if (value.length >= _config.maxChar) {
      input.value = value.substr(0, _config.maxChar);
    }
  }, 100);
};


/**
 * Checks request method.
 * @param {string} method - request method
 * @returns {boolean} if is safe method
 */
const _csrfSafeMethod = (method) => {
  // these HTTP methods do not require CSRF protection
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
};

/**
 * On before send ajax request.
 * @param {ActiveXObject || XMLHttpRequest} xhr
 * @returns {object} settings - current request object
 */
const _onBeforeSend = (xhr, settings) => {
  if (!_csrfSafeMethod(settings.type) && !settings.crossDomain) {
      xhr.setRequestHeader('X-CSRFToken', _config.csrftoken);
  }
};

/**
 * Shows message and hides form.
 * @param {string} msg - message to display
 */
const _showMessage = (msg) => {

  _cache.formContainer.addClass('report-problem__form-section--hidden');
  _cache.message.html(msg);
  _cache.messageContainer
    .removeClass('report-problem__form-section--hidden');
  _cache.modal.focus();
};

const _resetForm = () => {

  _hideDetails();
  _cache.formContainer.removeClass('report-problem__form-section--hidden');
  _cache.messageContainer.addClass('report-problem__form-section--hidden');
  _cache.select.prop('selectedIndex', 0);
  _cache.textarea.val('');

};

/**
 * On successful ajax request
 * @param {object} data - data returned
 */
const _onSubmitSuccess = (data) => {

  _showMessage(data.errorMessage);

};

/**
 * On failed ajax request
 * @param {object} data - data returned
 */
const _onSubmitError = (data) => {
  const msg = data.errorMessage || _config.defaultErrorMsg;
  _showMessage(msg);
};

/**
 * Builds payload to send for report a problem.
 * @returns {object} payload
 */
const _buildPayload = () => {

  const payload = Object.assign({}, _config.params, {
    errorType: _cache.select.val()
  });

  const textareaValue = _cache.textarea.val();

  if (textareaValue) {
    payload.errorDetails = textareaValue;
  }

  return payload;

};

/**
 * On form submit
 * @param {jQuery event} e
 */
const _onFormSubmit = (e) => {

  e.preventDefault();
  e.stopPropagation();

  const payload = _buildPayload();

  $.ajax({
    url: _config.url,
    type: 'post',
    data: payload,
    beforeSend: _onBeforeSend,
    error: _onSubmitError,
    success: _onSubmitSuccess
  });

};

/**
 * Adds event handlers.
 */
const _addEvents = () => {

  _cache.select.on('change', _onSelectChange);
  _cache.textarea.on('keypress paste', _limitText);
  _cache.form.on('submit', _onFormSubmit);

};

/**
 * Removes event handlers.
 */
const _removeEvents = () => {

  _cache.select.off('change', _onSelectChange);
  _cache.textarea.off('keypress paste', _limitText);
  _cache.form.off('submit', _onFormSubmit);

};


/**
 * Inits report a problem form.
 */
const init = () => {

  _setupCache();

};

/**
 * On show public method.
 */
const onShow = () => {

 _addEvents();

// Check if we need the textarea to show up as soon as modal displays;
// This is necessary for Firefox, which keeps old selected options cached even after reload:
// http://stackoverflow.com/questions/10870567/firefox-not-refreshing-select-tag-on-page-refresh#answer-10870894
 _checkTextAreaVisibility(_cache.select[0]);

};

/**
 * On hide public method.
 */
const onHide = () => {

  _removeEvents();

  // reset form only if message is displayed
  if (_cache.formContainer.hasClass('report-problem__form-section--hidden')) {
    _resetForm();
  }


};

export { init, onShow, onHide };
