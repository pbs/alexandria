'use strict';

import React from 'react';

let FilterBar = (props) => {

  let stationCopy = 'Only ' + props.localStation + ' Shows';

  return <form action="#">
    <div className="row visible-xs top-sort-row">
      <div className="sort-buttons">
        <span>
          Sort By:
        </span>
        <div className="divider">
          <button aria-label="Sort by most popular" className={"btn "  + (props.sortBy === "popular" ? "selected-btn" : "")} data-sort="popular" onClick={props.onSortByClick}>Popular</button>
        </div>
          <button aria-label="Sort alphabetically" className={"btn "  + (props.sortBy === "ascending" ? "selected-btn" : "")} data-sort="ascending" onClick={props.onSortByClick}>A-Z</button>
      </div>
      <div className="show-filter-form__layout-buttons">
        <span>
          Layout:
        </span>
        <div className="divider">
          <button aria-label="Display in grid layout" className={ "btn icon-pbs-grid " + (props.layout === "grid" ? "selected-btn" : "")} data-layout="grid" onClick={props.onLayoutClick}></button>
        </div>
          <button aria-label="Display in list layout" className={ "btn icon-pbs-menu-hamburger " + (props.layout === "list" ? "selected-btn" : "") } data-layout="list" onClick={props.onLayoutClick}></button>
      </div>
    </div>

    <div className="row">

      <div className="col-lg-3 col-md-3 col-sm-5">
        <div className="form-group has-feedback">
          <label className="control-label" htmlFor="showTitleFilter">Filter By Title:</label>
          <input type="text" title="Filter shows by title" className="form-control" id="showTitleFilter" value={props.title} onKeyPress={props.onTitleKeypressed} onChange={props.onTitleChange} />
          <i className="icon-pbs-search form-control-feedback"></i>
        </div>
      </div>

      <div className="col-lg-3  col-md-3  col-sm-4">
        <label className="show-filter-form__genre-label" htmlFor="showGenreFilter">Filter By Genre:</label>
          <div className="styled-select" id="showGenreFilter">
            <select value={props.genreSelectVal} onChange={props.onGenreSelectChange}>
            {props.genreList.map(function (genre, index) {
              return <option key={index} value={genre.id}>{genre.title}</option>
            })}
            </select>
          </div>
      </div>

      <div className="col-lg-3 col-md-3 col-sm-3 station-search">
        {(props.localStation)?
        <label>
          <p>Filter By Source:</p>
          <div className="station-selector">
            <input type="checkbox" role="checkbox" aria-checked={props.stationBool} onChange={props.onStationCheckboxChange} checked={props.stationBool} />
            <div className="station-name">{stationCopy}</div>
          </div>
        </label>
        : null}
      </div>

      <div className="col-lg-3 col-md-3 hidden-sm hidden-xs large-filters">
        <div className="divider">
          <span>
            Sort By:
          </span>
          <button aria-label="Sort by most popular" className={"btn "  + (props.sortBy === "popular" ? "selected-btn" : "")} data-sort="popular" onClick={props.onSortByClick}>Popular</button>
          <button aria-label="Sort alphabetically" className={"btn "  + (props.sortBy === "ascending" ? "selected-btn" : "")} data-sort="ascending" onClick={props.onSortByClick}>A-Z</button>
        </div>
        <div className="show-filter-form__layout-buttons">
          <span>
            Layout:
          </span>
          <button aria-label="Display in grid layout" className={ "btn icon-pbs-grid " + (props.layout === "grid" ? "selected-btn" : "")} data-layout="grid" onClick={props.onLayoutClick}></button>
          <button aria-label="Display in list layout" className={ "btn icon-pbs-menu-hamburger " + (props.layout === "list" ? "selected-btn" : "") } data-layout="list" onClick={props.onLayoutClick}></button>
        </div>
      </div>
      <div className="clearfix visible-sm-block"></div>
    </div>

    <div className="hidden-lg hidden-md sorting-options">
      <div className="divider hidden-xs" >
        <span>
          Sort By:
        </span>
          <button aria-label="Sort by most popular" className={"btn "  + (props.sortBy === "popular" ? "selected-btn" : "")} data-sort="popular" onClick={props.onSortByClick}>Popular</button>
          <button aria-label="Sort alphabetically" className={"btn "  + (props.sortBy === "ascending" ? "selected-btn" : "")} data-sort="ascending" onClick={props.onSortByClick}>A-Z</button>
      </div>

      <div className="hidden-xs">
        <span>
          Layout:
        </span>
        <button aria-label="Display in grid layout" className={ "btn icon-pbs-grid " + (props.layout === "grid" ? "selected-btn" : "")} data-layout="grid" onClick={props.onLayoutClick}></button>
        <button aria-label="Display in list layout" className={ "btn icon-pbs-menu-hamburger " + (props.layout === "list" ? "selected-btn" : "") } data-layout="list" onClick={props.onLayoutClick}></button>
      </div>
    </div>
  </form>;
  };

module.exports = FilterBar;
