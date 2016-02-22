'use strict';

let React = window.React || require('react'),
  Facet = require('./search-results-facet'),
  FacetCategory;

// render each category (column) of facets (except type);
FacetCategory = React.createClass({
  render: function () {
    var facets = [],
        category = "Filter by " + this.props.filterCategory;

    // convert each facet into HTML;
    this.props.content.forEach(function (data) {
      facets.push(<Facet key={ data.value }
                         content={ data }
                         selectedValue={ this.props.selectedValue }
                         filterCategory={ this.props.filterCategory }
                         filterFunction={ this.props.filterFunction } />);
    }, this);

    // then return a whole list of facet links;
    return (
      <div className="facet-category col-xs-8 col-xs-offset-2 col-sm-offset-0 col-sm-6 col-md-3">
        <h1 dangerouslySetInnerHTML={{__html: category}}></h1>
        <ul className="list-unstyled">
          { (this.props.showWebMessage) ? <li>{ this.props.content["web-message"] }</li> : facets }
        </ul>
      </div>
    );
  }
});

module.exports = FacetCategory;
