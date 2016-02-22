'use strict';

let React = window.React || require('react'),
  NoResults;

NoResults = React.createClass({

  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.term === this.props.term;
  },

  /**
   * Renders component.
   */
  render() {
    return (
      <div className="no-search-results">
        <i className="icon-pbs-search no-search-results__icon" aria-hidden="true"></i>
        <h1 className="no-search-results__header">We couldn't find any results for "{this.props.term}".</h1>
        <p className="no-search-results__description">Please try searching again. We suggest using fewer search terms and making sure all of your words are spelled correctly.</p>
      </div>
    );
  }
});

module.exports = NoResults;
