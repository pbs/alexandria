'use strict';

import jQuery from 'jquery';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const ImageWithFallback = require('./react-image-with-fallback');

const ShowPosterGridItem = React.createClass({

  /**
   * Array of any mixin libraries for react
   */
  mixins: [PureRenderMixin],

  /**
   * Returns the initial state before the component is mounted.
   * @returns {Object} - initial state object
   */
  getInitialState() {
    return {
      hasBrokenImage: false
    };
  },

  /**
   * Update broken image with css fallback.
   * @param {Boolean} - boolean if image is broken
   */
  onBrokenImage(brokenImageBool) {

    this.setState({hasBrokenImage: brokenImageBool});

  },

  /**
   * Renders component.
   */
  render() {

    let articleClasses = 'show-poster-grid__item';

    if (this.state.hasBrokenImage === true) {
      articleClasses += ' fallback-image__container fallback-image__container--blue';
    }

    return (
      <article key={this.props.show.id} className={articleClasses}>
        <a className="show-poster-grid__link-container" href={this.props.show.url}>
          <ImageWithFallback
            customClass="show-poster-grid__content"
            isBroken={this.state.hasBrokenImage}
            onBrokenImage={this.onBrokenImage}
            path={this.props.show.image}
            crop=".crop.165x247.jpg"
            textOverlay={true}
            title={this.props.show.title} />
        </a>
      </article>
    );

  }

});

module.exports = ShowPosterGridItem;
