'use strict';

import jQuery from 'jquery';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Modal from '../modal/modal';
import * as SignInModal from '../sign-in/sign-in';


const NoList = React.createClass({

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
      modalTrigger: '.viewing-history__cta-btn',
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

    let headerText = 'You need to be signed in to see your viewing history';
    let descriptionText = <button className='viewing-history__cta-btn' aria-haspopup='true' onClick={this.onClickProfileSignIn}>Sign in or create an account now</button>;
    const imagePath = window.PBS_STATIC_URL + 'images/empty/viewing-history.png';

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
              <div className="viewing-history__cta-text signed-in-text">
                <h1 className="viewing-history__cta-header">{headerText}</h1>
                <p className="viewing-history__cta-description">{descriptionText}</p>
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

module.exports = NoList;

