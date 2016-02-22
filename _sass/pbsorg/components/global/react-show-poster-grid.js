'use strict';

let React = window.React || require('react'),
  ReactDOM = window.ReactDOM || require('react-dom'),
  PureRenderMixin = React.addons.PureRenderMixin,
  ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
  GridItem = require('./react-show-poster-grid-item'),
  ShowPosterGrid;

ShowPosterGrid = React.createClass({
  
  /**
   * Array of any mixin libraries for react
   */
  mixins: [PureRenderMixin],

  /**
   * Renders component.
   */
  render() {

    let component = this,
      content = this.props.shows.map((show, index) => {
        return (component.props.gridItem) ? <component.props.gridItem show={show} />: <GridItem show={show} />;
      });

    return (
        <ReactCSSTransitionGroup
          component="div"
          transitionName="show-poster-grid__item"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          className="show-poster-grid">
          
          {content}
        
        </ReactCSSTransitionGroup>
    );
  }

});

module.exports = ShowPosterGrid;
