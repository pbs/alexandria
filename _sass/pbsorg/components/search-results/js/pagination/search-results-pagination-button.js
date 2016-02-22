'use strict';

let React = window.React || require('react'),
  ResultsPaginationButton;

// build the pagination buttons (previous/next);
ResultsPaginationButton = React.createClass({
  render: function () {
    return (
      <a onClick={ this.props.pageFunction }
         data-page-id={ this.props.pageNumber }>{ this.props.content }</a>
    );
  }
});

module.exports = ResultsPaginationButton;
