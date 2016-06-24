'use strict';

import { SEARCH_RESULTS_SUCCESS, SEARCH_RESULTS_ERROR } from '../constants';

export const initialState = {
  logo: undefined,
  shop_url: undefined,
  items: []
};

/**
 * Reducer for shop items.
 * @param {object} state - current state or default
 * @param {object} action dispatched
 * @returns {object} - updated shop items state
 */
export const getShopItem = (state = initialState, action) => {

  switch (action.type) {

  // on successful search, update shop items
  case SEARCH_RESULTS_SUCCESS:

    if (!action.payload.results) {
      return state;
    }

    const { shopItems } = action.payload.results;

    return {
      ...state,
      ...shopItems
    };

  // on failed search, reset shop items
  case SEARCH_RESULTS_ERROR:
    return initialState;

  // return current state by default
  default:
    return state;
  }

};
