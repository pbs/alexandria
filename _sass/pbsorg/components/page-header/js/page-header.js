const jQuery = window.jQuery = require('jquery');
const Utils = require('../../../scripts/_utils');
const Modal = require('../../../scripts/new-modal');

require('../../../scripts/jquery.pbs.cookie.js');
require('../../../scripts/modal_campaign.js');
require('./personal.js');

import * as Navigation from './navigation';
import * as SignIn from './sign-in';

jQuery(($) => {

  // init the main navigation module
  Navigation.init();
  SignIn.init();

  // format times in header (Move to navigation)
  Utils.replaceWithFormattedTime($('.tv-schedule__table-cell-time'));

  if (window.PBS_HEAVY_TRAFFIC == 'True' && $.cookie('pbs_uid')) {
    $.ajax({
      url: '/logout/',
      type: 'post'
    });
  }

  function initJAWS(e, msg) {
    if (!$.cookie('pbsol.station')) {
      e.preventDefault();
      e.stopPropagation();
      JAWS.Localization.init(msg);
    }
  }

  $('#tvSchedules').on('click', function (e) {
    initJAWS(e, 'TVSchedules');
  });

});
