'use strict';

import Promise from '../../../../../bower_components/bluebird/js/browser/bluebird.min';
import fetch from 'isomorphic-fetch';
import queryString from 'query-string';
import { SEARCH_FETCH_RESULTS, SEARCH_RESULTS_SUCCESS, SEARCH_RESULTS_ERROR } from '../constants';
import { addSearchParams, removeSearchParams } from './base';

/**
 * Gets Search Term from query string in URL.
 * @returns {string} - query term
 */
const getSearchQueryFromUrl = (key) => {

  if (window.location.search) {
    const queryObj = queryString.parse(window.location.search);

    return key ? queryObj[key] : queryObj;
  }

  return '';

};

/**
 * Action creator for when new search fetch begins.
 * @param {object} state - current search state.
 * @returns {object} - action creator
 */
const fetchSearchResults = (state) => {

  let { term } = state;

  if (!term) {
    term = getSearchQueryFromUrl('q');
  }

  return {
    type: SEARCH_FETCH_RESULTS,
    payload: {
      term
    }
  };

};

/**
 * Action creator for successful fetch of search term.
 * @param {object} results - results json.
 * @returns {object} - action creator
 */
const onSearchResultsSuccess = (data) => {
  return {
    type: SEARCH_RESULTS_SUCCESS,
    payload: data
  };

};

/**
 * Action creator for failed fetch of search term.
 * @param {object} error - error json.
 * @returns {object} - action creator
 */
const onSearchResultsError = (error) => {

  return {
    type: SEARCH_RESULTS_ERROR,
    payload: error
  };

};

/**
 * Builds query string for fetch based on object of params passed in.
 * @param {object} param - object of params
 * @returns {string} - query string
 */
const buildQueryString = (params) => {

  return queryString.stringify(params);

};

/**
 * Get search params as an object.
 * @param {object} param - current params object
 * @param {string} term - if term is set in state
 * @returns {object} - updates params object
 */
const getSearchParam = (params, term) => {

  const newTermObj = {
    q: term || getSearchQueryFromUrl('q')
  };

  return {
    ...params,
    ...newTermObj
  };

};

/**
 * Get station value.
 * @param {object} params - current params object
 * @returns {object} - updates params object
 */
const getStationParam = (params) => {

  const stationObj = {
    callsign: window.jQuery && window.jQuery.cookie ? window.jQuery.cookie('pbsol.station') : ''
  };

  return {
    ...params,
    ...stationObj
  };

};

/**
 * Adds custom values to search url.
 * @param {object} params - current params object
 * @param {object} currentRequestObj - current request object
 * @returns {object} - updates params object
 */
const addCustomParams = (params, currentRequestObj) => {

  const customParamsObj = currentRequestObj || {};

  return {
    ...params,
    ...customParamsObj
  };

};

/**
 * Builds URL to fetch new search term based on params/filters
 * @param {object} state - current state
 * @returns {string} url - updated url with query string
 */
const buildSearchUrl = (state) => {

  let url = '/search-videos/?';
  let params = {};

  params = getSearchParam(params, state.term);
  params = getStationParam(params);
  params = addCustomParams(params, state.request.customParams);

  url += buildQueryString(params);

  return url;
};

/**
 * Thunk action creator for fetching results for search term.
 * @returns {function} - instead of an action object
 * Thunk middleware handles functions and can dispatch methods itself
 * (it passes the dispatch method is an argument of the the function)
 */
export const fetchResults = () => {

  window.Promise = Promise;

  return (dispatch, getState) => {

    // dispatch action that we are making a call
    dispatch(fetchSearchResults(getState()));

    // build the url to fetch
    const url = buildSearchUrl(getState());

    // return a promise to wait for response
    return fetch(url)
      .then(response => response.json())
      .then(json =>
        // on successful fetch, pass value as value on method
        dispatch(onSearchResultsSuccess(json))
      )
      // catch any error in the network call.
      .catch((err) =>
        // on failed fetch, pass error
        dispatch(onSearchResultsError(err))
      );
  };
};

/**
 * Thunk action creator for add new parameter and fetching new results.
 * @param {object} params - an object of new parameters
 * @returns {function} - instead of an action object
 * Thunk middleware handles functions and can dispatch methods itself
 * (it passes the dispatch method is an argument of the the function)
 */
export const addParamAndFetch = (params) => {
  return (dispatch) => {
    dispatch(addSearchParams(params));
    return dispatch(fetchResults());
  }

};

/**
 * Thunk action creator for removing a parameter and fetching new results.
 * @param {array} keys - an array of keys to remove
 * @returns {function} - instead of an action object
 * Thunk middleware handles functions and can dispatch methods itself
 * (it passes the dispatch method is an argument of the the function)
 */
export const removeParamAndFetch = (keys) => {
  return (dispatch) => {
    dispatch(removeSearchParams(keys));
    return dispatch(fetchResults());
  }

};
