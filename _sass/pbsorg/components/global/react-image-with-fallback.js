'use strict';

let jQuery = window.jQuery || require('jquery'),
  ImageWithFallback;

require('picturefill');

ImageWithFallback = React.createClass({

  /**
   * Returns the initial state before the component is mounted.
   * @returns {Object} - initial state object
   */
  getInitialState() {
    return {
      fallbackImage: false
    };
  },

  /**
   * Callback invoked immediately before initial render.
   */
  componentWillMount() {
    
    // if no path given, setup fallback to prevent 404
    if (!this.props.path || this.props.isBroken) {
      this.setFallbackState();
    }

  },

  /**
   * Callback invoked immediately after updates are flushed to DOM.
   */
  componentDidMount() {

    if (!this.state.fallbackImage) {
      window.picturefill({
        reevaluate: true,
        elements: [this.refs['react-image--needs-fallback']]
      });
    }

  },

  /**
   * Callback for when image errors and need to implement fallback image.
   * @param {React event} e
   */
  onImageError(e) {

    this.setFallbackState();

  },

  /**
   * Sets fallback state to new image.
   */
  setFallbackState() {

    // @todo: get multiple gradients from design
    // and add in logic for class names
    if (!this.state.fallbackImage) {
      this.setState({fallbackImage: true}, this.updateParentOfBrokenImage());
    }
  },

  /**
   * Invoke parent callback if image is broken.
   */
  updateParentOfBrokenImage() {

    if (this.props.onBrokenImage) {
      this.props.onBrokenImage(true);
    }

  },

  /**
   * Gets image elements to render.
   */
  getImageView() {

    if (!this.state.fallbackImage) {
      let path = this.props.crop ? this.props.path + this.props.crop : this.props.path;

      return <img
        className={this.props.customClass + '-image image--needs-fallback'}
        src={path}
        alt={this.props.title}
        ref="react-image--needs-fallback"
        onError={this.onImageError} />;

    } else {

      return <div className="fallback-image__text-container">
        {this.props.textOverlay ? <span className="fallback-image__text">{this.props.title}</span> : null}
      </div>;

    }

  },

  /**
   * Renders component.
   */
  render() {

    let view = this.getImageView();

    return (
      <div className={this.props.customClass}>
        {view}
      </div>
    );

  }

});

module.exports = ImageWithFallback;
