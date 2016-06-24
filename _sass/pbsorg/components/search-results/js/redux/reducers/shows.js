'use strict';

import { SEARCH_RESULTS_SUCCESS, SEARCH_RESULTS_ERROR } from '../constants';

export const initialState = {
  shows: [],
  featured: [],
  count: 0,
  totalPages: 0
};

/**
 * Reducer for show results.
 * @param {object} state - current state or default
 * @param {object} action dispatched
 * @returns {object} - updated show results state
 */
export const getShows = (state = initialState, action) => {

  switch (action.type) {

  // on successful search, update result data
  case SEARCH_RESULTS_SUCCESS:

    if (!action.payload.results) {
      return state;
    }

    const { articles, count, shows, totalPages } = action.payload.results;
    return {
      shows: articles,
      featured: shows,
      count,
      totalPages
    };

  // on failed search, reset result data
  case SEARCH_RESULTS_ERROR:
    return initialState;

  // return current state by default
  default:
    return state;
  }

};
