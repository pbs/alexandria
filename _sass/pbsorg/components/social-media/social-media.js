var
  jQuery = window.jQuery = require("jquery"),
  PBS                 = require("../../scripts/_pbs");

jQuery(($) => {
  var $window = $(window);

  $(".tweets-container").each(function () {
    // init the carousel;
    $(this).slick({
      "autoplay": true,
      "autoplaySpeed": 7000,
      "arrows": false,
      "fade": true,
      "speed": 800
    });
  });

});
