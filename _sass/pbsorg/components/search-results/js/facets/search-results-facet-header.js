'use strict';

let jQuery = window.jQuery || require('jquery'),
  React = window.React || require('react'),
  FacetHeaderOption = require('./search-results-facet-header-option'),
  FacetHeader;

// render the bar above the facet form;
// this is always visible, the form is not;
FacetHeader = React.createClass({

  /**
   * Determines filter view to display.
   * @returns {React Component|null} - view to display
   */
  getFilters(facetCount) {

    // if there are no results, don't show filters
    if (!this.props.state.content) {
      return;
    }

    // if there are results and page isn't still loading, show filters
    if (!this.props.state.loading) {
      return <a className="more visible-xs" onClick={ this.props.toggleFunction }>
        Filter Results
      </a>;
    }
  },

  /**
   * Gets facet count
   * @returns {Number} - count
   */
  getFacetCount() {
    var count = 0,
      updateCount = function () {
        count = count + 1;
      };

    if (this.props.state.content) {
      if (this.props.state.content.filters.type != null) {
        updateCount();
      }
      if (this.props.state.content.filters.show != null) {
        updateCount();
      }
      if (this.props.state.content.filters.duration != null) {
        updateCount();
      }
    }

    return count;
  },

  /**
   * Gets filter label.
   * @param {Number} facetCount
   * @param {Array} facets
   * @todo restructure
   * @returns {React Component|null}
   */
  getFilterLabels(facetCount, facets) {

    // if there are no results, don't show filters
    if (!this.props.state.content) {
      return;
    }

    // if there are results and page isn't still loading, show filters
    if (!this.props.state.loading) {
      return <div className="more hidden-xs">
        <span className="title">Filter by:</span>
        { (this.props.state.type === null) ? facets : null }
        <a onClick={ this.props.toggleFunction }>
          { (this.props.state.showFacets) ? "Less" : "More" }
        </a>
      </div>;
    }

  },

  /**
   * Builds facets.
   * @todo restructure
   * @returns {Array} facets - array of Reach components for each facet
   */
  buildFacets() {
    let facets = [];

    // convert each facet into HTML;
    if (this.props.state.content) {
      this.props.state.content.filters.type.options.forEach(function (data) {
        var option = jQuery.extend({}, data);

        delete option.options;

        // if one is selected, only show that one
        if (option.count > 0) {
          facets.push(<FacetHeaderOption key={ option.value }
             content={ option }
             filterCategory="content_type"
             filterFunction={ this.props.filterFunction } />);
        }

      }, this);
    }

    return facets;
  },

  /**
   * Renders component.
   */
  render: function () {
    let facetCount = this.getFacetCount(),
      facets = this.buildFacets(),
      filters = this.getFilters(facetCount),
      filterLabels = this.getFilterLabels(facetCount, facets);

    return (
      <header className="facet-header">
        {filterLabels}
        <h1>
          <span className="count">{ (this.props.state.content) ? this.props.state.content.results.amount : '' }</span>
          <span className="text">Search Results for</span>
          <form>
            <label for="q" className="visuallyhidden">Update your search</label>
            <input type="search" className="header-search" value={this.props.state.term} onChange={this.props.onSearchInputChange} name="q" id="q" />
            <button className="btn btn--search">
              <span className="visuallyhidden">Search</span>
              <span aria-hidden="true">
                <i className="icon-pbs-search"></i>
              </span>
            </button>
          </form>
        </h1>
        {filters}
      </header>
    );
  }
});

module.exports = FacetHeader;
