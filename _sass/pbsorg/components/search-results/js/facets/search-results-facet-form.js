'use strict';

let React = window.React || require('react'),
  FacetCategory = require('./search-results-facet-category'),
  FacetCategoryType = require('./search-results-facet-category-type'),
  FacetForm;

// render columns of facet links used to narrow the results;
FacetForm = React.createClass({
  render: function () {
    var facets = this.props.state.content.filters,
        showContent = facets.show,
        showSelected = this.props.state.show,
        durationContent = facets.duration,
        durationSelected = this.props.state.video_length,
        typeSelected = this.props.state.video_type,
        showWebMessage = (typeSelected && typeSelected === facetWebValue),
        tmp,
        facetWebValue = 'webobject',
        formHeight = this.props.state.facetFormHeight,
        formStyle = {
          "height": (formHeight && formHeight > 0) ? formHeight : "auto"
        };

    // go through each set of facet links and remove options if an option has been selected;
    if (showSelected != null) {
      tmp = [];
      showContent.forEach(function (option) {
        if (showSelected === option.value) {
          tmp.push(option);
        }
      });
      showContent.options = tmp;
    }
    if (durationSelected != null) {
      tmp = [];
      durationContent.forEach(function (option) {
        if (durationSelected === option.value) {
          tmp.push(option);
        }
      });
      durationContent.options = tmp;
    }
    // this module should only show if the user has clicked the "more" button in the FacetHeader;
    if (this.props.state.showFacets) {
       //return each facet category, organized by columns;
      return (
        <div className="facet-form" style={ formStyle }>
          <div className="row">
            <FacetCategoryType
              content={ facets.type }
              selectedValue={ typeSelected }
              filterCategory="video_type"
              filterFunction={ this.props.filterFunction } />
            <FacetCategory
              content={ showContent }
              selectedValue={ showSelected }
              showWebMessage={ showWebMessage }
              filterCategory="show"
              filterFunction={ this.props.filterFunction } />

            <FacetCategory
              content={ durationContent }
              selectedValue={ durationSelected }
              showWebMessage={ showWebMessage }
              filterCategory="video_length"
              filterFunction={ this.props.filterFunction } />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
});

module.exports = FacetForm;
