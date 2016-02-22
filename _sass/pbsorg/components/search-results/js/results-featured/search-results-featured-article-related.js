'use strict';

let React = window.React || require('react'),
  ImageWithFallback = require('../../../global/react-image-with-fallback'),
  ResultsFeaturedArticleRelated;

ResultsFeaturedArticleRelated = React.createClass({

  /**
   * Get Passport icon layout if should be shown.
   * @returns {React Component|null} - Passport markup
   * 'is_mvod' means the video is Passport-only content
   * duplicated from ResultWithImage below - needs to be refactored out eventually
   */
  getPassportIcon() {
    if (this.props.content.is_mvod) {
      let imageUrl = window.PBS_STATIC_URL + "images/svg/passport_compass_rose.svg";
      return <span className="passport-logo-wrapper">
        <img className="passport-logo" src={imageUrl} alt="Passport" />
      </span>;
    }
  },

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

    let passportIcon = this.getPassportIcon(),
      linkClasses = 'search-results-featured-article__thumb-link video-summary__link';

    if (this.state.hasBrokenImage === true) {
      linkClasses += ' fallback-image__container fallback-image__container--gray';
    }

    return (
      <div className="col-xs-6 col-sm-4">
        <article className="video-summary">
          <a className={linkClasses} href={ this.props.content.url }>
            <picture className="search-results-featured-article__thumb-picture">
              <ImageWithFallback
                customClass="img-responsive video-summary__image "
                isBroken={this.state.hasBrokenImage}
                onBrokenImage={this.onBrokenImage}
                path={this.props.content.image}
                crop=".crop.160x90.jpg"
                textOverlay={false} />
            </picture>
          </a>
          <h1 className="video-summary__title">
            <a href={ this.props.content.url }>{ this.props.content.title }</a>
          </h1>
          <p className="video-summary__duration">
          { passportIcon }
          {this.props.content.duration}
          </p>
        </article>
      </div>
    );
  }
});

module.exports = ResultsFeaturedArticleRelated;
