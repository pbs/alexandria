'use strict';

let React = window.React || require('react'),
  ShopItem = require('./search-results-shop-item'),
  ShopItems;

ShopItems = React.createClass({
  render: function() {
    var items = [];

    this.props.content.items.map(function (item) {
      var item = <ShopItem key={ item.id } content={ item } />;
      items.push(item);
    }, this);

    return (
        <div className="right-rail-container">
          <div className="row shop-logo-row">
            <div className="shop-logo-row__logo"><img className="img-logo" src={this.props.content.logo} alt="Shop" /></div>
            <p className="view-all hidden-xs hidden-sm">
              <a href={this.props.content.shop_url} target="_blank">See All</a>
            </p>
          </div>
          <div className="row shopItem-row">
            { items }
          </div>
          <p className="visit-shop visible-xs visible-sm">
            <a className="btn" href={this.props.content.shop_url}>Visit PBS Shop</a>
          </p>
        </div>
    )
  }
});

module.exports = ShopItems;
