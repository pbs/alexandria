'use strict';

import jQuery from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import SearchApp from './search-app';
import SearchStore from './redux/store';

require('picturefill');

jQuery(() => {

  const searchResultsEl = document.getElementById('search');
  const heavyTraffic = searchResultsEl.getAttribute('data-heavy-traffic-mode');

  render(
    <Provider store={SearchStore}>
      <SearchApp />
    </Provider>,
    searchResultsEl
  );

});
