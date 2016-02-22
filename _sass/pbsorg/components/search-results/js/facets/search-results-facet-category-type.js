'use strict';

let jQuery = window.jQuery || require('jquery'),
  React = window.React || require('react'),
  Facet = require('./search-results-facet'),
  facetWebValue = 'webobject',
  facetVideoValue = 'video',
  FacetCategoryType;

// render the type category of facets;
FacetCategoryType = React.createClass({
  render: function () {
    var html = [],
        facets = this.props.content.options,
        flattenedOptions = function (defaultOptions) {
          var options = [];

          defaultOptions.forEach(function (optionL1) {
            var option = jQuery.extend({}, optionL1);

            delete option.options;
            // now save the facet (without children)
            options.push(option);
            // if it did have children, we need to record those too;
            if (optionL1.options) {
              optionL1.options.forEach(function (optionL2) {
                options.push(optionL2);
              });
            }
          });

          return options;
        },
        videoOptions = function (defaultOptions) {
          var options = [];

          // remove web from the video options;
          defaultOptions.forEach(function (option) {
            if (option.value !== facetWebValue) {
              options.push(option);
            }
          });

          return options;
        };

    // if Video is selected, then show just Video and it's children;
    if (this.props.selectedValue === facetVideoValue) {
      facets = videoOptions(this.props.content.options);
    // if something besides Video is selected then show just the selected facet;
    } else if (this.props.selectedValue != null) {
      flattenedOptions(this.props.content.options).forEach(function (option) {
        if (option.value === this.props.selectedValue) {
          facets = [];
          facets.push(option);
        }
      }, this);
    }

    facets.forEach(function (facet) {
      html.push(<Facet key={ facet.value }
                       content={ facet }
                       selectedValue={ this.props.selectedValue }
                       filterCategory={ this.props.filterCategory }
                       filterFunction={ this.props.filterFunction } />);
    }, this);

    // then return a whole list of facet links;
    return (
      <div className="facet-category col-xs-8 col-xs-offset-2 col-sm-offset-0 col-sm-6 col-md-3">
        <h1 dangerouslySetInnerHTML={{__html: this.props.content.label}}></h1>
        <ul className="list-unstyled">
          { html }
        </ul>
      </div>
    );
  }
});

module.exports = FacetCategoryType;
