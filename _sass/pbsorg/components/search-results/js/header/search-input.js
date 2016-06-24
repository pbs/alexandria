'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { newSearchTerm } from '../redux/actions/base';

/**
 * Updates the search 'term'.
 * @param {e} event
 * @returns {function} - an action creator to update term
 */
const updateSearchTerm = (e) => {

  const text = e.target.value;
  return newSearchTerm(text);

};

/**
 * Maps state properties to component properties
 * @param {object} state - current state
 * @returns {object} - properties to subscribe to the store
 */
const mapStateToProps = (state) => {
  return {
    term: state.term
  };
};

/**
 * Maps functions assumed to be a Redux action creator properties
 * to component properties
 * @param {function} dispatch - redux dispatch function
 * @returns {object} - action creator functions
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => {dispatch(updateSearchTerm(e))}
  };
};

export class SearchInput extends Component {

  /**
   * Renders search input markup.
   */
  render() {

    const { term, onChange } = this.props;

    return (
      <div className='search-input-container'>
        <h2 className='search-header__form-title'>Search Results for</h2>
        <form className='search-header__form'>
          <label
            htmlFor='q'
            className='visuallyhidden'>
            Update your search
          </label>
          <input
            ref='input'
            type='search'
            className='search-header__input'
            value={term}
            onChange={onChange}
            name='q'
            d='q' />
          <button className='search-header__input-button btn btn--search'>
            <span className='visuallyhidden'>Search</span>
            <span aria-hidden='true'>
              <i className='icon-pbs-search'></i>
            </span>
          </button>
        </form>
      </div>
    );
  }

};

/**
 * Define required properties
 * and expected corresponding types
 */
SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
