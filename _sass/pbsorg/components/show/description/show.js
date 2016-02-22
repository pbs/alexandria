var jQuery = window.jQuery = require("jquery");
// include button animations;
require("../../button/button");

jQuery(($) => {
  // add REL attributes to funder links so they open in a new window;
  $("article.show-description div.funding a").attr("rel", "external");
});
