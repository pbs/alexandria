'use strict';

let React = window.React || require('react'),
  ImageWithFallback = require('../../../global/react-image-with-fallback'),
  ResultsFeaturedPoster;

ResultsFeaturedPoster = React.createClass({

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

  render: function () {
    let articleClasses = 'show-promo';

    if (this.state.hasBrokenImage === true) {
      articleClasses += ' fallback-image__container fallback-image__container--blue';
    }

    return (
      <div className="col-xs-4 col-sm-3">
        <article className={articleClasses}>
          <a href={ this.props.content.url }>
            <picture className="search-results-featured-posters__picture">
              <ImageWithFallback
                customClass="img-responsive"
                isBroken={this.state.hasBrokenImage}
                onBrokenImage={this.onBrokenImage}
                path={this.props.content.image}
                crop=".crop.189x283.jpg"
                textOverlay={true}
                title={this.props.content.title} />
            </picture>
          </a>
        </article>
      </div>
    );
  }
});

module.exports = ResultsFeaturedPoster;
