'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchResults } from './redux/actions/fetch';
import SearchHeader from './header/search-header';
import SearchResults from './results/search-results';
import SearchResultsNone from './results/search-results-none';

/**
 * Maps state properties to component properties
 * @param {object} state - current state
 * @returns {object} - properties to subscribe to the store
 */
const mapStateToProps = (state) => {
  return {
    request: state.request,
    term: state.term,
    totalResults: state.results.count
  };
};

class SearchApp extends Component {

  /**
   * Creates class and adds custom state.
   * @param {object} props - default props
   */
  constructor(props) {
    super(props);

    // use loaded state, because different loading states
    // between initial load and subsequent fetches
    this.state = {
      loaded: false,
      viewType: undefined
    };
  }

  componentWillReceiveProps(newProps) {

    const { totalResults, term, request } = newProps;
    const { loaded } = this.state;

    if (!request.isFetching && !loaded) {

      let viewType = 'has-results';

      // remove leading and trailing whitespace and any multiple spaces between words
      const cleanTerm = term.replace(/\s\s+/g, ' ').replace(/^\s+|\s+$/g,'');

      // if the search term doesn't contain at least one letter or number, return no results.
      if (/[A-Za-z0-9]/.test(cleanTerm)) {
        viewType = 'has-results';
      } else {
        viewType = 'no-results-short';
      }

      if (totalResults === 0) {
        if (!term) {
          viewType = 'landing';
        } else {
          viewType = 'no-results';
        }
      }

      this.setState({viewType});
    }

  }

  /**
   * Immediately after initial render,
   * fetch initial results.
   */
  componentDidMount() {

    const { dispatch } = this.props;

    dispatch(fetchResults())
      .then(() => {
        this.setState({loaded: true});
      });

  }

  /**
   * Invoked before rendering when new props and state is received.
   */
  shouldComponentUpdate(newProps, newState) {

    const { request } = newProps;
    const { loaded } = newState;

    // don't re-render if hasn't been loaded
    if (!loaded) {
      return false;
    }
    return true;

  }

  /**
   * Renders entire search component.
   */
  render() {

    const mainView = this.getMainViewMarkup();
    const { viewType, loaded } = this.state;
    let customClasses = 'search-app';

    // hides all components except search on initial load
    customClasses = loaded ? customClasses + ' search-app--is-loaded' : customClasses;

    // adds grey 'disabled' overlay when you re-fetch
    customClasses = this.props.request.isFetching ? customClasses + ' search-app--is-fetching' : customClasses;

    return (
      <div className={customClasses}>
        <SearchHeader viewType={viewType} />
        {mainView}
      </div>
    );

  }

  getMainViewMarkup() {
    const { viewType, loaded } = this.state;

    // This prevents the "no results found" screen from flashing into view before results load
    if (loaded) {
      if (viewType === 'has-results') {
        return <SearchResults />;
      }

      return <SearchResultsNone
        viewType={viewType} />;
    }
  }
}

/**
 * Define required properties
 * and expected corresponding types
 */
SearchApp.propTypes = {
  request: PropTypes.object,
  term: PropTypes.string,
  totalResults: PropTypes.number
};

/**
 * @note don't pass any params to connect
 * because we don't want to
 */
export default connect(mapStateToProps)(SearchApp);
