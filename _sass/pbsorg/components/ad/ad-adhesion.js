'use strict';

import ResponsiveAd from './ad-responsive';

const AdhesionAd = class AdhesionAd extends ResponsiveAd {

  /**
   * Initializes class instance.
   * param {object} options - any custom options passed in
   * @overrides
   */
  constructor(options) {
    super(options);

    const defaults = {
      type: 'adhesion',
      adhesionCloseLink: null,
      mappingSizes: {
        mobile: [[320, 400], [320, 50]],
        tablet: [[750, 200], [728, 90]],
        desktop: [[1024, 200], []]
      }
    };

    // loop through all defaults and set value to any options passed in
    this._updateDefaults(this, defaults, options);

    this._onAdhesionCloseClick = this._onAdhesionCloseClick.bind(this);

  }

  /**
   * Sets reference for close link.
   */
  _setAdhesionCloseLink() {
    this.adhesionCloseLink = document.getElementById('close-adhesion-ad');
  }

  /**
   * On adhesion close link click.
   * @param {jQuery event} e
   */
  _onAdhesionCloseClick(e) {
    e.preventDefault();

    // remove element and event listener
    this.adhesionCloseLink.removeEventListener('click', this._onAdhesionCloseClick);
    this.el.remove();
  }

  /**
   * Adds event handlers.
   */
  _addEvents() {

    // if adhesion link exists (doesn't exist on desktop)
    if (this.adhesionCloseLink) {
      this.adhesionCloseLink.addEventListener('click', this._onAdhesionCloseClick);
    }
  }

  /**
   * Renders ad.
   * @override - overrides render in ResponsiveAd class
   */
  render() {

    super.render();

    this._setAdhesionCloseLink();
    this._addEvents();

  }

};

export default AdhesionAd;
