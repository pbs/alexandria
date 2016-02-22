'use strict';

let React = window.React || require('react'),
  ImageWithFallback = require('../../../global/react-image-with-fallback'),
  ResultsFeaturedArticleRelated = require('./search-results-featured-article-related'),
  ResultsFeaturedArticle;

ResultsFeaturedArticle = React.createClass({

  /**
   * Returns the initial state before the component is mounted.
   * @returns {Object} - initial state object
   */
  getInitialState() {
    return {
      hasBrokenImage: false
    };
  },

  /**
   * Update broken image with css fallback.
   * @param {Boolean} - boolean if image is broken
   */
  onBrokenImage(brokenImageBool) {

    this.setState({hasBrokenImage: brokenImageBool});

  },

  render: function () {
    var articles = [],
      latestEpisodesView,
      linkClasses = 'search-results-featured-article__poster-link';

    if (this.props.content.length > 0) {
      // build all the search result articles;
      this.props.content[0].episodes.map(function (data) {
        articles.push(<ResultsFeaturedArticleRelated key={ data.title } content={ data } heavyTraffic={this.props.heavyTraffic} />);
      }, this);

      latestEpisodesView = this.getLatestEpisodes(articles);

      if (this.state.hasBrokenImage === true) {
        linkClasses += ' fallback-image__container fallback-image__container--blue';
      }

      return (
        <article className="search-results-featured-article">
          <div className="row">
            <div className="col-md-4 hidden-xs hidden-sm featured-article-poster">
              <a href={ this.props.content[0].url } className={linkClasses}>
                <ImageWithFallback
                  customClass="img-responsive"
                  isBroken={this.state.hasBrokenImage}
                  onBrokenImage={this.onBrokenImage}
                  path={this.props.content[0].image}
                  crop=".crop.245x380.jpg"
                  textOverlay={false} />
              </a>
            </div>
            <div className="col-xs-12 col-md-8">
              <div className="article-body">
                <div className="row">
                  <div className="col-xs-12 featured-title">
                    <h1>
                      <a href={ this.props.content[0].url }>
                        { this.props.content[0].title }
                      </a>
                    </h1>
                    <p className="sub-title">{ this.props.content[0].broadcast_info }</p>
                  </div>
                  <div className="col-xs-12 col-sm-8 col-md-12 col-lg-8 description-container">
                    <p className="description" dangerouslySetInnerHTML={{__html:this.props.content[0].description}}>
                    </p>
                    <p className="view-all">
                      <a href={ this.props.content[0].url }>See All Videos</a>
                    </p>
                  </div>
                </div>
                { latestEpisodesView }
              </div>
            </div>
          </div>
        </article>
      );
    } else {
      return null;
    }
  },
  getLatestEpisodes(articles) {
    if (articles.length > 0) {
      return <section>
        <h1 className="section-title"><span className="hidden-xs">Watch </span>Latest Episodes</h1>
        <div className="row">
          { articles }
        </div>
      </section>;
    }
  }
});


module.exports = ResultsFeaturedArticle;
