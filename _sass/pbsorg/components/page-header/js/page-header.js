'use strict';

import jQuery from 'jquery';
import * as Navigation from './navigation';
import * as SignIn from './sign-in';
import * as Campaign from '../../campaign-modal/campaign-modal';
import * as Localization from '../../../scripts/modules/localization';
import * as Profile from '../../../scripts/modules/profile';
import * as User from './user-onload';
import { replaceWithFormattedTime } from '../../../scripts/modules/utils';

require('../../../scripts/jquery.pbs.cookie');

jQuery(($) => {

  // @todo: think how we are handling "page-level" on load functionality
  User.init();

  // init the main navigation module
  Localization.init();
  Navigation.init();
  SignIn.init();
  Profile.setupFavoriteStationAPI();

  if (window.PBS.donateCampaign && window.PBS.donateCampaign.start) {
    Campaign.init();
  }

  // format times in header (Move to navigation)
  replaceWithFormattedTime($('.tv-schedule__table-cell-time'));

});
