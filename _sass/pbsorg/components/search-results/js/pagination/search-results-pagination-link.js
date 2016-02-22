'use strict';

let React = window.React || require('react'),
  ResultsPaginationLink;

// build the pagination link;
ResultsPaginationLink = React.createClass({
  render: function () {
    return (
      <a className={ (this.props.selectedPage === this.props.pageNumber) ? "selected" : "" }
         onClick={ this.props.pageFunction }
         data-page-id={ this.props.pageNumber }>{ this.props.pageNumber }</a>
    );
  }
});

module.exports = ResultsPaginationLink;
