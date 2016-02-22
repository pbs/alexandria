let jQuery = window.jQuery = require('jquery'),
  FallbackImage = require('../../../scripts/_fallback-image');

require('picturefill');
require('lazysizes');

/**
 * @todo: create general hero carousel.
 */
jQuery(($) => {

  let _cache = {},

  /**
   * Initializes.
   */
  init = () => {

    setupCache();
    addEvents();

  },

  /**
   * Caches re-used elements.
   */
  setupCache = () => {

    _cache.featuredContentSection = $('.producer-featured-content');
    _cache.mainImage = _cache.featuredContentSection.find('.producer-featured__image');

  },

  /**
   * Add event listeners.
   */
  addEvents = () => {

    _cache.mainImage.on('error', onImageError);

  },

  /**
   * Callback on image error.
   * @param {jQuery event} e
   */
  onImageError = (e) => {

    let image = e.target;

    if (typeof image.naturalWidth === 'undefined' || image.naturalWidth === 0 ) {
      addFallbackElements(image);
    }

  },

  /**
   * Adds fallback elements for missing/broken carousel image
   * @param {jQuery selection} $image - image element to be updated
   */
  addFallbackElements = (image) => {

    let settings = {
        el: image,
        hasOverlayText: false
      },
      newImage = new FallbackImage(settings);

    newImage.init();

    // force the picture to update again
    window.picturefill({
      reevaluate: true,
      elements: [image]
    });

  }

  init();

});

