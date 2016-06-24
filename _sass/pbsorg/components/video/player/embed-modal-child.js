'use strict';

import $ from 'jquery';
import * as EmbedVideoPlayer from '../../../scripts/modules/embed-video-player';

/**
 * From modal.js, called when modal is shown, selects the text in the input box
 */
const onShow = () => {
  $('input[readonly]').select();
};

/**
 * Calls function to delete event listeners when modal is hidden.
 */
const onHide = () => {
  EmbedVideoPlayer.destroy();
};

/**
 * Initializes
 */
const init = () => {
  EmbedVideoPlayer.init();
};

export { init, onShow, onHide };
