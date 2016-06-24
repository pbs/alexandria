'use strict';

import * as constants from '../constants';

/**
 * Base action creators for search.
 *
 * For all actions, construct them following the Flux Standard Action documentation.
 * https://github.com/acdlite/flux-standard-action
 */

/**
 * Action creator for when new term is searched.
 * @param {string} term - current search term.
 */
export const newSearchTerm = (term) => {

  return {
    type: constants.NEW_SEARCH_TERM,
    payload: {
      term
    }
  };

};

/**
 * Action creator for adding custom parameters for search.
 * @param {object} params - object of new params to search with.
 */
export const addSearchParams = (params) => {

  return {
    type: constants.ADD_SEARCH_PARAMS,
    payload: {
      params
    }
  };

};


/**
 * Action creator for removing custom parameters for search.
 * @param {array} keys - array of keys to be removed from customParam object.
 */
export const removeSearchParams = (keys) => {

  return {
    type: constants.REMOVE_SEARCH_PARAMS,
    payload: {
      keys
    }
  };

};
