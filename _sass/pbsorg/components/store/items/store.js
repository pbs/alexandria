var
  jQuery = window.jQuery = require("jquery"),
  PBS = require("../../../scripts/_pbs");

// include button animations;
require("../../button/button");

// responsive image processor;
require("picturefill");

jQuery(($) => {

  $("section.store-items").each(function () {
    var $section = $(this);

    // init the responsive images plugin;
    window.picturefill({
      "elements": $section.find("img[srcset]").get()
    });
  });
});
