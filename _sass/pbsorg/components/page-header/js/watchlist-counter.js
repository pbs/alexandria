'use strict';

import $ from 'jquery';

/**
 * Class for watchlist counter in header.
 * @returns {es6 class}
 */
const WatchlistCounter = class WatchlistCounter {

  /**
   * Initializes class instance.
   * param {object} options - any custom options passed in
   * @param {number} options.count - count to init to (optional)
   * @constructor
   */
  constructor(options) {

    this.hiddenClass = 'is-hidden';
    this.$el = $('.watchlist-counter');
    this.max = 100;
    this.min = 0;

    if (options && options.count) {
      this.setCount(options.count);
    }

  }

  /**
   * Checks if DOM element is present.
   * @returns {boolean}
   */
  _hasDomElement() {
    return this.$el.length > 0;
  }

  /**
   * Shows watchlist counter in page header user dropdown.
   */
  show() {

    if (this._hasDomElement()) {
      this.$el.removeClass(this.hiddenClass);
    }

  }

  /**
   * Hides watchlist counter in page header user dropdown.
   */
  hide() {

    if (this._hasDomElement()) {
      this.$el.addClass(this.hiddenClass);
    }

  }

  /**
   * Sets the current count.
   * @param {number} count - updated count to set
   */
  setCount(count) {

    if (count > this.max || count < this.min) {
      return;
    }

    this.count = count;

  }

  /**
   * Gets current count.
   * @returns {number} current count
   */
  getCount() {

    if (this.count) {
      return this.count;
    }

    let countFromMarkup = 0;

    if (this._hasDomElement()) {
      countFromMarkup = parseInt(this.$el.text().trim(), 10);
    }

    return countFromMarkup;

  }

  /**
   * Updates count in page header user dropdown.
   */
  updateCount() {

    if (this._hasDomElement()) {
      this.$el.text(this.count);

      if (this.count > this.min && this.count <= this.max) {
        this.show();
      } else {
        this.hide();
      }
    }

  }

  /**
   * Decrements count and updates it in the page header.
   */
  decrement() {

    this.setCount(this.getCount() - 1);
    this.updateCount();

  }

  /**
   * Increments count and updates it in the page header.
   */
  increment() {

    this.setCount(this.getCount() + 1);
    this.updateCount();

  }

};


export default WatchlistCounter;
