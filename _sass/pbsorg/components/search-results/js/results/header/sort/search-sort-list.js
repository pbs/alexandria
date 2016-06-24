'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchSortListItem from './search-sort-list-item';

/**
 * Maps state properties to component properties
 * @param {object} state - current state
 * @returns {object} - properties to subscribe to the store
 */
const mapStateToProps = (state) => {
  return {
    params: state.request.customParams,
    sort: state.sort
  };
};

class SearchSortList extends Component {

  /**
   * Adds additional custom properties on the state.
   * @param {object} props - default props
   */
  constructor(props) {
    super(props);
    this.state = {
      selectedSortValue: '',
      dropdownIsOpen: false,
      contentIsWeb: false
    };
  }

  /**
   * On initial load, before render is called
   */
  componentWillMount() {

    // set the initial sort value
    let selectedSortValue = this.getCurrentSortLabel();

    this.setState({
      selectedSortValue
    });

  }

  /**
   * Invoked before rendering when new props and state is received.
   * @param {object} newProps - new props data
   * @param {object} newState- new state data
   */
  shouldComponentUpdate(newProps, newState) {

    const { selectedSortValue, contentIsWeb, dropdownIsOpen } = this.state;


    // always re-render if web content is changed
    if (dropdownIsOpen !== newState.dropdownIsOpen) {
      return true;
    }

     // always re-render if web content is changed
    if (contentIsWeb !== newState.contentIsWeb) {
      return true;
    }

    // don't re-render if selectedSortValue is the same
    if (selectedSortValue === newState.selectedSortValue) {
      return false;
    }

    return true;
  }

  /**
   * Get current sort values label.
   * @returns {string} - string value of current sort label
   */
  getCurrentSortLabel() {
    const { options } = this.props.sort;
    const { rank } = this.props.params;

    for (let i = 0; i < options.length; i += 1) {
      options[i]
      if (options[i].value === rank) {
        return options[i].text;
      }
    }

    return 'Relevance';
  }

  /**
   * Before new props, check to see if we should mark as selected
   */
  componentWillReceiveProps(newProps) {

    const contentTypeParam = newProps.params.content_type;

    if (newProps.sort.options[0]) {
      this.setState({
        selectedSortValue: this.getCurrentSortLabel(),
        dropdownIsOpen: false,
        contentIsWeb: contentTypeParam && contentTypeParam === 'webobject'
      });
    }
  }

  /**
   * Renders search sort list markup.
   */
  render() {

    const { selectedSortValue, dropdownIsOpen } = this.state;
    const sortOptionsToShow = this.getSortOptionMarkup();

    // set class for if dropdown is open
    let customClasses = 'search-sort__list'
    if (dropdownIsOpen) {
      customClasses += ' search-sort__list--is-visible';
    }

    return (
      <div>

        <button
          className='search-sort__dropdown-label'
          onClick={(e) => this.onDropdownClick(e)}>
          <span className='search-sort__dropdown-selected'>
            {selectedSortValue}
          </span>
          <img className='caret' src={window.PBS_STATIC_URL + 'images/svg/down.svg'} alt=''/>
        </button>

        <ul
          className={customClasses}
          ref='sort-list'>
          {sortOptionsToShow}
        </ul>

      </div>
    );
  }

  /**
   * On sort label click on mobile,
   * show or hide sort list dropdown.
   * @param {event} e
   */
  onDropdownClick(e) {

    e.preventDefault();
    e.stopPropagation();

    return this.setState({
      dropdownIsOpen: !this.state.dropdownIsOpen
    });

  }

  /**
   * Builds sort options list item markup.
   * @returns {array} sortOptionsToShow - array of list item components
   */
  getSortOptionMarkup() {

    const { sort } = this.props;
    const { contentIsWeb } = this.state;
    const sortOptionsToShow = [];

    sort.options.forEach((sort, index) => {

      // if web is the content type selected,
      // don't show expiration date as sort option
      if (contentIsWeb) {
        if (sort.value === 'expire_epoch') {
          return;
        }
      }

      sortOptionsToShow.push(
        <SearchSortListItem
          key={index}
          index={index}
          optionKey='rank'
          value={sort.value}
          label={sort.text} />
      );
    });

    return sortOptionsToShow;
  }

};


/**
 * Define required properties
 * and expected corresponding types
 */
SearchSortList.propTypes = {
  params: PropTypes.object,
  sort: PropTypes.object
};

export default connect(mapStateToProps)(SearchSortList);
