'use strict';

import $ from 'jquery';

// lazy-load images
require('lazysizes');

// responsive image processor
require('picturefill');


const init = () => {
  // init the responsive images plugin
  window.picturefill({
    reevaluate: true,
    elements: $('.shows-dropdown__featured__show-poster')
  });
};

export { init };
