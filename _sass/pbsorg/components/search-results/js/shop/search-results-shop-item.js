'use strict';

let React = window.React || require('react'),
  ShopItem;

ShopItem = React.createClass({
  render: function() {
    return (
        <article className="shopItem">
          <a href={this.props.content.URI} target="_blank">
            <img src={this.props.content.image_url} alt={this.props.content.title}/>
            <p className="shopItem__title">{this.props.content.title}</p>
          </a>
        </article>
    )
  }
});

module.exports = ShopItem;
