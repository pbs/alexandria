'use strict';

let jQuery = window.jQuery = require('jquery'),
  React = window.React || require('react'),
  PBS = require('../../../scripts/_pbs'),
  NoResultsView = require('./results/search-results-no-results'),
  FacetHeader = require('./facets/search-results-facet-header'),
  FacetForm = require('./facets/search-results-facet-form'),
  ResultsHeader = require('./results/search-results-header'),
  ResultsList = require('./results/search-results-list'),
  ResultsPagination = require('./pagination/search-results-pagination'),
  ResultsFeaturedArticle = require('./results-featured/search-results-featured-article'),
  ResultsFeaturedPosters = require('./results-featured/search-results-featured-poster-list'),
  ResultsAd = require('./results/search-results-ad'),
  ShopItems = require('./shop/search-results-shop-list'),
  SearchResultsComponent,
  searchUrl;

require('picturefill');

function updateOrAddParam(url, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i"),
      separator = url.indexOf('?') !== -1 ? "&" : "?";

  if (!value || value === 'null') { //remove the param
    url = url.replace(re, '$2');
  } else {
    if (url.match(re)) {
      url = url.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
      url = url + separator +  key + "=" + value;
    }
  }

  return url;
}

// render the whole component;
SearchResultsComponent = React.createClass({
  // get search results from a JSON feed;
  getJSON (key, value) {
    // instead of grabbing the same JSON file over and over, lets rotate through 3 different files;
    var index = this.state.page,
        term,
        url,
        searchParamsStr,
        // make a copy so we're not manipulating the state object;
        data = jQuery.extend({}, this.state),
        station = jQuery.cookie('pbsol.station'),
        o = this;

    // delete what we dont want to pass to the back end;
    delete data.content;
    delete data.showFacets;

    // use searchUrl if is set
    if (searchUrl) {
      url = searchUrl;
    } else {
      url = '/search-videos/' + window.location.search;
    }

    // get term from search params to set
    searchParamsStr = url.split('?q=');

    if (key) {
      url = updateOrAddParam(url, key, encodeURIComponent(value));
    }
    // make localized call
    if (station) {
      url = updateOrAddParam(url, 'callsign', station);
    }
    searchUrl = url;

    // set state to loading and add term
    if (searchParamsStr.length > 1) {
      term = searchParamsStr[1].split('&');
      term = term.length > 0 ? term[0] : '';
    }
    this.setState({
      loading: true,
      term: (term) ? decodeURIComponent(term.replace(/\++/g, ' ')) : term
    });

    setTimeout(function () {
      jQuery.ajax({
            url: url,
            type: 'GET',
            data: {'page': index}
          }).done(function (responseData) {
            // update the state once we get a response;
              o.setState({
                "content": (jQuery.isEmptyObject(responseData) || responseData.results.count === 0) ? null: responseData, // update the content;
                "loading": false,        // remove loading indicator;
                "showFacets": false      // close facets form;
              });
          }.bind(this))
          .fail(function () {
            console.error("error loading new search results content");
        });
    }, 1250);
  },

  getInitialState () {
    return {
      "facetFormHeight": null,
      "showFacets": false,
      "content": null,
      "content_type": null,
      "type": null,
      "show": null,
      "duration": null,
      "sortLabel": "Relevance",
      "sort": "relevance",
      "page": 1,
      "loading": true,
      "heavyTraffic": this.props.heavyTraffic,
      "term": ''
    };
  },

  /**
   * Callback for when search input is changed
   * @param {React event} e
   */
  onSearchInputChange(e) {
    this.setState({term: e.target.value});
  },

  // function to hide/show the facets form;
  toggleFacetForm () {
    var height,
        newStateValues = {
          "showFacets": !this.state.showFacets
        };

    // if we're on mobile, set the height of the facet form;
    if (window.innerWidth < PBS.breakpoints.sm) {
      height = window.innerHeight - jQuery("div.navbar-header").outerHeight() - jQuery("header.facet-header").outerHeight();

      newStateValues.facetFormHeight = height;
    }
    this.setState(newStateValues);
  },

  // facet filter function, used by the facet links in the facet form;
  filterBy (e) {
    var facetCategory = e.currentTarget.getAttribute("data-facet-category"),
        // new value to add or delete;
        newSelectedValue = e.currentTarget.getAttribute("data-facet-id"),
        // a copy of the state value, we'll adjust this before pushing it back into state;
        newStateValue = this.state[facetCategory],
        // our delivery object back into state;
        newStateObj = {
          // need to start over at page 1;
          "page": 1
        };

    if (e.currentTarget.classList.contains('search-filter-category__value--no-count')) {
      return;
    }

    // if the clicked value is already selected;
    // unselect it, otherwise select it;
    newStateValue = (newStateValue === newSelectedValue) ? null : newSelectedValue;

    // now that we have the new state value, lets create an object to push into state;
    newStateObj[facetCategory] = newStateValue;
    // if Web was selected for the type, then clear out other facet values;
    if (newSelectedValue === 'webobject') {
      newStateObj.show = null;
      newStateObj.duration = null;
    }
    this.setState(newStateObj, function () {
      // now go get new content based on our updated state;
      this.getJSON(facetCategory, newStateValue);
    });
  },

  // sort function, used by the links in the sort form;
  sortBy (e) {
    var sortCriteria = e.target.getAttribute("data-sort-id");
    // set the new state values based off DATA attributes;
    this.setState({
      "page": 1,
      "sort": sortCriteria,
      "sortLabel": e.target.childNodes[0].textContent
    }, function () {
      // now go get new content based on our updated state;
      this.getJSON('rank', sortCriteria);
    });
  },

  // change the page of results;
  pageBy (e) {
    // set the new state values based off DATA attributes;
    this.setState({ "page": Number(e.target.getAttribute("data-page-id")) }, function () {
      // now go get new content based on our updated state;
      this.getJSON();
    });
  },

  componentDidMount () {
    this.getJSON();
  },

  componentDidUpdate () {

  },

  /**
   * Renders component.
   */
  render () {
    let rightRailContent = '',
      form = this.getFormView(),
      results = this.getResultsView();

    return (
      <div className={ (this.state.loading) ? "results-articles results-articles-loading" : "results-articles" }>
        <FacetHeader state={ this.state } filterFunction={ this.filterBy } toggleFunction={ this.toggleFacetForm } onSearchInputChange={this.onSearchInputChange} />
        {form}
        {results}
      </div>
    );
  },

  /**
   * Gets whether to display form or no results messaging.
   * @returns {React Component|html} - either form view or no results found
   */
  getFormView() {
    if (this.state.content) {
      return <FacetForm state={ this.state } filterFunction={ this.filterBy } />;
    } else if (!this.state.loading) {
      return <NoResultsView term={this.state.term} />;
    }
  },

  /**
   * Gets results view if results.
   */
  getResultsView() {
    let shows,
      showsPosters,
      featuredShows = null,
      featuredShowsToShow = [],
      shopBlock;

    if (this.state.content) {

      // if we are filtering by show, only show featured articles if that show is one of them
      if (this.state.show) {
        for (let i = 0; i < this.state.content.results.shows.length; i++) {
          if (this.state.show === this.state.content.results.shows[i].title) {
            featuredShowsToShow.push(this.state.content.results.shows[i]);
          }
        }
      } else {
        featuredShowsToShow = this.state.content.results.shows;
      }

      // only set featuredShows on first page and when there are shows to show
      if (this.state.page === 1 && featuredShowsToShow.length > 0) {
        if (featuredShowsToShow.length > 1 &&
            featuredShowsToShow[0].title !== 'Masterpiece') {
          // multi-show case, show 2-3 shows
          // if first result is Masterpiece, trigger a special condition where
          // it acts like the only show returned (so that things like Downton, etc.
          // don't have weird extra results
          featuredShows = (<ResultsFeaturedPosters content={ featuredShowsToShow } heavyTraffic={this.props.heavyTraffic} />);
        } else {
          // single-show case, include episodes
          featuredShows = (<ResultsFeaturedArticle content={ featuredShowsToShow } heavyTraffic={this.props.heavyTraffic} />);
        }
      }

      if (this.state.content.results.shopItems.items.length > 1 ) {
        shopBlock = <ShopItems content={ this.state.content.results.shopItems } />;
      }

      return <div className="row-search-results">
        <div className="col-search-results-content">
          <ResultsHeader state={ this.state } sortFunction={ this.sortBy } />
          {featuredShows}
          <ResultsList content={ this.state.content.results } />
        </div>
        <div className="col-search-results-right-rail">
          <ResultsAd />
           { shopBlock }
        </div>
        <div className="col-search-results-content">
          <ResultsPagination page={ this.state.page } totalPages={ this.state.content.results.totalPages } pageFunction={ this.pageBy } />
        </div>
      </div>;
    }
  }
});

jQuery(($) => {

  let searchResultsEl = document.getElementById('search-results-container'),
    heavyTraffic = searchResultsEl.getAttribute('data-heavy-traffic-mode');

  // insert the component into the DOM;
  React.render(<SearchResultsComponent heavyTraffic={heavyTraffic} />, searchResultsEl);

});
