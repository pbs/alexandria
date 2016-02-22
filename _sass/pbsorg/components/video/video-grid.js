'use strict';

let jQuery = window.jQuery || require('jquery');
let FallbackImage = require('../../scripts/_fallback-image');

import Popover from '../popover/popover';

// lazy-load images
require('lazysizes');

// responsive image processor, and its handlebars helper
require('picturefill');

// include button animations
require('../../scripts/_buttons');

jQuery(($) => {

  let _cache = {};


  /**
   * Caches re-used elements
   * @returns {function} _setupCache
   */
  const _setupCache = () => {

    _cache.videoSection = $('.video-grid');
    _cache.videoSummary = _cache.videoSection.find('.video-summary');

  };

  /**
   * Checks if image is broken and creates a fallback.
   * @returns {function} _checkIfImageIsBroken
   * @param {object} e - jQuery event
   * @param {element} img - specific HTML img element (optional)
   */
  const _checkIfImageIsBroken = (e, img) => {

    let image = e ? e.target : img;

    if (image) {

      let fallbackImage = new FallbackImage({
        el: image
      });
      fallbackImage.init();

      // remove error listener
      $(image).off('error', _checkIfImageIsBroken);

    }

  };

  /**
   * Creates overlay/tooltip with more information about individual videos
   * @param {object} video - the video posters etc where each popover is triggered from
   * @param {HTML Element} image - video image element
   * @param {HTML Element} section - current video grid section
   */
  const _setupVideoPopover = (video, image, section) => {

    const options = {
      popoverContainer: section,
      popoverTrigger: image,
      popoverContent: jQuery(video).find('article'),
      addWatchlistButtons: true
    };
    const popover = new Popover(options);
  };

  /**
   * Initializes picturefill for responsive images and popovers for individual videos
   */
  const _setupGridImages = () => {

    _cache.videoSection.each((i, videoSection) => {

      const section = videoSection;

      _cache.videoSummary.each((i, video) => {

        const image = $(video).find('.video-summary__image');

        // @note: we can use error event here because images are being lazyloaded
        $(image).on('error', _checkIfImageIsBroken);

        window.picturefill({
          elements: image
        });

        _setupVideoPopover(video, image, section);

      });

    });

  };

  /**
   * Initializes component.
   * @returns {function} _init
   */
  const _init = () => {

    _setupCache();
    _setupGridImages();

  };

  _init();

});
