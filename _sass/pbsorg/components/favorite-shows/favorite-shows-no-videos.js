'use strict';

import jQuery from 'jquery';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Modal from '../modal/modal';
import * as SignInModal from '../sign-in/sign-in';

const NoFavorites = React.createClass({

  signInModal: undefined,

  /**
   * Array of any mixin libraries for react
   */
  mixins: [PureRenderMixin],

  /**
   * After component is rendered to DOM.
   */
  componentDidMount() {
    const options = {
      modalId: '#loginModalWindow',
      modalTrigger: '.favorites__cta-btn',
      focusTarget: '#modal-login__dialog',
      childView: SignInModal
    };

    this.signInModal = new Modal(options);
  },

  /**
   * Renders component.
   */
  render() {

    const content = this.getView();

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

    let headerText = 'You need to be signed in to add shows to your Favorites.';
    let descriptionText = <button className='favorites__cta-btn' aria-haspopup='true' onClick={this.onClickProfileSignIn}>Sign in or create an account now</button>;
    const imagePath = window.PBS_STATIC_URL + 'images/empty/favorites.png';

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
  onClickProfileSignIn(e) {
    e.preventDefault();

    if (this.signInModal) {
      this.signInModal.show();
    }

  }

});

module.exports = NoFavorites;

