'use strict';

import jQuery from 'jquery';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const ImageWithFallback = require('../global/react-image-with-fallback');
const FallbackImage = require('../../scripts/_fallback-image');

require('picturefill');

const VideoItem = React.createClass({

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
    let formattedLastViewedDate = this.formatDate(this.props.video.last_viewed),
      formattedAirDate = this.formatDate(this.props.video.air_date),
      formattedExpireDate = this.formatDate(this.props.video.expire_date),
      passportIcon = this.getPassportIcon(),
      progressStyles = {
        width: this.props.video.percent_complete + '%'
      },
      linkClasses = 'viewing-history-result-result__link-container';

    if (this.state.hasBrokenImage === true) {
      linkClasses += ' fallback-image__container fallback-image__container--gray';
    }

    return (
      <article className="history-result">
        <div className="row">
          <div className="col-md-4 col-sm-4 hidden-xs">
            <a href={this.props.video.url} className={linkClasses}>
            <ImageWithFallback
                  customClass="viewing-history-result"
                  textOverlay={false}
                  isBroken={this.state.hasBrokenImage}
                  onBrokenImage={this.onBrokenImage}
                  path={this.props.video.image}
                  crop='.crop.350x197.jpg'
                  crop2x='.crop.700x394.jpg'
                  title={this.props.video.show.title + ', ' + this.props.video.title} />
            </a>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-10">
            <div className="article-body">
              <p className="over-title"><a href={this.props.video.show.url}>{this.props.video.show.title}</a></p>
              <h1><a href={this.props.video.url}>{this.props.video.title}</a></h1>

              {(this.props.video.last_viewed) ? <p className="description hidden-xs">Last Viewed on {formattedLastViewedDate}</p> : ''}
              <div className="progress">
                <div className="progress-bar progress-bar-success" role="progressbar" style={progressStyles}></div>
              </div>
              <p className="info">
                { passportIcon }
                <span className="info-space">{(this.props.video.timecode ? this.props.video.timecode: '0:00') + '/' + this.props.video.duration}</span>
              </p>
            </div>
          </div>
          <div className="col-md-2 hidden-xs hidden-sm">
              <table className="history-info-table">
                <tbody>
                  <tr>
                    <td>{(this.props.video.duration) ? 'Runtime:' : ''}</td><td>{this.props.video.duration}</td>
                  </tr>
                  <tr>
                    <td>{(this.props.video.duration) ? 'Type:' : ''}</td><td>{this.props.video.video_type}</td>
                  </tr>
                  <tr>
                    <td>{(this.props.video.expire_date) ? 'Expires:' : ''}</td><td>{(this.props.video.expire_date) ? formattedExpireDate : ''}</td>
                  </tr>
                  <tr>
                    <td>{(this.props.video.air_date) ? 'Airdate:' : ''}</td><td>{(this.props.video.air_date) ? formattedAirDate : ''}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          <div className="col-md-2  col-sm-2 col-xs-2 remove-col">
            <div className="remove-links">
                <button onClick={this.onRemoveButtonClick} className="btn btn--remove remove-history">
                  <span className="visuallyhidden">Remove {this.props.video.show.title} {this.props.video.title} from viewing history</span>
                  <span aria-hidden="true">x</span>
                </button>
                <a onClick={this.onRemoveButtonClick} className="link-remove hidden-xs hidden-sm remove-history">Remove</a>
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
