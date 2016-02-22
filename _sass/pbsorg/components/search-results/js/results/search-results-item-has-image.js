'use strict';

let React = window.React || require('react'),
  ImageWithFallback = require('../../../global/react-image-with-fallback'),
  ResultWithImage;

// build a search result WITH an image;
ResultWithImage = React.createClass({

  /**
   * Get Passport icon layout if should be shown.
   * @returns {React Component|null} - Passport markup
   * 'is_mvod' means the video is Passport-only content
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
      linkClasses = 'result-video__link';

    if (this.state.hasBrokenImage === true) {
      linkClasses += ' fallback-image__container fallback-image__container--gray';
    }

    return (
      <article className="result-video">
        <div className="row">
          <div className="col-xs-6 col-sm-4">
            <a href={ this.props.content.url }>
              <ImageWithFallback
                customClass={linkClasses}
                isBroken={this.state.hasBrokenImage}
                onBrokenImage={this.onBrokenImage}
                path={this.props.content['image']}
                crop=".crop.280x157.jpg"
                textOverlay={false}
                title={this.props.content['keywords']} />
            </a>
          </div>
          <div className="col-xs-6 col-sm-8 result-video__info">
            <div className="article-body">
              <p className="over-title">
                <a href={ this.props.content.show_url }>{ this.props.content["show_title"] }</a>
              </p>
              <h1><a href={ this.props.content.url }>{ this.props.content["title"] }</a></h1>
              <p className="description hidden-xs">
                { this.props.content["short_description"] }
              </p>
              <p className="info">
                { passportIcon }
                { this.props.content.duration } | { this.props.content.video_type }
              </p>
            </div>
          </div>
        </div>
      </article>
    );
  }
});

module.exports = ResultWithImage;
