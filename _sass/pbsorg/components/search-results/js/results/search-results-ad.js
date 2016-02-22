'use strict';

let React = window.React || require('react'),
  ResultsAd;

ResultsAd = React.createClass({
  componentDidMount: function () {
    googletag.defineSlot( window.PBS.GOOGLE_DFP_DESKTOP + 'searchresults_main', [[300, 250], [300, 600]], 'medium-rectangle-half-page').
        setCollapseEmptyDiv(true).
        addService(googletag.pubads());
    googletag.cmd.push(function() {googletag.display('medium-rectangle-half-page');});
  },
  render: function() {
    return (
      <div className="ad ad--medium-rectangle-half-page">
        <div id="medium-rectangle-half-page" className="ad__wrapper">
          <div className="ad__explanation">
            <p className="ad__explanation__text">Providing Support for PBS.org</p>
            <p className="ad__explanation__link">
              <a href="http://help.pbs.org/support/solutions/articles/5000677869" target="_blank">Learn more</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ResultsAd;
