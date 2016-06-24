'use strict';

import { SEARCH_RESULTS_SUCCESS, SEARCH_RESULTS_ERROR } from '../constants';

export const initialState = {};

/**
 * Reducer for filters object (multiple filters).
 * @param {object} state - current state or default
 * @param {object} action dispatched
 * @returns {object} - updated filter state
 */
export const getFilters = (state = initialState, action) => {

  switch (action.type) {

  // on successful fetch, return new filters
  case SEARCH_RESULTS_SUCCESS:
    return {
      ...action.payload.filters
    };

  // on failed fetch, return initial state
  case SEARCH_RESULTS_ERROR:
    return initialState;

  // return current state by default
  default:
    return state;
  }

};
