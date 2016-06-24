'use strict';

import { combineReducers } from 'redux';
import { getFilters } from './filters';
import { getSort } from './sort';
import { getShopItem } from './shop';
import { getRequestState } from './request';
import { getShows } from './shows';
import { getTerm } from './term';

// combined reducer for search page
const searchPage = combineReducers({
  request: getRequestState,
  results: getShows,
  term: getTerm,
  sort: getSort,
  shop: getShopItem,
  filters: getFilters
});

export default searchPage;
