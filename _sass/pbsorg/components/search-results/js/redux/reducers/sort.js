'use strict';

import { SELECT_SORT_OPTION, SEARCH_RESULTS_SUCCESS, SEARCH_RESULTS_ERROR } from '../constants';

export const initialState = {
  label: '',
  options: []
};

/**
 * Reducer for sort options.
 * @param {object} state - current state or default
 * @param {object} action dispatched
 * @returns {object} - updated sort options state
 */
export const getSort = (state = initialState, action) => {

  switch (action.type) {

  // on successful search, update sort options
  case SEARCH_RESULTS_SUCCESS:
    return {
      ...action.payload.sort
    };

  // on failed search, reset sort options
  case SEARCH_RESULTS_ERROR:
    return initialState;

  // return current state by default
  default:
    return state;
  }

};
