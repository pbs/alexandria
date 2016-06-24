'use strict';

import { SEARCH_FETCH_RESULTS, NEW_SEARCH_TERM } from '../constants';

export const initialState = '';

/**
 * Reducer for search term.
 * @param {object} state - current state or default
 * @param {object} action dispatched
 * @returns {string} - updated term being searched
 */
export const getTerm = (state = initialState, action) => {

  switch (action.type) {

  // on begin search, update term
  case SEARCH_FETCH_RESULTS:
  case NEW_SEARCH_TERM:
    return action.payload.term;

  // return current state by default
  default:
    return state;
  }

};
