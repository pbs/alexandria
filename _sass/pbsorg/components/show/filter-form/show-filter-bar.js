'use strict';

let FilterBar = (props) => {

  let stationCopy = 'Only ' + props.localStation + ' Shows';

  return <form action="#">
    <div className="row visible-xs top-sort-row">
      <div className="sort-buttons">
        <span>
          Sort By:
        </span>
        <div className="divider">
          <a className={"btn "  + (props.sortBy === "popular" ? "selected-btn" : "")} data-sort="popular" onClick={props.onSortByClick}>Popular</a>
        </div>
          <a className={"btn "  + (props.sortBy === "ascending" ? "selected-btn" : "")} data-sort="ascending" onClick={props.onSortByClick}>A-Z</a>
      </div>
      <div className="show-filter-form__layout-buttons">
        <span>
          Layout:
        </span>
        <div className="divider">
          <a className={ "btn icon-pbs-grid " + (props.layout === "grid" ? "selected-btn" : "")} data-layout="grid" onClick={props.onLayoutClick}></a>
        </div>
          <a className={ "btn icon-pbs-menu-hamburger " + (props.layout === "list" ? "selected-btn" : "") } data-layout="list" onClick={props.onLayoutClick}></a>
      </div>
    </div>

    <div className="row">

      <div className="col-lg-3 col-md-3 col-sm-5">
        <div className="form-group has-feedback">
          <label className="control-label">Filter By Title:</label>
          <input type="text" className="form-control" value={props.title} onKeyPress={props.onTitleKeypressed} onChange={props.onTitleChange} />
          <i className="icon-pbs-search form-control-feedback"></i>
        </div>
      </div>

      <div className="col-lg-3  col-md-3  col-sm-4">
        <label>
          Filter By Genre:
          <div className="styled-select">
            <select value={props.genreSelectVal} onChange={props.onGenreSelectChange}>
            {props.genreList.map(function (genre, index) {
              return <option key={index} value={genre.id}>{genre.title}</option>
            })}
            </select>
          </div>
        </label>
      </div>

      <div className="col-lg-3 col-md-3 col-sm-3 station-search">
        {(props.localStation)?
        <label>
          <p>Filter By Source:</p>
          <input type="checkbox" onChange={props.onStationCheckboxChange} checked={props.stationBool} />
          <div className="station-name">{stationCopy}</div>
        </label>
        : null}
      </div>

      <div className="clearfix visible-sm-block hidden-md"></div>

      <div className="col-lg-3 col-md-3 hidden-sm hidden-xs large-filters">
        <div className="divider">
          <label>
            Sort By:
          </label>
          <a className={"btn "  + (props.sortBy === "popular" ? "selected-btn" : "")} data-sort="popular" onClick={props.onSortByClick}>Popular</a>
          <a className={"btn "  + (props.sortBy === "ascending" ? "selected-btn" : "")} data-sort="ascending" onClick={props.onSortByClick}>A-Z</a>
        </div>
        <div className="show-filter-form__layout-buttons">
          <span>
            Layout:
          </span>
          <a className={ "btn icon-pbs-grid " + (props.layout === "grid" ? "selected-btn" : "")} data-layout="grid" onClick={props.onLayoutClick}></a>
          <a className={ "btn icon-pbs-menu-hamburger " + (props.layout === "list" ? "selected-btn" : "") } data-layout="list" onClick={props.onLayoutClick}></a>
        </div>
      </div>
      <div className="clearfix visible-sm-block"></div>
    </div>

    <div className="hidden-lg hidden-md sorting-options">
      <div className="divider hidden-xs" >
        <span>
          Sort By:
        </span>
          <a className={"btn "  + (props.sortBy === "popular" ? "selected-btn" : "")} data-sort="popular" onClick={props.onSortByClick}>Popular</a>
          <a className={"btn "  + (props.sortBy === "ascending" ? "selected-btn" : "")} data-sort="ascending" onClick={props.onSortByClick}>A-Z</a>
      </div>

      <div className="hidden-xs">
        <span>
          Layout:
        </span>
        <a className={ "btn icon-pbs-grid " + (props.layout === "grid" ? "selected-btn" : "")} data-layout="grid" onClick={props.onLayoutClick}></a>
        <a className={ "btn icon-pbs-menu-hamburger " + (props.layout === "list" ? "selected-btn" : "") } data-layout="list" onClick={props.onLayoutClick}></a>
      </div>
    </div>
  </form>;
  };

module.exports = FilterBar;
