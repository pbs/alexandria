'use strict';

let React = window.React || require('react'),
  SortOption = require('./search-results-sort-option'),
  facetWebValue = 'webobject',
  SortForm;

// container of links that will change the sort order of the results;
SortForm = React.createClass({
  render: function () {
    var links = [],
        sortContent = this.props.state.content.sort;

    // build all the sort links;
    sortContent.options.forEach(function (option) {

      // don't add sort by expiration for web links
      if (this.props.state.content_type === facetWebValue && option.value === 'expire_epoch') {
        return;
      }

      links.push(<SortOption key={ option.id } content={ option } sortFunction={ this.props.sortFunction } sortValue={ this.props.state.sort } />);
    }, this);

    // then return a whole list of sort links;
    return (
      <div>
        <div className="results-sort hidden-xs">
          <h1>{ sortContent.label }</h1>
          { links }
        </div>

        <div className="results-sort-dropdown visible-xs">
          <a id="dLabel" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
            { this.props.state.sortLabel }
            <span className="caret"></span>
          </a>

          <div className="results-sort-dropdown-menu" role="menu" aria-labelledby="dLabel">
            { links }
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SortForm;
