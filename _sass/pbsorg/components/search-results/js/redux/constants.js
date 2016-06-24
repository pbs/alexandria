'use strict';

/**
 * Action types for search.
 */

/**
 * Action type for new search request.
 *
 */
export const NEW_SEARCH_TERM = 'NEW_SEARCH_TERM';

/**
 * Action type for when custom search params are added.
 */
export const ADD_SEARCH_PARAMS = 'ADD_SEARCH_PARAMS';

/**
 * Action type for when custom search params are removed.
 */
export const REMOVE_SEARCH_PARAMS = 'REMOVE_SEARCH_PARAMS';

/**
 * Request: action type for when begin fetching data for new search.
 */
export const SEARCH_FETCH_RESULTS = 'SEARCH_FETCH_RESULTS';

/**
 * Request: action type for successful new search fetch.
 */
export const SEARCH_RESULTS_SUCCESS = 'SEARCH_RESULTS_SUCCESS';

/**
 * Request: action type for failed new search fetch.
 */
export const SEARCH_RESULTS_ERROR = 'SEARCH_RESULTS_ERROR';
