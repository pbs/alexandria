import jQuery from 'jquery';
import newModal from '../../../scripts/new-modal';
const PBS = require('../../../scripts/_pbs');
const Utils = require('../../../scripts/_utils');
const FallbackLogo = require('../../../scripts/_fallback-logo');

// include button actions
require('../../../scripts/_buttons');

jQuery(($) => {

  let _cache = {};
  let embedModal = undefined;
  // let reportProblemModal = undefined;
  // let reportProblemTrigger = $('.video-issues');

  /**
   * Initializes.
   */
  const init = () => {

    setupCache();
    checkForBrokenLogos();
    addEvents();
    updateFunderLinks();
    hideShareOptionsForExpiredVideos();
    setupEmbedModal();
    // setupReportProblemModal();

  };

  /**
   * Caches re-used elements.
   */
  const setupCache = () => {

    _cache.videoPlayerSection = $('.video-player');
    _cache.logos = $('.video-player__logo');

  };

  /**
   * Adds event handlers.
   */
  const addEvents = () => {

    $('body').on('click', '.video-issues', onBodyClick);
    $('.embed-modal-trigger').on('click', onEmbedClick);
    // reportProblemTrigger.on('click', onReportProblemClick);

  };

  /**
   * Sets up the Embed Modal for sharing the video embed code
   */
  const setupEmbedModal = () => {
    const options = {
      modalId: '#embedModal',
      modalTrigger: '.icon-pbs-embed2',
      focusTarget: '.embed-text'
    };
    embedModal = new newModal(options);
  };

// TODO Report A Problem Modal Refactor
  // const setupReportProblemModal = () => {
  //   // initial instantiation here
  //   // define parameters
  //   // pass them to base modal class
  //   const options = {
  //     modalId: '#reportProblemModal',
  //     url: '/feedback/submit/',
  //     action: 'submitFeedback()',
  //     modalTrigger: '#video-issues',
  //     focusTarget: '.troubleshooting-link',
  //     params: {
  //       videoTitle: window.PBS.playerConfig.title,
  //       videoId: window.PBS.playerConfig.id
  //     }
  //   };
  //
  //   reportProblemModal = new Modal(options);
  // };

  /**
   * Adds REL attributes to funder links so they open in a new window.
   */
  const updateFunderLinks = () => {

    _cache.videoPlayerSection.find('.funding a').attr('rel', 'external');

  };

  /**
   * Shows the Embed Modal when the specific trigger is clicked
   */
  const onEmbedClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // show modal here
    if (embedModal) {
      embedModal.showModal();
    }
  };

  // const onReportProblemClick = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   if (reportProblemModal) {
  //     reportProblemModal.showModal();
  //   }
  // };

  /**
   * Do not display the share options if the video is expired
   */
  const hideShareOptionsForExpiredVideos = () => {

    var $utilities = $('.utilities'),
        expiration = $utilities.data('expiration');

    if (expiration) {
      var expDate = new Date(expiration),
          actualDate = new Date();
      if (expDate >= actualDate) {
          $utilities.removeClass('is-hidden');
      }
    } else if (expiration === '') {
      $utilities.removeClass('is-hidden');
    }
  };

  /**
   * Callback for when body is clicked.
   * @note listening for the video problem link, init a modal
   */
  const onBodyClick = (e) => {

    e.preventDefault();

    let settings = {
      'modalWindow': '#videoProblemModalWindow',
      'url': '/feedback/submit/',
      'action': 'submitFeedback()',
      'params': {
        'videoTitle': window.PBS.playerConfig.title,
        'videoId': window.PBS.playerConfig.id
      }
    };

    if (Modal) {
      Modal.init(settings);
      Modal.show();
    }

  };

  /**
   * Checks for any broken logos.
   */
  const checkForBrokenLogos = () => {

    let logo,
      fallback;

    for (let i = 0; i < _cache.logos.length; i++) {
      logo = _cache.logos[i];

      Utils.checkForZeroNaturalImageWidth(logo)
        .fail((image) => {

          // if broken, create fallback logo element.
          createFallbackLogo(image);

        });

    }

  };

  /**
   * Instantiates new fallback logo.
   * @param {HTML element} logo - logo element to replace
   */
  const createFallbackLogo = (logo) => {

    let fallbackLogo = new FallbackLogo({
        el: logo,
        element: 'span',
        text: logo.getAttribute('alt'),
        className: 'video-player__logo--text'
      });

    fallbackLogo.init();

  };

  init();

});
