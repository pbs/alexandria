'use strict';

let React = window.React || require('react'),
  SortOption;

// render each sort link;
SortOption = React.createClass({
  render: function () {
    // data attributes are used onClick to sort the results;
    return (
      <a className={ (this.props.content.value === this.props.sortValue) ? "selected" : "" }
         data-sort-id={ this.props.content.value }
         onClick={ this.props.sortFunction }>{ this.props.content.text }</a>
    );
  }
});

module.exports = SortOption;
