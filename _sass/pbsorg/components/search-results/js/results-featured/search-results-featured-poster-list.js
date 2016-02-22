'use strict';

let React = window.React || require('react'),
  ResultsFeaturedPoster = require('./search-results-featured-poster'),
  ResultsFeaturedPosterList;

ResultsFeaturedPosterList = React.createClass({
  render: function () {
    var articles = [];
    if (this.props.content) {
      // build all the search result articles;
      this.props.content.map(function (data) {
        articles.push(<ResultsFeaturedPoster key={ data.title } content={ data } />);
      }, this);

      return (
        <section className="search-results-featured-posters">
          <h1>{ this.props.content.title }</h1>

          <div className="row">
            { articles }
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
});

module.exports = ResultsFeaturedPosterList;
