'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addParamAndFetch } from './redux/actions/fetch';

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

/**
 * Create a higher order component for adding search options
 * @param {React Component} ComponentRendered - component to be wrapped and rendered
 * @returns {React Component} - component with nested ComponentRendered and connected to the request store
 * https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.6jm95mje8
 */
const SearchOption = function(ComponentRendered) {

  class SearchOptionExtended extends Component {

    /**
     * Adds additional custom properties on the state.
     * @param {object} props - default props
     */
    constructor(props) {
      super(props);
      this.state = {
        isSelected: false
      }
      this.onOptionClick = this.onOptionClick.bind(this);
    }

    /**
     * Before component is rendered into DOM.
     * Checks if this list item is currently a selected value in our custom parameters
     * meaning it is a selected option
     */
    componentWillMount() {

    const { value, optionKey, params } = this.props;

    // if the current option key is a custom param
    // and that is equal to this component's value
    if (params[optionKey] && params[optionKey] === value) {

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
     * meaning it is the selected option
     */
    componentWillReceiveProps(newProps) {

      // get new custom params
      const newRequestParams = newProps.params;

      // get current values
      const { optionKey, value, params, direction } = this.props;

      // if has a label, don't set as selected
      if (direction) {
        return;
      }

      // if this components key and value is set as a custom/selected param
      if (newRequestParams[optionKey] === value) {

        // set isSelected state as true
        this.setState({isSelected: true});

      } else {

        // set isSelected state
        this.setState({isSelected: false});
      }

    }

    /**
     * Invoked before rendering when new props and state is received.
     * @param {object} newProps - new props data
     * @param {object} newState- new state data
     */
    shouldComponentUpdate(newProps, newState) {

      const { isSelected } = newState;
      const { value } = newProps;

      // if value has changed, always re-render
      if (value !== this.props.value) {
        return true;
      }

      // don't re-render if isSelected status has NOT changed
      if (isSelected === this.state.isSelected) {
        return false;
      }

      return true;
    }

    /**
     * Renders component passed in and passes props.
     */
    render() {
      return (
        <ComponentRendered
          {...this.props}
          isSelected={this.state.isSelected}
          onOptionClick={this.onOptionClick} />
      );
    }

    /**
     * On clicking a option button.
     */
    onOptionClick(e) {

      e.preventDefault();
      e.stopPropagation();

      const { isSelected } = this.state;

      // select option if not currently selected
      if (!isSelected) {
        this.addOption();
      }

    }

    /**
     * Gets sort option to add and dispatches the event.
     */
    addOption() {

      const { dispatch, value, optionKey } = this.props;

      // default to page 1 for most options
      const pageDefault = {
        page: 1
      };

      // add param clicked (this will overwrite page default for pagination)
      const newParams = Object.assign({}, pageDefault, {
        [optionKey]: value
      });

      // add filters as custom params and fetch again
      dispatch(addParamAndFetch(newParams));
    }

  };

  // returned component connected to the store
  return connect(mapStateToProps)(SearchOptionExtended);
}

export default SearchOption;
