'use strict';

let React = window.React || require('react'),
  ResultWithImage = require('./search-results-item-has-image'),
  ResultSansImage = require('./search-results-item-no-image'),
  ResultsList;

// build the search results;
ResultsList = React.createClass({
  render: function () {
    var results = [];

    // build all the search result articles;
    this.props.content.articles.map(function (article) {
      // if a result has an image - it gets rendered by a different template;
      var result = (article["image"]) ? <ResultWithImage key={ article.id } content={ article } /> : <ResultSansImage key={ article.title } content={ article } />;
      results.push(result);
    }, this);
    // then return all the results;
    return (
      <div className="results-container">
        { results }
      </div>
    );
  }
});

module.exports = ResultsList;
