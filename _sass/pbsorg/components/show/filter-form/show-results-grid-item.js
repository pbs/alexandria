let jQuery = window.jQuery || require('jquery'),
  PureRenderMixin = React.addons.PureRenderMixin,
  ImageWithFallback = require('../../global/react-image-with-fallback'),
  GridItem;

require('../../../scripts/_buttons');
import Popover from '../../popover/popover';

GridItem = React.createClass({

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
  * Callback invoked immediately after the component's updates are flushed to the DOM.
  */
  componentDidMount() {

    // only setup popover if there is popover content
    if (this.refs['show-popover']) {
      this.setupPopover();
    }

  },

  /**
   * Creates overlay of more information for show.
   */
  setupPopover() {

    const options = {
      popoverContainer: '.results',
      popoverTrigger: this.refs['show-popover-container'],
      popoverContent: this.refs['show-popover'].innerHTML,
      addWatchlistButtons: false
    };
    this._popover = new Popover(options);

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

    // @todo: convert this to use base class
    let articleClasses = 'hover-scale show-poster-grid__item';

    if (this.state.hasBrokenImage === true) {
      articleClasses += ' fallback-image__container fallback-image__container--blue';
    }

    return (
      <article key={this.props.show.id} className={articleClasses} ref="show-popover-container">
        <a className="show-poster-grid__link-container" href={this.props.show.url}>
          <ImageWithFallback
            customClass="show-poster-grid__content"
            isBroken={this.state.hasBrokenImage}
            onBrokenImage={this.onBrokenImage}
            textOverlay={true}
            path={this.props.show.image}
            crop=".crop.165x247.jpg"
            title={this.props.show.title} />
        </a>
        {(this.props.show.description) ? /* Build popover template */
        <article className="popover-content hidden-xs hidden-sm" ref="show-popover">
          <p className="description" dangerouslySetInnerHTML={{__html: this.props.show.description }}></p>
          <p className="button">
            <a href={this.props.show.url} className="btn btn--ripple">Watch Videos</a>
          </p>
          {(this.props.show.website) ?
            <p className="button">
              <a href={this.props.show.website} className="btn btn--ripple">Visit the Official Website</a>
            </p> : null}
        </article>
        : null  /* No Popover */}
      </article>
    );
  }

});

module.exports = GridItem;
