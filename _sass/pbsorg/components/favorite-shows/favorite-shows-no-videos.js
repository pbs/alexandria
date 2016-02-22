let
  jQuery = window.jQuery || require('jquery'),
  React = window.React || require('react'),
  ReactDOM = window.ReactDOM || require('react-dom'),
  PureRenderMixin = React.addons.PureRenderMixin,
  NoFavorites;

NoFavorites = React.createClass({

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
      <section className="no-favorites">
        {content}
      </section>
    );

  },

  /**
   * Gets appropriate no videos view
   * @returns {React element|undefined}
   */
  getView() {

    let headerText = 'You need to be signed in to add shows to your Favorites.',
      descriptionText = <a href="#" onClick={this.onClickProfileSignIn}>Sign in or create an account now</a>,
      imagePath = window.PBS_STATIC_URL + 'images/empty/favorites.png';

    // only display something if we know it has been attempted to fetch
    // this is to prevent the wrong screen from being shown for a flash
    if (this.props.fetched) {

      // if we have videos, don't show anything
      if (this.props.videos.length > 0) {
        return;
      }

      // if they are logged in, update the text
      if (this.props.loggedIn) {
        headerText = 'You haven\'t added any shows to your Favorites.';
        descriptionText = 'Favorite the shows you like by using the "Add to Favorites" button or the text box above. Return here to browse each show\'s most recent videos.';
      }

      return <section className="empty l-container__inner">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
            <div className="body">
              <img className="img-responsive" src={imagePath} alt="No favorites yet" />
              <div className="favorites__cta-text signed-in-text">
                <h1 className="favorites__cta-header signed-out-announcement">{headerText}</h1>
                <p className="favorites__cta-description">{descriptionText}</p>
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
      window.PBS.Profile.signIn('LINK', 'Home', 'sign-in', window.location.href);
    }

  }

});

module.exports = NoFavorites;

