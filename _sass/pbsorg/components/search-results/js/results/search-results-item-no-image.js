'use strict';

let React = window.React || require('react'),
  ResultSansImage;

// build a search result WITHOUT an image;
ResultSansImage = React.createClass({
  render: function () {
    return (
      <article className="result-web">
        <h1><a href={ this.props.content.url }>{ this.props.content.title }</a></h1>
        <p className="url">
          <a href={ this.props.content.url }>{ this.props.content.url }</a>
        </p>
        <p className="description">
          { this.props.content.description }
        </p>
      </article>
    );
  }
});

module.exports = ResultSansImage;
