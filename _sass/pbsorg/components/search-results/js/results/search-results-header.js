'use strict';

let React = window.React || require('react'),
  SortForm = require('../sort/search-results-sort-form'),
  ResultsHeader;

// header above the search results (well, the sort form, the featured results, then the search results);
// contains the sort form;
ResultsHeader = React.createClass({
  render: function () {
    return (
      <header className="results-header">
        <h1 className="results-header-title">
          { this.props.state.content.results.count } Results
        </h1>
        <SortForm state={ this.props.state } sortFunction={ this.props.sortFunction } />
      </header>
    );
  }
});

module.exports = ResultsHeader;
