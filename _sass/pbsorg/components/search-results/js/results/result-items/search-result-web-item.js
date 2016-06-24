'use strict';

import React, { PropTypes } from 'react';

/**
 * Renders SearchResultWebItem, a stateless functional component
 */
const SearchResultWebItem = ({itemData}) => (

  <li className='search-result-web-item'>

      <a
        href={itemData.url}
        className='search-result-web-item__title'>
          {itemData.title}
      </a>

      <div className='search-result-web-item__url-container'>
        <a
          href={itemData.url}
          className='search-result-web-item__url'>
            {itemData.url}
        </a>
      </div>

      <p className='search-result-web-item__description'>
        {itemData.description}
      </p>

  </li>

);

/**
 * Define required properties
 * and expected corresponding types
 */
SearchResultWebItem.propTypes = {
  itemData: PropTypes.object.isRequired
};

export default SearchResultWebItem;
