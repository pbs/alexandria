var jQuery = window.jQuery = require("jquery");
require("../../scripts/jquery.pbs.ads.js");

(function (window, $) {

  // listen for clicks to the close button and remove ad
  $('body').on('click', '#close-adhesion-ad', function() {
    PBS.Ads.closeAd();
    return false;
  });

  var screenWidth = window.innerWidth,
      newScreenWidth = 0;

  // if user rotates device orientation and crosses the 768px breakpoint, ad should disappear
  $(window).resize(function() {
    newScreenWidth = window.innerWidth;
    if (((screenWidth <= 768) && (newScreenWidth > 768)) || ((screenWidth > 768) && (newScreenWidth <= 768))) {
      PBS.Ads.closeAd();
     }
    screenWidth = newScreenWidth;
  });

}(window, jQuery));
