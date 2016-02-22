var jQuery = window.jQuery = require("jquery");
// responsive image processor, and its handlebars helper;
require("picturefill");

jQuery(($) => {
  $("section.store-featured").each(function () {
    var $section = $(this);

    // init the responsive images plugin;
    window.picturefill({
      "elements": $section.find("img[srcset]").get()
    });
  });
});
