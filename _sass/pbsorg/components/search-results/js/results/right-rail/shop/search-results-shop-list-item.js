'use strict';

import React, { PropTypes } from 'react';

/**
 * Renders SearchResultsShopListItem, a stateless functional component
 */
const SearchResultsShopListItem = ({itemData}) => (

  <li className='search-results-shop__list__item'>
    <a
      className='search-results-shop__list__item__link'
      href={itemData.URI}>

      <img
        className='search-results-shop__list__item__image'
        src={itemData.image_url}
        alt={itemData.title}/>

      <span className='search-results-shop__list__item__title'>{itemData.title}</span>
    </a>
  </li>

);

/**
 * Define required properties
 * and expected corresponding types
 */
SearchResultsShopListItem.propTypes = {
  itemData: PropTypes.object.isRequired
};

export default SearchResultsShopListItem;
