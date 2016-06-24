'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/**
 * Maps state properties to component properties
 * @param {object} state - current state
 * @returns {object} - properties to subscribe to the store
 */
const mapStateToProps = (state) => {
  return {
    term: state.term
  };
};

class SearchResultsNone extends Component {

  /**
   * Prevents search term in page body from automatically updating itself if user tries to search again.
   */
  shouldComponentUpdate(nextProps) {
    return nextProps.term === this.props.term;
  }

  /**
   * Renders no results component markup.
   */
  render() {
    const { term, viewType } = this.props;
    let headerText = '';
    let subText = '';

    if (viewType === 'landing') {
      headerText = 'Start searching';
      subText = 'Enter your search terms in the box above to begin searching PBS.';
    } else if (viewType === 'no-results') {
      headerText = 'We couldn\'t find any results for "'+ term + '".'
      subText = 'Please try searching again. We suggest using fewer search terms and making sure all of your words are spelled correctly.'
    } else {
      headerText = 'We couldn\'t find any results for "'+ term + '".'
      subText = 'Please try searching again.'
    }

    return (
      <div className="no-search-results">
        <i className="icon-pbs-search no-search-results__icon" aria-hidden="true"></i>
        <h1 className="no-search-results__header">{headerText}</h1>
        <p className="no-search-results__description">{subText}</p>
      </div>
    );
  }
};

/**
 * Define required properties
 * and expected corresponding types
 */
SearchResultsNone.propTypes = {
  term: PropTypes.string,
  viewType: PropTypes.string
};

export default connect(
  mapStateToProps
)(SearchResultsNone);
