'use strict';

let React = window.React || require('react'),
  contentTypeFilter = 'content_type',
  Facet;

// render each facet link per category;
Facet = React.createClass({
  render: function () {
    var facets = [],
        extraClass = '';

    // convert each facet into HTML;
    if (this.props.content.options) {
      this.props.content.options.forEach(function (data) {
        // if there are no results, add disabled class for nested categories
        if (data.count === 0) {
          extraClass = 'search-filter-category__value--no-count ';
        }
        facets.push(<Facet key={ data.value }
                           content={ data }
                           selectedValue={ this.props.selectedValue }
                           filterCategory={ this.props.filterCategory }
                           filterFunction={ this.props.filterFunction }/>);
      }, this);
    } else {
      // if there are no results, add disabled class for direct categories
      if (this.props.content.count === 0) {
        extraClass = 'search-filter-category__value--no-count ';
      }
    }

    // data attributes are used onClick to filter the results by this facet;
    return (
      <li>
        <a className={(this.props.selectedValue && this.props.selectedValue === this.props.content.value) ? "selected" + extraClass : extraClass }
           onClick={ this.props.filterFunction }
           data-facet-id={ this.props.content.value }
           data-facet-category={ (this.props.content.label === 'Video' ||
                                  this.props.content.label === 'Web') ? contentTypeFilter: this.props.filterCategory }>
          <i className="icon-pbs-remove"></i>
          { (this.props.content.label) ? this.props.content.label : this.props.content.value }
        </a>
        <span className="count">
          { this.props.content.count }
        </span>
        { (facets.length) ? <ul className="list-unstyled">{ facets }</ul> : null }
      </li>
    );
  }
});

module.exports = Facet;
