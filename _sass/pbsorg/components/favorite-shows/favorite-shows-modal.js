'use strict';

let jQuery = window.jQuery = require('jquery'),
  PBS = require('../../scripts/_pbs');

require('../../bower_components/jquery-ui/ui/core');
require('../../bower_components/jquery-ui/ui/widget');
require('../../bower_components/jquery-ui/ui/mouse');
require('../../bower_components/jquery-ui/ui/sortable');
require('../../bower_components/jquery-ui-touch-punch/jquery.ui.touch-punch');

jQuery(($) => {

  let _cache = {},

  lastScrollPosition = 0,

  /**
   * Initializes element.
   */
  init = () => {

    setupCache();
    addEvents();
    setupSortableList();

  },

  /**
   * Caches re-used elements.
   */
  setupCache = () => {
    _cache.body = $('body');
    _cache.showListContainer = $('.favlist-container');
    _cache.removeShowButton = $('.remove-favlist');
  },

  /**
   * Attaches event handlers.
   */
  addEvents = () => {

    _cache.removeShowButton.on('click', onRemoveShowButtonClick);

    // addNewShowToFavorites event is declared in app/components/favorite-shows/favorite-shows.js
    $(document).on('addNewShowToFavorites', {}, onAddNewShow);

  },

  /**
   * Callback when remove button is clicked for a show.
   */
  onRemoveShowButtonClick = (e) => {

    let showToDelete = $(e.target).closest('.favlist-result'),
      index = showToDelete.index();

    removeShowFromFavoritesCarousel(index);

    showToDelete.fadeOut(600, () => {
      $(this).remove();
      reorderSortableList();
    });
  },

  /**
   * Set up sortable list of shows.
   */
  setupSortableList = () => {
    _cache.showListContainer.sortable({
      axis: 'y',
      forcePlaceholderSize: true,
      handle: '.favlist-handle',
      update: reorderSortableList,

      // cf. http://stackoverflow.com/questions/1735372/jquery-sortable-list-scroll-bar-jumps-up-when-sorting
      // before we start;
      helper: (event, ui) => {
        // lets get the scroll position (it's going to change in a second, and that's bad);
        lastScrollPosition = _cache.body.scrollTop();

        // return the item to drag;
        return ui;
      },

      // now start the drag event;
      start: () =>  {

        // avoid scroll jump by going back to our position when this started;
        _cache.body.scrollTop(lastScrollPosition);
      }
    });
  },

  /**
   * When a new show is added from favorite shows landing page.
   */
  onAddNewShow = (event, showID) => {
    /*
     In production you would first check to see if the showID has already been added.
     If not then make a call to a backend service that will return the json data for the
     corresponding showID.
     */
    if (showID === 'Nova') {
      jQuery.get('/components/carousel/favorite-show/ajax-search-results.json', function (data) {
        let $html = jQuery(window.newFavoriteShowhandblebarsTemplate(data));
        jQuery('#favoriteShowsCarouselDiv div.carousel-container').slick('slickAdd', $html, 0);
        alert('Page reload is needed now.');
      });
    }
  },

  /**
   * Reorders the sortable list of shows.
   */
  reorderSortableList = () => {
    let index = 1;
    _cache.showListContainer.find('.favlist-result').each(function () {
      if ($(this).is(':visible')) {
        $(this).find('.favlist-position').html(index);
        index = index + 1;
      }
    });
    // alert('Page reload is needed now.');
  },

  /**
   * Remove show from carousel on favorite shows landing page.
   */
  removeShowFromFavoritesCarousel = (index) => {
    $('.carousel-container').slick('slickRemove', index);
    // alert('Page reload is needed now.');
  };

  init();

});
