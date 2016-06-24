'use strict';

import Ad from './ad';

/**
 * Ad for funder logos with specific positioning
 * @extends Ad
 */
const FunderAd = class FunderAd extends Ad {

  /**
   * Initializes class instance.
   * param {object} options - any custom options passed in
   * @overrides
   */
  constructor(options) {
    super(options);

    // set up funderIndex needed for positioning
    this.funderSlotText = 'funder-logo-';
    this.funderIndex = this.div_id ? this.div_id.replace(this.funderSlotText, '') : '0';

  }

  /**
   * Sets slot definition to include positioning.
   * @override - overrides _setSlot in Ad class
   */
  _setSlot() {

    return this._defineSlot()
      .setCollapseEmptyDiv(true)
      .addService(window.googletag.pubads())
      .setTargeting('pos', this.funderIndex);
  }

};

export default FunderAd;
