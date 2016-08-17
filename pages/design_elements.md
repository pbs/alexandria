---
layout: page
title: Design Elements
permalink: /design-elements/
---

- [Colors](#colors)
- [Type](#type)
- [Icons](#icons)
- [Buttons](#buttons)
- [Forms](#forms)

* * *

## Colors

* * *

[Here is a Sass variables file](https://gist.github.com/chipcullen/571fb02d2f21bd605dc991cb99b63d43) containing the below palette.

### Neutrals

<div class="swatch-group">
  <div class="swatch" style="background-color: #000000; color: #ffffff;">
  $gray-100: #000000<br />rgb(0, 0, 0)<br />hsl(0, 0%, 0%)<br />(for shadows)
  </div>
  <div class="swatch" style="background-color: #222222; color: #ffffff;">
  $gray-87: #222222<br />rgb(34, 34, 34)<br />hsl(0, 0%, 13%)
  </div>
  <div class="swatch" style="background-color: #4b4b4b; color: #ffffff;">
  $gray-71: #4b4b4b<br />rgb(75, 75, 75)<br />hsl(0, 0%, 29%)
  </div>
  <div class="swatch" style="background-color: #707070; color: #ffffff;">
  $gray-56: #707070<br />rgb(112, 112, 112)<br />hsl(0, 0%, 44%)
  </div>
  <div class="swatch" style="background-color: #b3b3b3;">
  $gray-30: #b3b3b3<br />rgb(179, 179, 179)<br />hsl(0, 0%, 70%)
  </div>
  <div class="swatch" style="background-color: #e0e0e0;">
  $gray-12: #e0e0e0<br />rgb(224, 224, 224)<br />hsl(0, 0%, 88%) <br />(aka $divider)
  </div>
  <div class="swatch" style="background-color: #f3f3f3;">
  $gray-5: #f3f3f3<br />rgb(243, 243, 243)<br />hsl(0, 0%, 95%)
  </div>
  <div class="swatch" style="background-color: #f8f8f8;">
  $gray-3: #f8f8f8<br />rgb(248, 248, 248)<br />hsl(0, 0%, 97%)
  </div>
  <div class="swatch" style="background-color: #ffffff;">
  $gray-0: #ffffff<br />rgb(255, 255, 255)<br />hsl(0, 0%, 100%)
  </div>
</div>

### Hues

We have a collection of eight 'pure' hues. Using the pure hues whenever possible is encouraged.

However, if there is a situation where there is not sufficient contrast, tints of 10% and 20%, both in darkening and lightening, are allowed.

In Sass, these colors should be acheived using the `mix` function with the hue and `$gray-0` or `$gray-100`, *not* the default `darken` or `lighten` function.

Tints can be acheived in design software by overlaying the pure hue with a layer of white or black, set to 10% or 20% opacity.

<div class="swatch-group">
  <div class="swatch-tint-stack">
    <div class="swatch-tint" style="background-color: #0e5891; color: #ffffff;">$blue-digital-darken-20: #0e5891</div>
    <div class="swatch-tint" style="background-color: #1063a3; color: #ffffff;">$blue-digital-darken-10: #1063a3</div>
    <div class="swatch" style="background-color: #126eb5; color: #ffffff;">
    $blue-digital: #126eb5<br />rgb(18, 110, 181)<br />hsl(206, 82%, 39%)
    </div>
    <div class="swatch-tint" style="background-color: #2a7dbc; color: #ffffff;">$blue-digital-lighten-10: #2a7dbc</div>
    <div class="swatch-tint" style="background-color: #418bc4; color: #ffffff;">$blue-digital-lighten-20: #418bc4</div>
  </div>

  <div class="swatch-tint-stack">
    <div class="swatch-tint" style="background-color: #728596; color: #ffffff;">$blue-antique-darken-20: #728596</div>
    <div class="swatch-tint" style="background-color: #8195a9; color: #ffffff;">$blue-antique-darken-10: #8195a9</div>
    <div class="swatch" style="background-color: #8fa6bc;">
    $blue-antique: #8fa6bc<br />rgb(143, 166, 188)<br />hsl(209, 25%, 65%)
    </div>
    <div class="swatch-tint" style="background-color: #9aafc3; color: #000000;">$blue-antique-lighten-10: #9aafc3</div>
    <div class="swatch-tint" style="background-color: #a5b8c9; color: #000000;">$blue-antique-lighten-20: #a5b8c9</div>
  </div>

  <div class="swatch-tint-stack">
    <div class="swatch-tint" style="background-color: #0088bc; color: #ffffff;">$blue-brand-darken-20: #0088bc</div>
    <div class="swatch-tint" style="background-color: #0099d4; color: #ffffff;">$blue-brand-darken-10: #0099d4</div>
    <div class="swatch" style="background-color: #00aaeb;">
    $blue-brand: #00aaeb<br />rgb(0, 170, 235)<br />hsl(197, 100%, 46%)
    </div>
    <div class="swatch-tint" style="background-color: #1ab3ed; color: #000000;">$blue-brand-lighten-10: #1ab3ed</div>
    <div class="swatch-tint" style="background-color: #33bbef; color: #000000;">$blue-brand-lighten-20: #33bbef</div>
  </div>

  <div class="swatch-tint-stack">
    <div class="swatch-tint" style="background-color: #8a0219; color: #ffffff;">$red-darken-20: #8a0219</div>
    <div class="swatch-tint" style="background-color: #9b031c; color: #ffffff;">$red-darken-10: #9b031c</div>
    <div class="swatch" style="background-color: #ac031f; color: white;">
    $red: #ac031f<br />rgb(172, 3, 31)<br />hsl(350, 97%, 34%)
    </div>
    <div class="swatch-tint" style="background-color: #b41c35; color: #ffffff;">$red-lighten-10: #b41c35</div>
    <div class="swatch-tint" style="background-color: #bd354c; color: #ffffff;">$red-lighten-20: #bd354c</div>
  </div>

  <div class="swatch-tint-stack">
    <div class="swatch-tint" style="background-color: #ba9511; color: #ffffff;">$yellow-darken-20: #ba9511</div>
    <div class="swatch-tint" style="background-color: #d2a713; color: #000000;">$yellow-darken-10: #d2a713</div>
    <div class="swatch" style="background-color: #e9ba15;">
    $yellow: #e9ba15<br />rgb(233, 186, 21)<br />hsl(47, 83%, 50%)
    </div>
    <div class="swatch-tint" style="background-color: #ebc12c; color: #000000;">$yellow-lighten-10: #ebc12c</div>
    <div class="swatch-tint" style="background-color: #edc844; color: #000000;">$yellow-lighten-20: #edc844</div>
  </div>

  <div class="swatch-tint-stack">
    <div class="swatch-tint" style="background-color: #518204; color: #ffffff;">$green-darken-20: #518204</div>
    <div class="swatch-tint" style="background-color: #5b9205; color: #ffffff;">$green-darken-10: #5b9205</div>
    <div class="swatch" style="background-color: #65a205;">
    $green: #65a205<br />rgb(101, 162, 5)<br />hsl(83, 94%, 33%)
    </div>
    <div class="swatch-tint" style="background-color: #74ab1e; color: #000000;">$green-lighten-10: #74ab1e</div>
    <div class="swatch-tint" style="background-color: #84b537; color: #000000;">$green-lighten-20: #84b537</div>
  </div>

  <div class="swatch-tint-stack">
    <div class="swatch-tint" style="background-color: #a51e4a; color: #ffffff;">$magenta-darken-20: #a51e4a</div>
    <div class="swatch-tint" style="background-color: #b92154; color: #ffffff;">$magenta-darken-10: #b92154</div>
    <div class="swatch" style="background-color: #ce255d; color: #ffffff;">
    $magenta: #ce255d<br />rgb(206, 37, 93)<br />hsl(340, 70%, 48%)
    </div>
    <div class="swatch-tint" style="background-color: #d33b6d; color: #ffffff;">$magenta-lighten-10: #d33b6d</div>
    <div class="swatch-tint" style="background-color: #d8517d; color: #ffffff;">$magenta-lighten-20: #d8517d</div>
  </div>

  <div class="swatch-tint-stack">
    <div class="swatch-tint" style="background-color: #be5a01; color: #ffffff;">$orange-darken-20: #be5a01</div>
    <div class="swatch-tint" style="background-color: #d66601; color: #ffffff;">$orange-darken-10: #d66601</div>
    <div class="swatch" style="background-color: #EE7101; color: #ffffff;">
    $orange: #EE7101<br />rgb(238, 113, 1)<br />hsl(28, 99%, 47%)
    </div>
    <div class="swatch-tint" style="background-color: #f07f1a; color: #ffffff;">$orange-lighten-10: #f07f1a</div>
    <div class="swatch-tint" style="background-color: #f18d34; color: #ffffff;">$orange-lighten-20: #f18d34</div>
  </div>

</div>

### Color Combinations

We strive to meet [WCAG 2.0 color contrast ratios](https://www.w3.org/TR/WCAG20-TECHS/G18.html) to ensure accessibility. These are solid backgrounds with neutral text on top, with indications of what passes the required contrast ratios.

- <i class="icon-pbs-checkmark"></i> passes for all type sizes;
- <strong class="icon">&#9888;</strong> passes for large type sizes (above 18px or 14px/bold);
- <i class="icon-pbs-remove"></i> fails at all sizes

<button class="btn btn--min" id="contrast-swatch-toggle">Show Only Passing Combinations</button>

#### Neutrals

<div class="contrast-table">
  <div class="contrast-table__group">
    <h4>$gray-87</h4>
    <div class="contrast-table__swatch" style="background: #222222; color: #222222;">$gray-87 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #222222; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #222222; color: #707070;">$gray-56 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #222222; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #222222; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #222222; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #222222; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #222222; color: #ffffff;">$gray-0 text <i class="icon-pbs-checkmark"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$gray-71</h4>
    <div class="contrast-table__swatch" style="background: #4b4b4b; color: #222222;">$gray-87 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #4b4b4b; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #4b4b4b; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #4b4b4b; color: #b3b3b3;">$gray-30 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #4b4b4b; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #4b4b4b; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #4b4b4b; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #4b4b4b; color: #ffffff;">$gray-0 text <i class="icon-pbs-checkmark"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$gray-56</h4>
    <div class="contrast-table__swatch" style="background: #707070; color: #222222;">$gray-87 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #707070; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #707070; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #707070; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #707070; color: #e0e0e0;">$gray-12 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #707070; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #707070; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #707070; color: #ffffff;">$gray-0 text <i class="icon-pbs-checkmark"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$gray-30</h4>
    <div class="contrast-table__swatch" style="background: #b3b3b3; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #b3b3b3; color: #4b4b4b;">$gray-71 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #b3b3b3; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #b3b3b3; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #b3b3b3; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #b3b3b3; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #b3b3b3; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #b3b3b3; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$gray-12</h4>
    <div class="contrast-table__swatch" style="background: #e0e0e0; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #e0e0e0; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #e0e0e0; color: #707070;">$gray-56 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #e0e0e0; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #e0e0e0; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #e0e0e0; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #e0e0e0; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #e0e0e0; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$gray-5</h4>
    <div class="contrast-table__swatch" style="background: #f3f3f3; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #f3f3f3; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #f3f3f3; color: #707070;">$gray-56 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #f3f3f3; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #f3f3f3; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #f3f3f3; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #f3f3f3; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #f3f3f3; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$gray-3</h4>
    <div class="contrast-table__swatch" style="background: #f8f8f8; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #f8f8f8; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #f8f8f8; color: #707070;">$gray-56 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #f8f8f8; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #f8f8f8; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #f8f8f8; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #f8f8f8; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #f8f8f8; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$gray-0</h4>
    <div class="contrast-table__swatch" style="background: #ffffff; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #ffffff; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #ffffff; color: #707070;">$gray-56 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #ffffff; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ffffff; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ffffff; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ffffff; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ffffff; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>
</div>

#### Hues

<label for="tint-selector">Show</label>

<select name="tint-selector" id="tint-selector">
  <option value="contrast-hues-darken-20">Darken 20%</option>
  <option value="contrast-hues-darken-10">Darken 10%</option>
  <option value="contrast-hues-pure" selected>Pure Hue</option>
  <option value="contrast-hues-lighten-10">Lighten 10%</option>
  <option value="contrast-hues-lighten-20">Lighten 20%</option>
</select>

<div class="contrast-table contrast-table--hue" id="contrast-hues-pure">
  <div class="contrast-table__group">
    <h4>$blue-digital</h4>
    <div class="contrast-table__swatch" style="background: #126eb5; color: #222222;">$gray-87 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #126eb5; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #126eb5; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #126eb5; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #126eb5; color: #e0e0e0;">$gray-12 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #126eb5; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #126eb5; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #126eb5; color: #ffffff;">$gray-0 text <i class="icon-pbs-checkmark"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$blue-antique</h4>
    <div class="contrast-table__swatch" style="background: #8fa6bc; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #8fa6bc; color: #4b4b4b;">$gray-71 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #8fa6bc; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #8fa6bc; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #8fa6bc; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #8fa6bc; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #8fa6bc; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #8fa6bc; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$blue-brand</h4>
    <div class="contrast-table__swatch" style="background: #00aaeb; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #00aaeb; color: #4b4b4b;">$gray-71 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #00aaeb; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #00aaeb; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #00aaeb; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #00aaeb; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #00aaeb; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #00aaeb; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$red</h4>
    <div class="contrast-table__swatch" style="background: #ac031f; color: #222222;">$gray-87 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ac031f; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ac031f; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ac031f; color: #b3b3b3;">$gray-30 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #ac031f; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #ac031f; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #ac031f; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #ac031f; color: #ffffff;">$gray-0 text <i class="icon-pbs-checkmark"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$yellow</h4>
    <div class="contrast-table__swatch" style="background: #e9ba15; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #e9ba15; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #e9ba15; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #e9ba15; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #e9ba15; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #e9ba15; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #e9ba15; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #e9ba15; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$green</h4>
    <div class="contrast-table__swatch" style="background: #65a205; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #65a205; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #65a205; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #65a205; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #65a205; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #65a205; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #65a205; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #65a205; color: #ffffff;">$gray-0 text <strong class="icon">&#9888;</strong></div>
  </div>

  <div class="contrast-table__group">
    <h4>$magenta</h4>
    <div class="contrast-table__swatch" style="background: #ce255d; color: #222222;">$gray-87 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ce255d; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ce255d; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ce255d; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ce255d; color: #e0e0e0;">$gray-12 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #ce255d; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #ce255d; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #ce255d; color: #ffffff;">$gray-0 text <i class="icon-pbs-checkmark"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$orange</h4>
    <div class="contrast-table__swatch" style="background: #EE7101; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #EE7101; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #EE7101; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #EE7101; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #EE7101; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #EE7101; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #EE7101; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #EE7101; color: #ffffff;">$gray-0 text <strong class="icon">&#9888;</strong></div>
  </div>
</div>

<div class="contrast-table contrast-table--hue is-hidden" id="contrast-hues-darken-20">
  <div class="contrast-table__group">
    <h4>$blue-digital-darken-20</h4>
    <div class="contrast-table__swatch" style="background: #0e5891; color: #222222;">$gray-87 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #0e5891; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #0e5891; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #0e5891; color: #b3b3b3;">$gray-30 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #0e5891; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #0e5891; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #0e5891; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #0e5891; color: #ffffff;">$gray-0 text <i class="icon-pbs-checkmark"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$blue-antique-darken-20</h4>
    <div class="contrast-table__swatch" style="background: #728596; color: #222222;">$gray-87 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #728596; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #728596; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #728596; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #728596; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #728596; color: #f3f3f3;">$gray-5 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #728596; color: #f8f8f8;">$gray-3 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #728596; color: #ffffff;">$gray-0 text <strong class="icon">&#9888;</strong></div>
  </div>

  <div class="contrast-table__group">
    <h4>$blue-brand-darken-20</h4>
    <div class="contrast-table__swatch" style="background: #0088bc; color: #222222;">$gray-87 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #0088bc; color: #4b4b4b;">$gray-71 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #0088bc; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #0088bc; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #0088bc; color: #e0e0e0;">$gray-12 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #0088bc; color: #f3f3f3;">$gray-5 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #0088bc; color: #f8f8f8;">$gray-3 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #0088bc; color: #ffffff;">$gray-0 text <strong class="icon">&#9888;</strong></div>
  </div>

  <div class="contrast-table__group">
    <h4>$red-darken-20</h4>
    <div class="contrast-table__swatch" style="background: #8a0219; color: #222222;">$gray-87 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #8a0219; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #8a0219; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #8a0219; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #8a0219; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #8a0219; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #8a0219; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #8a0219; color: #ffffff;">$gray-0 text <i class="icon-pbs-checkmark"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$yellow-darken-20</h4>
    <div class="contrast-table__swatch" style="background: #ba9511; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #ba9511; color: #4b4b4b;">$gray-71 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #ba9511; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ba9511; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ba9511; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ba9511; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ba9511; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ba9511; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$green-darken-20</h4>
    <div class="contrast-table__swatch" style="background: #518204; color: #222222;">$gray-87 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #518204; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #518204; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #518204; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #518204; color: #e0e0e0;">$gray-12 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #518204; color: #f3f3f3;">$gray-5 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #518204; color: #f8f8f8;">$gray-3 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #518204; color: #ffffff;">$gray-0 text <i class="icon-pbs-checkmark"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$magenta-darken-20</h4>
    <div class="contrast-table__swatch" style="background: #a51e4a; color: #222222;">$gray-87 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #a51e4a; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #a51e4a; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #a51e4a; color: #b3b3b3;">$gray-30 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #a51e4a; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #a51e4a; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #a51e4a; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #a51e4a; color: #ffffff;">$gray-0 text <i class="icon-pbs-checkmark"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$orange-darken-20</h4>
    <div class="contrast-table__swatch" style="background: #be5a01; color: #222222;">$gray-87 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #be5a01; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #be5a01; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #be5a01; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #be5a01; color: #e0e0e0;">$gray-12 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #be5a01; color: #f3f3f3;">$gray-5 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #be5a01; color: #f8f8f8;">$gray-3 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #be5a01; color: #ffffff;">$gray-0 text <i class="icon-pbs-checkmark"></i></div>
  </div>
</div>

<div class="contrast-table contrast-table--hue is-hidden" id="contrast-hues-darken-10">
  <div class="contrast-table__group">
    <h4>$blue-digital-darken-10</h4>
    <div class="contrast-table__swatch" style="background: #1063a3; color: #222222;">$gray-87 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #1063a3; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #1063a3; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #1063a3; color: #b3b3b3;">$gray-30 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #1063a3; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #1063a3; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #1063a3; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #1063a3; color: #ffffff;">$gray-0 text <i class="icon-pbs-checkmark"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$blue-antique-darken-10</h4>
    <div class="contrast-table__swatch" style="background: #8195a9; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #8195a9; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #8195a9; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #8195a9; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #8195a9; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #8195a9; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #8195a9; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #8195a9; color: #ffffff;">$gray-0 text <strong class="icon">&#9888;</strong></div>
  </div>

  <div class="contrast-table__group">
    <h4>$blue-brand-darken-10</h4>
    <div class="contrast-table__swatch" style="background: #0099d4; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #0099d4; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #0099d4; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #0099d4; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #0099d4; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #0099d4; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #0099d4; color: #f8f8f8;">$gray-3 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #0099d4; color: #ffffff;">$gray-0 text <strong class="icon">&#9888;</strong></div>
  </div>

  <div class="contrast-table__group">
    <h4>$red-darken-10</h4>
    <div class="contrast-table__swatch" style="background: #9b031c; color: #222222;">$gray-87 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #9b031c; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #9b031c; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #9b031c; color: #b3b3b3;">$gray-30 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #9b031c; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #9b031c; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #9b031c; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #9b031c; color: #ffffff;">$gray-0 text <i class="icon-pbs-checkmark"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$yellow-darken-10</h4>
    <div class="contrast-table__swatch" style="background: #d2a713; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #d2a713; color: #4b4b4b;">$gray-71 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #d2a713; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #d2a713; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #d2a713; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #d2a713; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #d2a713; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #d2a713; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$green-darken-10</h4>
    <div class="contrast-table__swatch" style="background: #5b9205; color: #222222;">$gray-87 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #5b9205; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #5b9205; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #5b9205; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #5b9205; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #5b9205; color: #f3f3f3;">$gray-5 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #5b9205; color: #f8f8f8;">$gray-3 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #5b9205; color: #ffffff;">$gray-0 text <strong class="icon">&#9888;</strong></div>
  </div>

  <div class="contrast-table__group">
    <h4>$magenta-darken-10</h4>
    <div class="contrast-table__swatch" style="background: #b92154; color: #222222;">$gray-87 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #b92154; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #b92154; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #b92154; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #b92154; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #b92154; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #b92154; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #b92154; color: #ffffff;">$gray-0 text <i class="icon-pbs-checkmark"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$orange-darken-10</h4>
    <div class="contrast-table__swatch" style="background: #d66601; color: #222222;">$gray-87 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #d66601; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #d66601; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #d66601; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #d66601; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #d66601; color: #f3f3f3;">$gray-5 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #d66601; color: #f8f8f8;">$gray-3 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #d66601; color: #ffffff;">$gray-0 text <strong class="icon">&#9888;</strong></div>
  </div>
</div>

<div class="contrast-table contrast-table--hue is-hidden" id="contrast-hues-lighten-10">
  <div class="contrast-table__group">
    <h4>$blue-digital-lighten-10</h4>
    <div class="contrast-table__swatch" style="background: #2a7dbc; color: #222222;">$gray-87 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #2a7dbc; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #2a7dbc; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #2a7dbc; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #2a7dbc; color: #e0e0e0;">$gray-12 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #2a7dbc; color: #f3f3f3;">$gray-5 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #2a7dbc; color: #f8f8f8;">$gray-3 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #2a7dbc; color: #ffffff;">$gray-0 text <strong class="icon">&#9888;</strong></div>
  </div>

  <div class="contrast-table__group">
    <h4>$blue-antique-lighten-10</h4>
    <div class="contrast-table__swatch" style="background: #9aafc3; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #9aafc3; color: #4b4b4b;">$gray-71 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #9aafc3; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #9aafc3; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #9aafc3; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #9aafc3; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #9aafc3; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #9aafc3; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$blue-brand-lighten-10</h4>
    <div class="contrast-table__swatch" style="background: #1ab3ed; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #1ab3ed; color: #4b4b4b;">$gray-71 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #1ab3ed; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #1ab3ed; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #1ab3ed; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #1ab3ed; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #1ab3ed; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #1ab3ed; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$red-lighten-10</h4>
    <div class="contrast-table__swatch" style="background: #b41c35; color: #222222;">$gray-87 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #b41c35; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #b41c35; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #b41c35; color: #b3b3b3;">$gray-30 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #b41c35; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #b41c35; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #b41c35; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #b41c35; color: #ffffff;">$gray-0 text <i class="icon-pbs-checkmark"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$yellow-lighten-10</h4>
    <div class="contrast-table__swatch" style="background: #ebc12c; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #ebc12c; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #ebc12c; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ebc12c; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ebc12c; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ebc12c; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ebc12c; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ebc12c; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$green-lighten-10</h4>
    <div class="contrast-table__swatch" style="background: #74ab1e; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #74ab1e; color: #4b4b4b;">$gray-71 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #74ab1e; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #74ab1e; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #74ab1e; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #74ab1e; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #74ab1e; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #74ab1e; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$magenta-lighten-10</h4>
    <div class="contrast-table__swatch" style="background: #d33b6d; color: #222222;">$gray-87 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #d33b6d; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #d33b6d; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #d33b6d; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #d33b6d; color: #e0e0e0;">$gray-12 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #d33b6d; color: #f3f3f3;">$gray-5 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #d33b6d; color: #f8f8f8;">$gray-3 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #d33b6d; color: #ffffff;">$gray-0 text <i class="icon-pbs-checkmark"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$orange-lighten-10</h4>
    <div class="contrast-table__swatch" style="background: #f07f1a; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #f07f1a; color: #4b4b4b;">$gray-71 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #f07f1a; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #f07f1a; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #f07f1a; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #f07f1a; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #f07f1a; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #f07f1a; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>
</div>

<div class="contrast-table contrast-table--hue is-hidden" id="contrast-hues-lighten-20">
  <div class="contrast-table__group">
    <h4>$blue-digital-lighten-20</h4>
    <div class="contrast-table__swatch" style="background: #418bc4; color: #222222;">$gray-87 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #418bc4; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #418bc4; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #418bc4; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #418bc4; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #418bc4; color: #f3f3f3;">$gray-5 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #418bc4; color: #f8f8f8;">$gray-3 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #418bc4; color: #ffffff;">$gray-0 text <strong class="icon">&#9888;</strong></div>
  </div>

  <div class="contrast-table__group">
    <h4>$blue-antique-lighten-20</h4>
    <div class="contrast-table__swatch" style="background: #a5b8c9; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #a5b8c9; color: #4b4b4b;">$gray-71 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #a5b8c9; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #a5b8c9; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #a5b8c9; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #a5b8c9; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #a5b8c9; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #a5b8c9; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$blue-brand-lighten-20</h4>
    <div class="contrast-table__swatch" style="background: #33bbef; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #33bbef; color: #4b4b4b;">$gray-71 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #33bbef; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #33bbef; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #33bbef; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #33bbef; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #33bbef; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #33bbef; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$red-lighten-20</h4>
    <div class="contrast-table__swatch" style="background: #bd354c; color: #222222;">$gray-87 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #bd354c; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #bd354c; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #bd354c; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #bd354c; color: #e0e0e0;">$gray-12 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #bd354c; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #bd354c; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #bd354c; color: #ffffff;">$gray-0 text <i class="icon-pbs-checkmark"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$yellow-lighten-20</h4>
    <div class="contrast-table__swatch" style="background: #edc844; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #edc844; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #edc844; color: #707070;">$gray-56 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #edc844; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #edc844; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #edc844; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #edc844; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #edc844; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$green-lighten-20</h4>
    <div class="contrast-table__swatch" style="background: #84b537; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #84b537; color: #4b4b4b;">$gray-71 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #84b537; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #84b537; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #84b537; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #84b537; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #84b537; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #84b537; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$magenta-lighten-20</h4>
    <div class="contrast-table__swatch" style="background: #d8517d; color: #222222;">$gray-87 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #d8517d; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #d8517d; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #d8517d; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #d8517d; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #d8517d; color: #f3f3f3;">$gray-5 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #d8517d; color: #f8f8f8;">$gray-3 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #d8517d; color: #ffffff;">$gray-0 text <strong class="icon">&#9888;</strong></div>
  </div>

  <div class="contrast-table__group">
    <h4>$orange-lighten-20</h4>
    <div class="contrast-table__swatch" style="background: #f18d34; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #f18d34; color: #4b4b4b;">$gray-71 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #f18d34; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #f18d34; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #f18d34; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #f18d34; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #f18d34; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #f18d34; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>
</div>

<script>
// Provides the toggling to show only passing colors
var toggle = document.querySelector('#contrast-swatch-toggle');
var swatches = document.querySelectorAll('.contrast-table__swatch');

toggle.addEventListener('click', function() {

  if (toggle.classList.contains('toggled')) {
    toggle.classList.remove('toggled');
    toggle.innerHTML = 'Show Only Passing Combinations';
    Array.prototype.map.call(swatches, function(swatch){
      if(swatch.classList.contains('is-hidden')){
        swatch.classList.remove('is-hidden');
      }
    });
  } else {
    toggle.classList.add('toggled');
    toggle.innerHTML = 'Show All Combinations';
    Array.prototype.map.call(swatches, function(swatch){
      if(swatch.innerHTML.includes('icon-pbs-remove')){
        swatch.classList.add('is-hidden');
      }
    });
  }
});

// toggles the pure hue contrast tables and the tints
var tintSelector = document.querySelector('#tint-selector');
var hueTables = document.querySelectorAll('.contrast-table--hue');

tintSelector.addEventListener('change', function(){
  var target = document.querySelector('#' + this.value);

  Array.prototype.map.call(hueTables, function(hueTable){
    hueTable.classList.add('is-hidden');
  });

  target.classList.remove('is-hidden');
});


</script>

* * *

## Type

* * *

The needs of typography vary greatly from project to project, so we tend to not be very prescriptive. There are some general rules listed below. Note that we don't tend to rely much on global generic styles - components tend to supply their needed styling through class names.

We rely on two typefaces: [Open Sans](https://www.google.com/fonts/specimen/Open+Sans) and, as an accent typeface, [Arvo](https://www.google.com/fonts/specimen/Arvo).

* * *

### Open Sans

- We make use of the **300, 400, 600** and **700** weights
- Of the four weights, within a given project **choose three**
- Italics are rarely used, and are usually just when associated with funders or meta information. Think hard before including the actual italic font in consideration of file size. [Faux italics](http://www.marksimonson.com/notebook/view/FakevsTrueItalics) are acceptable if not detrimental to the overall aesthetic.
- Use of the 300 weight is restricted to type sizes of 16px/pt or greater, or the same size as the overall body copy - whichever is greater

* * *

{: .al-accent-type }
### Arvo

- Is an **accent** typeface, to be used sparingly. It is not present at all in some projects.
- When used to present the title of a show, is set in <span class="al-accent-type">[ALL CAPS](use-of-all-caps)</span>
- Is used a lot in [buttons](#buttons), but not *always*

* * *

### Use of <span class="al-over-title">ALL CAPS</span>

- Usually used to present meta information of some kind - as an "over title" or other similar concept
- Can be used in a tabbed interface for the tab names
- Must be 20px or smaller
- Keep use restricted to places where you will typically have four words or less - e.g. show titles


* * *

## Icons

* * *

### Brand

<div class="swatch-group">
  <div class="swatch swatch--icon" title="Logo">
   <img src="../images/icons/PBS-logo.svg" alt="Logo Icon" />
  </div>
  <div class="swatch swatch--icon" title="Logotype">
   <img src="../images/icons/PBS-logotype.svg" alt="Logotype Icon" />
  </div>
  <div class="swatch swatch--icon" title="Passport Compass Rose">
    <img src="../images/icons/PBS-passport_compass_rose.svg" alt="Passport Compass Rose Icon" />
  </div>
  <div class="swatch swatch--icon" title="Passport Logo">
    <img src="../images/icons/PBS-passport_logo.svg" alt="Passport Logo Icon" />
  </div>
</div>

### Media Playback

<div class="swatch-group">
  <div class="swatch swatch--icon" title="Pause">
    <img src="../images/icons/PBS-pause.svg" alt="Pause Icon" />
  </div>
  <div class="swatch swatch--icon" title="Pause Circle">
    <img src="../images/icons/PBS-pause_circle.svg" alt="Pause Circle Icon" />
  </div>
  <div class="swatch swatch--icon" title="Play">
    <img src="../images/icons/PBS-play.svg" alt="Play Icon" />
  </div>
  <div class="swatch swatch--icon" title="Play Circle">
    <img src="../images/icons/PBS-play_circle.svg" alt="Play Circle Icon" />
  </div>
  <div class="swatch swatch--icon" title="Rewind">
    <img src="../images/icons/PBS-rewind.svg" alt="Rewind Icon" />
  </div>
  <div class="swatch swatch--icon" title="Closed Caption">
    <img src="../images/icons/PBS-closed_caption.svg" alt="Closed Caption Icon" />
  </div>
  <div class="swatch swatch--icon" title="Closed Caption Line">
    <img src="../images/icons/PBS-closed_caption_line.svg" alt="Closed Caption Line Icon" />
  </div>
</div>

### Interface

<div class="swatch-group">

  <div class="swatch swatch--icon" title="Up Caret">
    <img src="../images/icons/PBS-up_caret.svg" alt="Up Caret Icon" />
  </div>
  <div class="swatch swatch--icon" title="Down Caret">
    <img src="../images/icons/PBS-down_caret.svg" alt="Down Caret Icon" />
  </div>
  <div class="swatch swatch--icon" title="Left Caret">
    <img src="../images/icons/PBS-left_caret.svg" alt="Left Caret Icon" />
  </div>
  <div class="swatch swatch--icon" title="Right Caret">
    <img src="../images/icons/PBS-right_caret.svg" alt="Right Caret Icon" />
  </div>

  <div class="swatch swatch--icon" title="Collapse">
    <img src="../images/icons/PBS-collapse.svg" alt="Collapse Icon" />
  </div>
  <div class="swatch swatch--icon" title="Expand">
    <img src="../images/icons/PBS-expand.svg" alt="Expand Icon" />
  </div>

  <div class="swatch swatch--icon" title="Hamburger">
    <img src="../images/icons/PBS-hamburger.svg" alt="Hamburger Icon" />
  </div>
  <div class="swatch swatch--icon" title="Slideout Nav Close">
    <img src="../images/icons/PBS-slideout_nav_close.svg" alt="Slideout Nav Close Icon" />
  </div>
  <div class="swatch swatch--icon" title="Slideout Nav Open">
    <img src="../images/icons/PBS-slideout_nav_open.svg" alt="Slideout Nav Open Icon" />
  </div>

  <div class="swatch swatch--icon" title="Add">
    <img src="../images/icons/PBS-add.svg" alt="Add Icon" />
  </div>
  <div class="swatch swatch--icon" title="Archive">
    <img src="../images/icons/PBS-archive.svg" alt="Archive Icon" />
  </div>
  <div class="swatch swatch--icon" title="Calendar">
    <img src="../images/icons/PBS-calendar.svg" alt="Calendar Icon" />
  </div>
  <div class="swatch swatch--icon" title="Certificate">
    <img src="../images/icons/PBS-certificate.svg" alt="Certificate Icon" />
  </div>
  <div class="swatch swatch--icon" title="Check">
    <img src="../images/icons/PBS-check.svg" alt="Check Icon" />
  </div>
  <div class="swatch swatch--icon" title="Circle">
    <img src="../images/icons/PBS-circle.svg" alt="Circle Icon" />
  </div>
  <div class="swatch swatch--icon" title="Close">
    <img src="../images/icons/PBS-close.svg" alt="Close Icon" />
  </div>

  <div class="swatch swatch--icon" title="Columns">
    <img src="../images/icons/PBS-columns.svg" alt="Columns Icon" />
  </div>
  <div class="swatch swatch--icon" title="Copy">
    <img src="../images/icons/PBS-copy.svg" alt="Copy Icon" />
  </div>
  <div class="swatch swatch--icon" title="Copyright">
    <img src="../images/icons/PBS-copyright.svg" alt="Copyright Icon" />
  </div>
  <div class="swatch swatch--icon" title="Countdown">
    <img src="../images/icons/PBS-countdown.svg" alt="Countdown Icon" />
  </div>


  <div class="swatch swatch--icon" title="Download">
    <img src="../images/icons/PBS-download.svg" alt="Download Icon" />
  </div>
  <div class="swatch swatch--icon" title="Download Circle">
    <img src="../images/icons/PBS-download_circle.svg" alt="Download Circle Icon" />
  </div>
  <div class="swatch swatch--icon" title="Duplicate">
    <img src="../images/icons/PBS-duplicate.svg" alt="Duplicate Icon" />
  </div>
  <div class="swatch swatch--icon" title="Edit">
    <img src="../images/icons/PBS-edit.svg" alt="Edit Icon" />
  </div>


  <div class="swatch swatch--icon" title="Favorite">
    <img src="../images/icons/PBS-favorite.svg" alt="Favorite Icon" />
  </div>
  <div class="swatch swatch--icon" title="Filter">
    <img src="../images/icons/PBS-filter.svg" alt="Filter Icon" />
  </div>

  <div class="swatch swatch--icon" title="Help">
    <img src="../images/icons/PBS-help.svg" alt="Help Icon" />
  </div>
  <div class="swatch swatch--icon" title="Help Line">
    <img src="../images/icons/PBS-help_line.svg" alt="Help Line Icon" />
  </div>
  <div class="swatch swatch--icon" title="History Emptyset">
    <img src="../images/icons/PBS-history_emptyset.svg" alt="History Emptyset Icon" />
  </div>
  <div class="swatch swatch--icon" title="Home">
    <img src="../images/icons/PBS-home.svg" alt="Home Icon" />
  </div>
  <div class="swatch swatch--icon" title="Info">
    <img src="../images/icons/PBS-info.svg" alt="Info Icon" />
  </div>
  <div class="swatch swatch--icon" title="Info Line">
    <img src="../images/icons/PBS-info_line.svg" alt="Info Line Icon" />
  </div>

  <div class="swatch swatch--icon" title="Link">
    <img src="../images/icons/PBS-link.svg" alt="Link Icon" />
  </div>
  <div class="swatch swatch--icon" title="Local Pin">
    <img src="../images/icons/PBS-local_pin.svg" alt="Local Pin Icon" />
  </div>
  <div class="swatch swatch--icon" title="Local Pin Line">
    <img src="../images/icons/PBS-local_pin_line.svg" alt="Local Pin Line Icon" />
  </div>
  <div class="swatch swatch--icon" title="Mail">
    <img src="../images/icons/PBS-mail.svg" alt="Mail Icon" />
  </div>
  <div class="swatch swatch--icon" title="Newsletter">
    <img src="../images/icons/PBS-newsletter.svg" alt="Newsletter Icon" />
  </div>
  <div class="swatch swatch--icon" title="Not Published">
    <img src="../images/icons/PBS-not_published.svg" alt="Not Published Icon" />
  </div>
  <div class="swatch swatch--icon" title="Notification">
    <img src="../images/icons/PBS-notification.svg" alt="Notification Icon" />
  </div>
  <div class="swatch swatch--icon" title="Notification Line">
    <img src="../images/icons/PBS-notification_line.svg" alt="Notification Line Icon" />
  </div>
  <div class="swatch swatch--icon" title="Power Off">
    <img src="../images/icons/PBS-power_off.svg" alt="Power Off Icon" />
  </div>
  <div class="swatch swatch--icon" title="Preview">
    <img src="../images/icons/PBS-preview.svg" alt="Preview Icon" />
  </div>
  <div class="swatch swatch--icon" title="Refresh">
    <img src="../images/icons/PBS-refresh.svg" alt="Refresh Icon" />
  </div>
  <div class="swatch swatch--icon" title="Replay Video">
    <img src="../images/icons/PBS-replay_video.svg" alt="Replay Video Icon" />
  </div>
  <div class="swatch swatch--icon" title="Reply Mail">
    <img src="../images/icons/PBS-reply_mail.svg" alt="Reply Mail Icon" />
  </div>

  <div class="swatch swatch--icon" title="Rss">
    <img src="../images/icons/PBS-rss.svg" alt="Rss Icon" />
  </div>
  <div class="swatch swatch--icon" title="Search">
    <img src="../images/icons/PBS-search.svg" alt="Search Icon" />
  </div>
  <div class="swatch swatch--icon" title="Settings">
    <img src="../images/icons/PBS-settings.svg" alt="Settings Icon" />
  </div>
  <div class="swatch swatch--icon" title="Share">
    <img src="../images/icons/PBS-share.svg" alt="Share Icon" />
  </div>
  <div class="swatch swatch--icon" title="Shop">
    <img src="../images/icons/PBS-shop.svg" alt="Shop Icon" />
  </div>

  <div class="swatch swatch--icon" title="Text">
    <img src="../images/icons/PBS-text.svg" alt="Text Icon" />
  </div>
  <div class="swatch swatch--icon" title="Trash">
    <img src="../images/icons/PBS-trash.svg" alt="Trash Icon" />
  </div>
  <div class="swatch swatch--icon" title="TV Schedule">
    <img src="../images/icons/PBS-tv_schedule.svg" alt="TV Schedule Icon" />
  </div>
  <div class="swatch swatch--icon" title="Undo">
    <img src="../images/icons/PBS-undo.svg" alt="Undo Icon" />
  </div>

  <div class="swatch swatch--icon" title="Upload">
    <img src="../images/icons/PBS-upload.svg" alt="Upload Icon" />
  </div>
  <div class="swatch swatch--icon" title="Upload Circle">
    <img src="../images/icons/PBS-upload_circle.svg" alt="Upload Circle Icon" />
  </div>
  <div class="swatch swatch--icon" title="Warning Circle">
    <img src="../images/icons/PBS-warning_circle.svg" alt="Warning Circle Icon" />
  </div>
  <div class="swatch swatch--icon" title="Warning Circle line">
    <img src="../images/icons/PBS-warning_circle_line.svg" alt="Warning Circle line Icon" />
  </div>
  <div class="swatch swatch--icon" title="Warning Triangle">
    <img src="../images/icons/PBS-warning_triangle.svg" alt="Warning Triangle Icon" />
  </div>
  <div class="swatch swatch--icon" title="Warning Triangle line">
    <img src="../images/icons/PBS-warning_triangle_line.svg" alt="Warning Triangle line Icon" />
  </div>
  <div class="swatch swatch--icon" title="Wifi">
    <img src="../images/icons/PBS-wifi.svg" alt="Wifi Icon" />
  </div>
</div>

### Components

<div class="swatch-group">
  <div class="swatch swatch--icon" title="Component Ad Unit">
    <img src="../images/icons/PBS-component_ad_unit.svg" alt="Component Ad Unit Icon" />
  </div>
  <div class="swatch swatch--icon" title="Component Add Dropdown">
    <img src="../images/icons/PBS-component_add_dropdown.svg" alt="Component Add Dropdown Icon" />
  </div>
  <div class="swatch swatch--icon" title="Component Audio">
    <img src="../images/icons/PBS-component_audio.svg" alt="Component Audio Icon" />
  </div>
  <div class="swatch swatch--icon" title="Component Collapse Copy">
    <img src="../images/icons/PBS-component_collapse_copy.svg" alt="Component Collapse Copy Icon" />
  </div>
  <div class="swatch swatch--icon" title="Component Embed">
    <img src="../images/icons/PBS-component_embed.svg" alt="Component Embed Icon" />
  </div>
  <div class="swatch swatch--icon" title="Component Form">
    <img src="../images/icons/PBS-component_form.svg" alt="Component Form Icon" />
  </div>
  <div class="swatch swatch--icon" title="Component Gallery Promo">
    <img src="../images/icons/PBS-component_gallery_promo.svg" alt="Component Gallery Promo Icon" />
  </div>
  <div class="swatch swatch--icon" title="Component Grid">
    <img src="../images/icons/PBS-component_grid.svg" alt="Component Grid Icon" />
  </div>
  <div class="swatch swatch--icon" title="Component Hero Carousel">
    <img src="../images/icons/PBS-component_hero_carousel.svg" alt="Component Hero Carousel Icon" />
  </div>
  <div class="swatch swatch--icon" title="Component Horizontal Linebreak">
    <img src="../images/icons/PBS-component_horizontal_linebreak.svg" alt="Component Horizontal Linebreak Icon" />
  </div>
  <div class="swatch swatch--icon" title="Icon Horizontal Linebreak">
    <img src="../images/icons/PBS-component_icon.svg" alt="Icon Horizontal Linebreak Icon" />
  </div>
  <div class="swatch swatch--icon" title="Component Image">
    <img src="../images/icons/PBS-component_image.svg" alt="Component Image Icon" />
  </div>
  <div class="swatch swatch--icon" title="Component List">
    <img src="../images/icons/PBS-component_list.svg" alt="Component List Icon" />
  </div>
  <div class="swatch swatch--icon" title="Component Logos">
    <img src="../images/icons/PBS-component_logos.svg" alt="Component Logos Icon" />
  </div>
  <div class="swatch swatch--icon" title="Component Photo Gallery">
    <img src="../images/icons/PBS-component_photo_gallery.svg" alt="Component Photo Gallery Icon" />
  </div>
  <div class="swatch swatch--icon" title="Component Promo">
    <img src="../images/icons/PBS-component_promo.svg" alt="Component Promo Icon" />
  </div>
  <div class="swatch swatch--icon" title="Component Space">
    <img src="../images/icons/PBS-component_space.svg" alt="Component Space Icon" />
  </div>
  <div class="swatch swatch--icon" title="Component Video">
    <img src="../images/icons/PBS-component_video.svg" alt="Component Video Icon" />
  </div>
  <div class="swatch swatch--icon" title="Component Video Line">
    <img src="../images/icons/PBS-component_video_line.svg" alt="Component Video Line Icon" />
  </div>
  <div class="swatch swatch--icon" title="Component Whats On">
    <img src="../images/icons/PBS-component_whats_on.svg" alt="Component Whats On Icon" />
  </div>
</div>

### Social Media

<div class="swatch-group">
  <div class="swatch swatch--icon" title="Disqus">
    <img src="../images/icons/PBS-disqus.svg" alt="Disqus Icon" />
  </div>
  <div class="swatch swatch--icon" title="Facebook">
    <img src="../images/icons/PBS-facebook.svg" alt="Facebook Icon" />
  </div>
  <div class="swatch swatch--icon" title="Facebook Box">
    <img src="../images/icons/PBS-facebook_box.svg" alt="Facebook Box Icon" />
  </div>
  <div class="swatch swatch--icon" title="Facebook Like Line">
    <img src="../images/icons/PBS-facebook_like_line.svg" alt="Facebook Like Line Icon" />
  </div>
  <div class="swatch swatch--icon" title="Google">
    <img src="../images/icons/PBS-google.svg" alt="Google Icon" />
  </div>
  <div class="swatch swatch--icon" title="Instagram">
    <img src="../images/icons/PBS-instagram.svg" alt="Instagram Icon" />
  </div>
  <div class="swatch swatch--icon" title="Pinterest">
    <img src="../images/icons/PBS-pinterest.svg" alt="Pinterest Icon" />
  </div>
  <div class="swatch swatch--icon" title="Pinterest Box">
    <img src="../images/icons/PBS-pinterest_box.svg" alt="Pinterest Box Icon" />
  </div>
  <div class="swatch swatch--icon" title="Pinterest Circle">
    <img src="../images/icons/PBS-pinterest_circle.svg" alt="Pinterest Circle Icon" />
  </div>
  <div class="swatch swatch--icon" title="Retweet">
    <img src="../images/icons/PBS-retweet.svg" alt="Retweet Icon" />
  </div>
  <div class="swatch swatch--icon" title="Tumblr">
    <img src="../images/icons/PBS-tumblr.svg" alt="Tumblr Icon" />
  </div>
  <div class="swatch swatch--icon" title="Tumblr Box">
    <img src="../images/icons/PBS-tumblr_box.svg" alt="Tumblr Box Icon" />
  </div>
  <div class="swatch swatch--icon" title="Twitter">
    <img src="../images/icons/PBS-twitter.svg" alt="Twitter Icon" />
  </div>
  <div class="swatch swatch--icon" title="Twitter Box">
    <img src="../images/icons/PBS-twitter_box.svg" alt="Twitter Box Icon" />
  </div>
  <div class="swatch swatch--icon" title="Youtube">
    <img src="../images/icons/PBS-youtube.svg" alt="Youtube Icon" />
  </div>
</div>



* * *

## Buttons

* * *

There are a set of rules that we have around buttons:

- Typefaces: Open Sans (400 weight or greater), or Arvo (700 weight only). Please use *one* typeface within your project for your buttons.
- Border radius is **always 2px**
- Icons, if used, always appear on the left, and are the same color as the text of the button. Pipes are used to separate the icons only in the case of [social sign on](#social-sign-in-buttons) buttons

### Fill buttons
<button class="btn btn--blue-digital">A $blue-digital button</button>
<button class="btn btn--red">A $red button</button>
<button class="btn btn--green">A $green button</button>
<button class="btn btn--magenta">A $magenta button</button>
<button class="btn btn--orange">An $orange button</button>
<button class="btn btn--blue-antique">A $blue-antique button*</button>
<button class="btn btn--blue-brand">A $blue-brand button*</button>
<button class="btn btn--gray-56">A $gray-56 button</button>


- Colors: The above hues and $gray-56 are availble for regular fill buttons
- $yellow is *never* an option, as it doesn't have sufficient contrast with $gray-0
- Text is always $gray-0 (i.e., white)
- No border - *unless* the button's default state is a "ghost" button, and it fills in when active (e.g. a favorited show) - in that case, retain the original border color
- \* These buttons need the "darken 10" variation of the hue to pass contrast tests
- Hover/Focus state: text underline
- Active state: 20% darker color


### "Ghost" Buttons
<button class="btn"> A $blue-digital ghost button </button>
<button class="btn btn--ghost--red"> A $red ghost button</button>
<button class="btn btn--ghost--green"> A $green ghost button</button>
<button class="btn btn--ghost--orange"> An $orange ghost button</button>
<button class="btn btn--ghost--gray-87"> A $gray-87 ghost button</button>

- Border and text colors are the same
- Background is transparent
- Hover/Focus state: there is a fill that is a 10% tint of the text color
- Active state: a fill that is a 30% tint of the text color


### "Grey" Buttons (with their Active State)

<button class="btn btn--watchlist btn--ripple">
  <i class="icon-pbs-checkmark"></i>
  <span class="btn--text" data-text-default="Add to Watchlist" data-text-selected="In My Watchlist">Add to Watchlist</span>
</button> <button class="btn btn--watchlist btn--ripple selected">
  <i class="icon-pbs-checkmark"></i>
  <span class="btn--text" data-text-default="Add to Watchlist" data-text-selected="In My Watchlist">In My Watchlist</span>
</button>

<button class="btn btn--favorite btn--ripple">
  <i class="icon-pbs-favorite" aria-hidden="true"></i>
  <span class="btn--text" data-text-default="Favorite This Show" data-text-selected="Favorite Show">Favorite This Show</span>
</button> <button class="btn btn--favorite btn--ripple selected">
  <i class="icon-pbs-favorite" aria-hidden="true"></i>
  <span class="btn--text" data-text-default="Favorite This Show" data-text-selected="Favorite Show">Favorited Show</span>
</button>

- These are buttons that are meant to convey the "default/activated" state of a related object (usually a video or show).
- The "default state" border and text are $gray-56, and the fill is $gray-5.
- There usually is an icon on the left, that does not change with the state
- The *text label* in the button changes with state
- The "activated" state can have either a $green or $magenta fill

### Social Sign In Buttons

<ul id="signInServiceList" class="sign-in__service-list" style="max-width: 300px; margin: 0 0 20px 0;">
  <li class="sign-in__link sign-in__link--google">
    <a href="{{ PBS_GOOGLE_AUTHORIZATION_URL }}">
      <span class="sign-in__icon"><i class="icon-pbs-google"></i></span>
      <span class="sign-in__text">Sign in with Google</span>
    </a>
  </li>
  <li class="sign-in__link sign-in__link--facebook">
    <a href="{{ PBS_FACEBOOK_AUTHORIZATION_URL }}">
      <span class="sign-in__icon"><i class="icon-pbs-facebook"></i></span>
      <span class="sign-in__text">Sign in with Facebook</span>
    </a>
  </li>
  <li class="sign-in__link sign-in__link--pbs">
    <a href="{{ PBS_PBS_AUTHORIZATION_URL }}">
      <span class="sign-in__icon"><i class="icon-pbs-pbshead"></i></span>
      <span class="sign-in__text">Sign in with PBS Account</span>
    </a>
  </li>
</ul>

### Button Sizes

<button class="btn btn--blue-digital">Default button</button>
<button class="btn  btn--blue-digital btn--min">Min button</button>

<div class="al-layout-container">
  <button class="btn  btn--blue-digital btn--half">This button takes half of its container</button>
</div>

<div class="al-layout-container">
  <button class="btn  btn--blue-digital btn--full">This button takes all of its container</button>
</div>

- Buttons have a default amount of padding
- There is a "min" variation with half the padding in both directions
- There are also "half" and "full" variations that have widths relative to their containers

* * *

## Forms

* * *

### "Box" Inputs


<div class="al-box-inputs">

  <p>
    <label for="text_field">Text Field:</label>
    <input type="text" id="text_field" placeholder="Placeholder text"/>
  </p>

  <p>
    <label for="text_field_disabled">Disabled Text Field:</label>
    <input type="text" id="text_field_disabled" disabled value="I'm disabled" />
  </p>

  <p>
    <label for="text_field_readonly">Readonly Text Field:</label>
    <input type="text" id="text_field_readonly" readonly value="I'm readonly" />
  </p>

  <p>
    <label for="text_area">Text Area:</label>
    <textarea id="text_area"></textarea>
  </p>

  <p>
    <label for="text_area_disabled">Disabled Text Area:</label>
    <textarea id="text_area_disabled" disabled>I'm disabled</textarea>
  </p>

  <p>
    <label for="text_area">Readonly Text Area:</label>
    <textarea id="text_area" readonly>I'm readonly</textarea>
  </p>

  <p>
    <label for="password">Password:</label>
    <input type="password" class="password" id="password" />
  </p>

  <p>
    <label for="email">Email:</label>
    <input type="email" id="email" />
  </p>

  <p>
    <label for="url">URL:</label>
    <input type="url" id="url" />
  </p>

  <p>
    <label for="tel">Telephone:</label>
    <input type="tel" id="tel" />
  </p>

  <p>
    <label for="number">Number:</label>
    <input type="number" id="number" min="0" max="10" step="1" value="5" />
  </p>

  <p>
    <label for="search">Search:</label>
    <input type="search" id="search" />
  </p>

  <p>
    <label for="date">Date:</label>
    <input type="date" id="date" />
  </p>

  <p>
    <label for="time">Time:</label>
    <input type="time" id="time" />
  </p>

</div>

<p>The Fieldset:</p>
<fieldset>
  <legend>Legend</legend>

  <p>The Form:</p>

  <form>
    <p>
    </p>

    <p>
    </p>

    <p>
    </p>

    <p>
    </p>

    <p>
    </p>

    <p>
    </p>

    <label for="select_element">Select Element:</label>
    <select id="select_element">
      <optgroup label="Option Group 1">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </optgroup>
      <optgroup label="Option Group 2">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3" disabled>Disabled Option</option>
      </optgroup>
    </select>



    <p><label for="select_element_disabled">Disabled Select Element:</label><br/>
      <select id="select_element_disabled" disabled>
        <option value="1">Unselectable Option</option>
        <option value="2">This option should not even be seen</option>
      </select>
    </p>

    <p>Radio Buttons:<br />
      <label><input type="radio" class="radio" name="radio_button" value="radio_1" /> Radio 1</label><br/>
      <label><input type="radio" class="radio" name="radio_button" value="radio_2" /> Radio 2</label><br/>
      <label><input type="radio" class="radio" name="radio_button" value="radio_3" /> Radio 3</label><br/>
      <label><input type="radio" class="radio" name="radio_button" value="radio_4" disabled /> Radio Disabled</label><br/>
    </p>

    <p>Checkboxes:<br />
      <label><input type="checkbox" class="checkbox" name="checkboxes" value="check_1" /> Checkbox 1</label><br/>
      <label><input type="checkbox" class="checkbox" name="checkboxes" value="check_2" /> Checkbox 2</label><br/>
      <label><input type="checkbox" class="checkbox" name="checkboxes" value="check_3" /> Checkbox 3</label><br/>
      <label><input type="checkbox" class="checkbox" name="checkboxes" value="check_4" disabled /> Checkbox Disabled</label><br/>
    </p>

    <p>
    </p>

    <p><label for="file">File Input:</label><br />
      <input type="file" class="file" id="file" />
    </p>

    <h3>HTML5-specific Form Elements</h3>



    <p><label for="color">Color:</label><br />
      <input type="color" id="color" />
    </p>

    <p><label for="datalist">Datalist:</label><br />
      <input list="browsers" name="browser" type="datalist" id="datalist" />
      <datalist id="browsers">
        <option value="Internet Explorer" />
        <option value="Firefox" />
        <option value="Chrome" />
        <option value="Opera" />
        <option value="Safari" />
      </datalist>
    </p>

    <p><label for="range">Range:</label><br />
      <input type="range" id="range" name="points" min="1" max="10" />
    </p>

    <p><label for="output">Output:</label><br />
      <output name="result" id="output">42</output>
    </p>

    <p><label for="progress">Progress:</label></p>
    <div class="progress user-dropdown__viewing-history__video__progress">
      <div class="progress-bar progress-bar-success" style="width: 66%;"></div>
    </div>


  </form>

</fieldset>
