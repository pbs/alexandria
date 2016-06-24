var
  jQuery = window.jQuery = require("jquery"),
  PBS = require("../../scripts/_pbs");

//require("slick-carousel"); // jQuery carousel plugin;
require("picturefill");    // responsive image processor

jQuery(($) => {
  var $window = $(window);

  // loop through each carousel (we might have more than one on the page);
  $("section.promoted-show").each(function () {
    var $section, settings, fixHeights;

    $section = $(this);
    // init the responsive images plugin;
    window.picturefill();

    // init social module;

  })
});
