'use strict';

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const GridItem = require('./react-show-poster-grid-item');

const ShowPosterGrid = React.createClass({

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
        return (component.props.gridItem) ? <component.props.gridItem show={show} key={index} />: <GridItem show={show} key={index} />;
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
