import jQuery from 'jquery';
import Modal from '../../modal/modal';
import * as ReportProblemForm from '../forms/report-a-problem';
import * as EmbedModalSelect from './embed-modal-child';
import { checkForZeroNaturalImageWidth } from '../../../scripts/modules/utils';

const FallbackLogo = require('../../../scripts/_fallback-logo');

// include button actions
require('../../../scripts/_buttons');

jQuery(($) => {

  let _cache = {};

  /**
   * @const _modals
   * Object to store references to modals so we only create them once.
   */
  const _modals = {
    embedModal: undefined,
    reportProblemModal: undefined
  };

  /**
   * Caches re-used elements.
   */
  const setupCache = () => {

    _cache.logos = $('.video-player__logo');
    _cache.embedModalTrigger = $('.embed-modal-trigger');
    _cache.reportProblemTrigger = $('.video-issues');

  };

  /**
   * Sets up the Embed Modal for sharing the video embed code
   */
  const setupEmbedModal = () => {
    const options = {
      modalId: '#embedModal',
      modalTrigger: '.embed-modal-trigger',
      focusTarget: '#modal-embed__dialog',
      childView: EmbedModalSelect
    };

    _modals.embedModal = new Modal(options);
  };

  /**
   * Sets up report a problem modal.
   */
  const setupReportProblemModal = () => {

    const options = {
      modalId: '#reportProblemModal',
      modalTrigger: '.video-issues',
      focusTarget: '#report-problem__dialog',
      lastFocusableEl: '#close-report-problem',
      childView: ReportProblemForm
    };

    _modals.reportProblemModal = new Modal(options);

  };

  /**
   * Shows a modal.
   * @param {jQuery event} e
   */
  const _showModal = (e, modal) => {
    e.preventDefault();
    e.stopPropagation();

    if (_modals[modal]) {
      _modals[modal].show();
    }
  };

  /**
   * Shows the Embed Modal when the specific trigger is clicked
   */
  const onEmbedClick = (e) => {

    _showModal(e, 'embedModal');

  };

  /**
   * On report a problem link click.
   */
  const onReportProblemClick = (e) => {

    _showModal(e, 'reportProblemModal');

  };

  /**
   * Do not display the share options if the video is expired
   */
  const hideShareOptionsForExpiredVideos = () => {

    const $utilities = $('.video-player__utilities');
    const expiration = $utilities.data('expiration');

    if (expiration) {
      const expDate = new Date(expiration);
      const actualDate = new Date();
      if (expDate >= actualDate) {
        $utilities.removeClass('is-hidden');
      }
    } else if (expiration === '') {
      $utilities.removeClass('is-hidden');
    }
  };

  /**
   * Instantiates new fallback logo.
   * @param {HTML element} logo - logo element to replace
   */
  const createFallbackLogo = (logo) => {

    const fallbackLogo = new FallbackLogo({
      el: logo,
      element: 'span',
      text: logo.getAttribute('alt'),
      className: 'video-player__logo--text'
    });

    fallbackLogo.init();

  };

  /**
   * Checks for any broken logos.
   */
  const checkForBrokenLogos = () => {

    let logo;

    for (let i = 0; i < _cache.logos.length; i += 1) {
      logo = _cache.logos[i];

      checkForZeroNaturalImageWidth(logo)
        .fail((image) => {

          // if broken, create fallback logo element.
          createFallbackLogo(image);

        });

    }

  };

  /**
   * Adds event handlers.
   */
  const addEvents = () => {

    _cache.embedModalTrigger.on('click', onEmbedClick);
    _cache.reportProblemTrigger.on('click', onReportProblemClick);

  };

  /**
   * Initializes.
   */
  const init = () => {

    setupCache();
    checkForBrokenLogos();
    addEvents();
    hideShareOptionsForExpiredVideos();
    setupEmbedModal();
    setupReportProblemModal();

  };

  init();

});
