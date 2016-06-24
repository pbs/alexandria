'use strict';

/**
 * Config for default resume-watching values.
 * @type {object} _config
 */
const _config = {
  link: {
    className: 'user-dropdown__viewing-history__video-link',
    urlPrefix: '/video/',
    analyticsIdLabel: 'data-gtm-video-id',
    analyticsTitleLabel: 'data-gtm-video-title'
  },
  image: {
    className: 'user-dropdown__viewing-history__video-image',
    cropSuffix: '.crop.227x124.jpg'
  },
  progressBar: {
    className: 'progress-bar'
  },
  title: {
    className: 'user-dropdown__viewing-history__video__label'
  }
};

/**
 * Updates video element passed in with video data passed in.
 * @param {jQuery selection} $el - video element markup
 * @param {object} video - video data
 * @returns {jQuery selection} - same $el passed in with updated data
 */
const setData = ($el, video) => {

  if (!$el) {
    return null;
  }

  $el.find('.' + _config.link.className)
    .attr({
      href: _config.link.urlPrefix + video.id,
      [_config.link.analyticsIdLabel]: video.id,
      [_config.link.analyticsTitleLabel]: video.title
    })
    .find('.' + _config.image.className)
      .attr({
        src: video.image + _config.image.cropSuffix,
        alt: video.title
      });

  // update progress bar
  $el.find('.' + _config.progressBar.className)
    .css({
      width: video.percent_complete + '%'
    });

  // update label
  $el.find('.' + _config.title.className)
    .text(video.title);

  return $el;

};


/**
 * Module for resume watching videos in page header (when user is logged in).
 */
export { setData };
