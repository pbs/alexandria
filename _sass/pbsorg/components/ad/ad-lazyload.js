'use strict';

import ResponsiveAd from './ad-responsive';
import { debounce } from '../../scripts/modules/utils-basic';

const LazyloadAd = class LazyloadAd extends ResponsiveAd {

  /**
   * Initializes class instance.
   * param {object} options - any custom options passed in
   * @overrides
   */
  constructor(options) {
    super(options);

    const defaults = {
      lazyload: false,
      lazyloadBuffer: 300,
      lazyloadHeight: 0
    };

    // loop through all defaults and set value to any options passed in
    this._updateDefaults(this, defaults, options);

    this._onWindowScroll = debounce(this._onWindowScroll.bind(this), 200);

  }

  /**
   * Sets lazyloading height to track scroll against.
   */
  _setLazyloadHeight() {

    if (this.lazyloadHeight === 0 && this.el) {
      const fromTop = this.el.getBoundingClientRect().top;
      this.lazyloadHeight = fromTop - this.lazyloadBuffer;
    }

  }

  /**
   * Lazyloads ads.
   */
  _lazyload() {

    // set up heights if not already set
    this._setLazyloadHeight();

    const toShowFromBottom = window.innerHeight - this.lazyloadBuffer;
    const currentPosFromTop = window.pageYOffset;
    const adPos = this.lazyloadHeight - currentPosFromTop;

    // if we are scrolled to a point where we should show the ad
    if (toShowFromBottom >= adPos) {

      // if slot has been registered, load it
      if (this.slot) {
        this._refreshSlot();
      }
    }

  }

  /**
   * Loads ad via lazyloading
   * @override - overrides _load in ResponsiveAd class
   */
  _load() {

    // if already loaded, do nothing
    if (this._loaded) {
      return;
    }

    // attempt to load
    this._lazyload();

  }

  /**
   * On window scroll event.
   */
  _onWindowScroll() {

    this._load();

    if (this.loaded) {
      window.removeEventListener('scroll', this._onWindowScroll);
    }

  }

  /**
   * Adds event handlers.
   * @override - overrides _addEvents in ResponsiveAd class
   */
  _addEvents() {

    super._addEvents();

    // add window scroll event for lazy-loading ads
    window.addEventListener('scroll', this._onWindowScroll);

  }

};

export default LazyloadAd;
