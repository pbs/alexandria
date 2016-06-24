'use strict';

import $ from 'jquery';
import * as CampaignModalLogic from './campaign-modal-child';
import Modal from '../modal/modal';

let _campaignModal;

/**
 * Creates modal
 */
const _setupCampaignModal = () => {

  const options = {
    modalId: '#campaignModal',
    focusTarget: '#modal-campaign__dialog',
    childView: CampaignModalLogic
  };

  _campaignModal = new Modal(options);

};

/**
 * Shows modal
 */
const _showTimedPopup = () => {
  _campaignModal.show();
};

/**
 * Validates against cookies as to whether a user should be shown a modal
 */
const _validateDonateCampaign = () => {
  let cookieValue = 0;

  cookieValue = !isNaN(parseInt(readCookie('pbs.donateCampaign.counter'))) ? parseInt(readCookie('pbs.donateCampaign.counter')) : 0;

  if ( cookieValue >= 3 || readCookie('pbs.donateCampaign.dontShowToday') || readCookie('pbs.donateCampaign.donated') || $('.pbs-stastions-list').is(':visible')) {
  } else {
    let campaign_start = new Date(PBS.donateCampaign.start);
    let campaign_end = new Date(PBS.donateCampaign.end);

    let campaign_today = new Date();

    campaign_start.setHours(0,0,1);
    campaign_end.setHours(23,59,59);

    if (readCookie("pbsol.station") && campaign_today >= campaign_start && campaign_today <= campaign_end) {
      _showTimedPopup();
    }
  }
};

/**
 * Initializes
 */
const init = () => {

  _setupCampaignModal();
  _validateDonateCampaign();

};

export { init };
