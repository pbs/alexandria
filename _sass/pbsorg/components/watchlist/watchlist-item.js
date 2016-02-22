var
  jQuery = window.jQuery || require('jquery'),
  React = window.React || require('react'),
  ReactDOM = window.ReactDOM || require('react-dom'),
  PureRenderMixin = React.addons.PureRenderMixin,
  ImageWithFallback = require('../global/react-image-with-fallback'),
  VideoItem;

VideoItem = React.createClass({

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
   * Get Passport icon layout if should be shown.
   * @returns {React Component|null} - Passport markup
   * 'is_mvod' means the video is Passport-only content
   */
  getPassportIcon() {
    if (this.props.video.is_mvod) {
      let imageUrl = window.PBS_STATIC_URL + "images/svg/passport_compass_rose.svg";
      return <span className="passport-logo-wrapper">
        <img className="passport-logo" src={imageUrl} alt="Passport" />
      </span>;
    }
  },

  /**
   * Gets progress bar mark up if percent_complete is greater than 0.
   * @returns {React Componet|null} - progress bar markup
   */
  getProgressBar() {
    let progressStyles = {
        width: this.props.video.percent_complete + '%'
      };

    if (this.props.video.percent_complete > 0) {
      return <div className="progress">
        <div className="progress-bar progress-bar-success" role="progressbar" style={progressStyles}></div>
      </div>;
    }
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

    let formattedAirDate = this.formatDate(this.props.video.air_date),
      formattedExpireDate = this.formatDate(this.props.video.expire_date),
      passportIcon = this.getPassportIcon(),
      progressBar = this.getProgressBar(),
      linkClasses = 'watchlist-result__link-container';

    if (this.state.hasBrokenImage === true) {
      linkClasses += ' fallback-image__container fallback-image__container--gray';
    }

    return (
      <article className="watchlist-result">
        <div className="row">
          <div className="col-md-4 col-sm-4 hidden-xs">
            <div className="poster-container">
              <a href={"/video/" + this.props.video.id} className={linkClasses}>
                <ImageWithFallback
                  customClass="watchlist-result"
                  textOverlay={false}
                  isBroken={this.state.hasBrokenImage}
                  onBrokenImage={this.onBrokenImage}
                  path={this.props.video.image}
                  title={this.props.video.show.title + ', ' + this.props.video.title} />
              </a>
              {progressBar}
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-10">
            <div className="article-body">
              <p className="over-title"><a href={'/show/' + this.props.video.show.id}>{this.props.video.show.title}</a></p>
              <h2 className="watchlist-result__title"><a href={'/video/' + this.props.video.id}>{this.props.video.title}</a></h2>
              <p className="description hidden-xs">{this.props.video.description}</p>
              <div className="hidden-lg hidden-md hidden-sm">
                {progressBar}
              </div>
              <p className="info">
                { passportIcon }
                <span className="info-space">{this.props.video.duration + ' | ' + this.props.video.video_type}</span>
                {(this.props.video.expire_date) ? <span className="info-space hidden-xs">Expires: {formattedExpireDate}</span> : ''}
                {(this.props.video.air_date) ? <span className="hidden-xs hidden-sm">Airdate: {formattedAirDate}</span> : ''}
              </p>
            </div>
          </div>
          <div className="col-md-2  col-sm-2 col-xs-2 remove-col">
            <div className="remove-links">
              <button onClick={this.onRemoveButtonClick} className="btn btn--remove remove-watchlist">
                <span className="visuallyhidden">Remove</span>
                <span aria-hidden="true">x</span>
              </button>
              <a onClick={this.onRemoveButtonClick} className="link-remove hidden-xs hidden-sm remove-watchlist">Remove</a>
            </div>
          </div>
        </div>
      </article>
    );
  },

  /**
   * Formats date for display.
   * @param {Date} date - date to format
   * @returns {String} - date, string formatted in M/D/YY
   */
  formatDate(date) {
    let dateObj;

    // if no date, return
    if (!date) {
      return date;
    }

    // return formatted date
    dateObj = new Date(date);
    return (dateObj.getMonth() + 1) + '/' + dateObj.getDate() + '/' + dateObj.getFullYear().toString().substring(2);

  },

  /**
   * Callback when click the remove button.
   */
  onRemoveButtonClick() {

    //remove video from list
    this.props.onRemoveButtonClick(this.props.video.id);
  }

});

module.exports = VideoItem;
