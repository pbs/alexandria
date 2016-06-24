'use strict';

import Ad from './ad';
import { debounce, isViewportOver } from '../../scripts/modules/utils-basic';

const ResponsiveAd = class ResponsiveAd extends Ad {

  /**
   * Initializes class instance.
   * param {object} options - any custom options passed in
   * @param {array} options.sizes - this will override desktop sizes
   * @overrides
   */
  constructor(options) {
    super(options);

    const defaults = {
      responsive: true,
      mappingSizes: {
        mobile: [[320, 400], []],
        tablet: [[750, 200], []],
        desktop: [[1024, 200], [300, 250]]
      }
    };

    // loop through all defaults and set value to any options passed in
    this._updateDefaults(this, defaults, options);

    this._onWindowResize = debounce(this._onWindowResize.bind(this), 200);
    this._isViewportOver = isViewportOver;

  }

  /**
   * Builds ad mappings for responsive ads.
   * @returns {ojbect} - googletag mapping
   */
  _buildSizeMap() {

    // for ad slots, let the custom ad sizes be used for desktop size ads
    if (this.type !== 'adhesion' && this.sizes.length > 0) {
      this.mappingSizes.desktop[1] = this.sizes;
    }

    // define a size mapping object
    // see https://support.google.com/dfp_premium/answer/4578089#responsiveDesign
    return window.googletag.sizeMapping()
      // for mobile
      .addSize(this.mappingSizes.mobile[0], this.mappingSizes.mobile[1])
      // for tablet
      .addSize(this.mappingSizes.tablet[0], this.mappingSizes.tablet[1])
      // for desktop
      .addSize(this.mappingSizes.desktop[0], this.mappingSizes.desktop[1])
      .build();
  }

  /**
   * Sets slot definition to include size mapping definition.
   * @override - overrides _setSlot in Ad class
   */
  _setSlot() {

    const map = this._buildSizeMap();

    return this._defineSlot()
      .defineSizeMapping(map)
      .setCollapseEmptyDiv(true)
      .addService(window.googletag.pubads());

  }

  /**
   * Adds rendered class when ad is rendered.
   * @override - overrides _onAdRendered in Ad class
   */
  _onAdRendered(e) {

    super._onAdRendered(e);

    // if an ad was rendered
    // and doesn't have rendered class
    if (this._loaded && !this.el.classList.contains('ad--rendered')) {
      this.el.classList.add('ad--rendered');
    }

  }

  /**
   * On window resize event.
   */
  _onWindowResize() {

    // if on a desktop and it hasn't been refreshed
    if (this._isViewportOver(1024)) {

      // refresh ad slots
      if (this.slot) {
        this._load();
      }

      // remove event listener for resize
      window.removeEventListener('resize', this._onWindowResize);

    }

  }

  /**
   * Adds event handlers.
   */
  _addEvents() {

    // add window resize event for responsive ads
    if (!this._isViewportOver(1024)) {
      window.addEventListener('resize', this._onWindowResize);
    }

  }

  /**
   * Renders ad.
   * @override - overrides render in Ad class
   */
  render() {

    super.render();
    this._addEvents();

  }

};

export default ResponsiveAd;
