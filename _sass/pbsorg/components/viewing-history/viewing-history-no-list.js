let
  jQuery = window.jQuery || require('jquery'),
  React = window.React || require('react'),
  ReactDOM = window.ReactDOM || require('react-dom'),
  PureRenderMixin = React.addons.PureRenderMixin,
  NoList;

NoList = React.createClass({

  /**
   * Array of any mixin libraries for react
   */
  mixins: [PureRenderMixin],

  /**
   * Renders component.
   */
  render() {

    let content = this.getView();

    return (
      <section className="no-list">
        {content}
      </section>
    );

  },

  /**
   * Gets appropriate no video view
   * @returns {React element|undefined}
   */
  getView() {

    let headerText = 'You need to be signed in to see your viewing history',
      descriptionText = <a href="#" onClick={this.onClickProfileSignIn}>Sign in or create an account now</a>,
      imagePath = window.PBS_STATIC_URL + 'images/empty/viewing-history.png';

    // only display something if we know it has been attempted to fetch
    // this is to prevent the wrong scren from being show for a flash
    if (this.props.fetched || !this.props.loggedIn) {

      // if we have videos, don't show anything
      if (this.props.videos.length > 0) {
        return;
      }

      // if they are logged in, update the text
      if (this.props.loggedIn) {
        headerText = 'You haven\'t watched any videos since signing in.';
        descriptionText = 'We\'ll keep track of every video you watch and list them here.';
      }

      return <section className="empty l-container__inner">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
            <div className="body">
              <img className="img-responsive" src={imagePath} alt="No viewing history yet" />
              <div className="watchlist__cta-text signed-in-text">
                <h1 className="watchlist__cta-header">{headerText}</h1>
                <p className="watchlist__cta-description">{descriptionText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>;
    }
  },

  /**
   * Callback for it they click to sign in
   */
  onClickProfileSignIn() {

    if (window.PBS && window.PBS.Profile) {
      window.PBS.Profile.signIn();
    }

  }

});

module.exports = NoList;

