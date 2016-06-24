'use strict';

import { SEARCH_FETCH_RESULTS, SEARCH_RESULTS_SUCCESS, SEARCH_RESULTS_ERROR, ADD_SEARCH_PARAMS, REMOVE_SEARCH_PARAMS } from '../constants';

export const initialState = {
  isFetching: false,
  error: undefined,
  customParams: {
    rank: 'relevance',
    page: 1
  }
};

/**
 * Reducer for getting request state.
 * @param {object} state - current state or default
 * @param {object} action dispatched
 * @returns {object} - updated request state
 */
export const getRequestState = (state = initialState, action) => {

  switch (action.type) {

  // on start fetch for search results
  case SEARCH_FETCH_RESULTS:
    return {
      ...state,
      isFetching: true
    };

  // on successful search results
  case SEARCH_RESULTS_SUCCESS:
    return {
      ...state,
      isFetching: false,
      error: undefined
    };

  // on failed search results
  case SEARCH_RESULTS_ERROR:
    return {
      ...state,
      isFetching: false,
      error: action.payload.message
    };

  // on adding custom search parameters
  case ADD_SEARCH_PARAMS:
    return {
      ...state,
      customParams: Object.assign({}, state.customParams, action.payload.params)
    };

  // on removing custom search parameters
  case REMOVE_SEARCH_PARAMS:
    const copy = Object.assign({}, state.customParams);
    action.payload.keys.forEach((key) => {
      if (copy[key]) {
        delete copy[key];
      }
    });

    return {
      ...state,
      customParams: copy
    };

  // return current state by default
  default:
    return state;
  }

};
