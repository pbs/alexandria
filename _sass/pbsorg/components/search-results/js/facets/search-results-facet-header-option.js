'use strict';

let React = window.React || require('react'),
	FacetHeaderOption;

// render each facet link per category;
FacetHeaderOption = React.createClass({
  render: function () {
    return (
      <a onClick={ this.props.filterFunction }
         data-facet-id={ this.props.content.value }
         data-facet-category={ this.props.filterCategory }>
        { this.props.content.label.replace("All ", "") }
      </a>
    );
  }
});

module.exports = FacetHeaderOption;
