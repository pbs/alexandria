'use strict';

let React = window.React || require('react'),
  ResultsPaginationLink = require('./search-results-pagination-link'),
  ResultsPaginationButton = require('./search-results-pagination-button'),
  ResultsPagination;

// build the pagination;
ResultsPagination = React.createClass({
  render: function () {
    var links = [],
        maxPagination = 9,
        shiftPagination = parseInt(maxPagination/2),
        maxPaginationMobile = 3,
        shiftPaginationMobile = parseInt(maxPaginationMobile/2),
        linksMobile = [],
        selectedPage = this.props.page,
        totalPages = this.props.totalPages,
        pageNumber,
        // start so the selected page is the center, or start on page 1;
        startPageDesktop = (selectedPage > 5) ? selectedPage - shiftPagination : 1,
        startPageMobile  = (selectedPage > 2) ? selectedPage - shiftPaginationMobile : 1;

    // build ten page links;
    while(links.length < maxPagination && links.length <= totalPages - startPageDesktop) {
      pageNumber = links.length + startPageDesktop;

      links.push(<ResultsPaginationLink key={ pageNumber } selectedPage={ selectedPage } pageNumber={ pageNumber } pageFunction={ this.props.pageFunction } />);
    }

    // build three page links;
    while(linksMobile.length < maxPaginationMobile && links.length <= totalPages - startPageDesktop) {
      pageNumber = linksMobile.length + startPageMobile;

      linksMobile.push(<ResultsPaginationLink key={ pageNumber } selectedPage={ selectedPage } pageNumber={ pageNumber } pageFunction={ this.props.pageFunction } />);
    }

    // then return all the results;
    return (
      <nav className="pagination">
        <div className="hidden-xs">
          { (selectedPage > 1) ? <ResultsPaginationButton content="Previous" pageNumber={ selectedPage - 1 } pageFunction={ this.props.pageFunction } /> : null }
          { links }
          { (selectedPage !== totalPages) ? <ResultsPaginationButton content="Next" pageNumber={ selectedPage + 1 } pageFunction={ this.props.pageFunction } /> : null }
        </div>
        <div className="visible-xs">
          { (selectedPage > 1) ? <ResultsPaginationButton content="Prev" pageNumber={ selectedPage - 1 } pageFunction={ this.props.pageFunction } /> : null }
          { linksMobile }
          { (selectedPage !== totalPages) ? <ResultsPaginationButton content="Next" pageNumber={ selectedPage + 1 } pageFunction={ this.props.pageFunction } /> : null }
        </div>
      </nav>
    );
  }
});

module.exports = ResultsPagination;
