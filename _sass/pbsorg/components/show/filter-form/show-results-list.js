'use strict';

let ListItem = require('./show-results-list-item'),
  PureRenderMixin = React.addons.PureRenderMixin,
  List;

List = React.createClass({
  
  /**
   * Array of any mixin libraries for react
   */
  mixins: [PureRenderMixin],

  /**
   * Renders component.
   */
  render() {
    let rows = this.props.shows.map(function (show, index) {
      return <ListItem show={show} />;
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