'use strict';

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const ListItem = require('./show-results-list-item');

const List = React.createClass({

  /**
   * Array of any mixin libraries for react
   */
  mixins: [PureRenderMixin],

  /**
   * Renders component.
   */
  render() {
    let rows = this.props.shows.map(function (show, index) {
      return <ListItem show={show} key={index} />;
    });
    return (
      <div className="results-table">
        <table className="table table-bordered">
          <thead className="hidden-xs">
            <tr>
              <th>Title</th>
              <th>Videos</th>
              <th>Genre</th>
              <th className="hidden-xs hidden-sm">Watch Latest Episode</th>
            </tr>
          </thead>
          <tbody>
             {rows}
          </tbody>
        </table>
      </div>
    );
  }

})

module.exports = List;
