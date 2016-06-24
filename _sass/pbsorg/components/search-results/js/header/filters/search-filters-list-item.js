'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchFiltersDetailedList from './search-filters-list-detailed';
import { removeParamAndFetch, addParamAndFetch } from '../../redux/actions/fetch';
import { addSearchParams } from '../../redux/actions/base';
import _isEqual from 'lodash.isequal';

/**
 * Maps state properties to component properties
 * @param {object} state - current state
 * @returns {object} - properties to subscribe to the store
 */
const mapStateToProps = (state) => {
  return {
    params: state.request.customParams
  };
};

class SearchFiltersListItem extends Component {

  /**
   * Adds additional custom properties on the state.
   * @param {object} props - default props
   */
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      prevWebFilterValue: ''
    }
    this.setPrevWebFilterValue = this.setPrevWebFilterValue.bind(this);

  }

  /**
   * Before component is rendered into DOM.
   * Checks if this list item is currently a selected value in our custom parameters
   * meaning it is a selected option
   */
  componentWillMount() {

    const { val, filterKey, params } = this.props;

    // if the current filter key is a custom param
    // and that is equal to this filters value
    if (params[filterKey] && params[filterKey] === val) {

      // set component as selected
      this.setState({
        isSelected: true
      });

    }
  }

  /**
   * When component is received new props.
   * Must use this lifecycle event so we can set state.
   * Checks if this list item is currently a selected value in our custom parameters
   * meaning it is a selected option
   */
  componentWillReceiveProps(newProps) {

    // get new custom params
    const newRequestParams = newProps.params;
    const newVal = newProps.val;

    // get current values
    const { filterKey, val, params } = this.props;
    const { prevWebFilterValue } = this.state;
    const updatedVal = val === newVal ? val : newVal;

    const updatedState = {};

    // if this filter's key and value is set as a custom/selected param
    if (newRequestParams[filterKey] === updatedVal) {

      // set isSelected state
      updatedState.isSelected = true;

    } else {

      // set isSelected state
      updatedState.isSelected = false;

    }

    // if sort filters have changed, update prev sort value
    if (newRequestParams.rank !== params.rank) {
      updatedState.prevWebFilterValue = params.rank;
    }

    this.setState(updatedState);
  }

  /**
   * Invoked before rendering when new props and state is received.
   * @param {object} newProps - new props data
   * @param {object} newState- new state data
   */
  shouldComponentUpdate(newProps, newState) {

    const { count, params, index } = newProps;
    const { isSelected } = newState;

    // always re-render if isSelected status has changed
    if (isSelected !== this.state.isSelected) {
      return true;
    }

    // always re-render if count has changed
    if (count !== this.props.count) {
      return true;
    }

    // if no new filters have been applied or changed, don't re-render
    if (_isEqual(params, this.props.params)) {
      return false;
    }

    return true;
  }

  /**
   * Renders search filter list item markup.
   * If a nested sub list if options are passed,
   * renders a new detailed list for the sub options
   */
  render() {

    const { label, count, options, val, filterKey, subListSuffix } = this.props;
    const { isSelected } = this.state;

    return (
      <li className='search-filters__detailed-list-item'>

        <button
          className='search-filters__detailed-list-item-link'
          onClick={(e) => this.onFilterClick(e)}>
          { isSelected ?
            <i className="search-filters__detailed-list-item-remove-icon icon-pbs-remove"></i> :
            ''
          }
          {label}
        </button>

        <span className='search-filters__detailed-list-item-count'>
          {count}
        </span>

        {options ?
          <SearchFiltersDetailedList
            parentKey={filterKey}
            filterKey={val + subListSuffix}
            filter={{options}} /> :
          ''
        }

      </li>
    );
  }

  /**
   * On clicking a filter.
   * @param {e} event
   */
  onFilterClick(e) {

    e.preventDefault();
    e.stopPropagation();

    const { isSelected } = this.state;

    // if currently selected
    if (isSelected) {

      this.removeFilter();

    } else {

      this.addFilter();

    }

  }

  /**
   * Sets previous web filter value.
   * This enables to go back to previous filter once web is clicked.
   * @param {string} prevWebFilterValue
   */
  setPrevWebFilterValue(prevWebFilterValue) {

    const val = prevWebFilterValue || '';

    // update filter item state
    this.setState({
      prevWebFilterValue: val
    });

  }

  /**
   * Gets filter(s) to remove and dispatches the event.
   */
  removeFilter() {

    const {
      dispatch,
      filterKey,
      val,
      options,
      subListSuffix,
      dependentFilterType,
      params,
      parentKey,
      defaultWebSortValue,
      expireWebSortValue,
      webContentType
    } = this.props;

    const { prevWebFilterValue } = this.state;

    const newParams = {};

    // store current key
    const keys = [filterKey];

    // if there are options, remove child keys too
    if (options) {
      keys.push(val + subListSuffix);
    }

    // if there is a dependent filter
    if (dependentFilterType) {

      // check if there is a sublist currently being filtered
      // this is a sublist of the dependent key
      let subListDepKey = params[dependentFilterType] + subListSuffix;

      // if we aren't filtering sublist
      // we can remove the parent
      if (!params[subListDepKey]) {
        keys.push(dependentFilterType);
      }
    }

    // if we are removing web filter and if there was a previous filter value
    if (prevWebFilterValue && val === webContentType) {

      // if they didn't click any other sort filters
      if (params.rank === defaultWebSortValue && prevWebFilterValue === expireWebSortValue) {

        // revert to previous filter value
        newParams.rank = prevWebFilterValue;
      }

      // update sort search param
      dispatch(addSearchParams(newParams))
    }

    // remove current key as a custom param and fetch again
    // and resets prevfiltervalue
    dispatch(removeParamAndFetch(keys))
      .then(this.setPrevWebFilterValue());

  }

  /**
   * Gets filter(s) to add and dispatches the event.
   */
  addFilter() {

    const {
      dispatch,
      val,
      filterKey,
      parentKey,
      subListSuffix,
      defaultWebSortValue,
      expireWebSortValue,
      webContentType,
      dependentFilterType,
      params,
      dependentSpecificFilter
    } = this.props;

    const newParams = {
      [filterKey]: val,
      page: 1
    };

    let prevWebFilterValue = '';

    // if this is a nested sub list, add parent as selected too
    if (parentKey) {

      // get parent key by adding sublist suffix value
      newParams[parentKey] = filterKey.substring(0, subListSuffix.length);
    }

    // edge case for webobjects
    // set relevance as default sort for webobject filter
    if (val === webContentType) {

      // if currently on expiration, change to default value
      if (params.rank === expireWebSortValue) {
        newParams.rank = defaultWebSortValue;
      }

      // store the current value
      prevWebFilterValue = params.rank;

    }

    // allow filters to have dependent filters
    if (dependentFilterType && dependentSpecificFilter) {
      newParams[dependentFilterType] = dependentSpecificFilter;
    }

    // add filters as custom params and fetch again
    // and set prev filter value
    dispatch(addParamAndFetch(newParams))
      .then(this.setPrevWebFilterValue(prevWebFilterValue));
  }

};

/**
 * Define default props specific to this component
 */
SearchFiltersListItem.defaultProps = {
  subListSuffix: '_type',
  webContentType: 'webobject',
  defaultWebSortValue: 'relevance',
  expireWebSortValue: 'expire_epoch'
};

/**
 * Define required properties
 * and expected corresponding types
 */
SearchFiltersListItem.propTypes = {
  label: PropTypes.string.isRequired,
  val: PropTypes.string.isRequired,
  filterKey: PropTypes.string.isRequired,
  count: PropTypes.number,
  subList: PropTypes.bool,
  options: PropTypes.array,
  parentKey: PropTypes.string
};

export default connect(mapStateToProps)(SearchFiltersListItem);
