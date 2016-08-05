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


### Neutrals

<div class="swatch" style="background-color: #000000; color: #ffffff;">$gray-100: #000000<br />(mainly used for shadows)</div>
<div class="swatch" style="background-color: #222222; color: #ffffff;">$gray-87: #222222</div>
<div class="swatch" style="background-color: #4b4b4b; color: #ffffff;">$gray-71: #4b4b4b</div>
<div class="swatch" style="background-color: #707070; color: #ffffff;">$gray-56: #707070</div>
<div class="swatch" style="background-color: #b3b3b3;">$gray-30: #b3b3b3</div>
<div class="swatch" style="background-color: #e0e0e0;">$gray-12: #e0e0e0 <br />(aka $divider)</div>
<div class="swatch" style="background-color: #f3f3f3;">$gray-5: #f3f3f3</div>
<div class="swatch" style="background-color: #f8f8f8;">$gray-3: #f8f8f8</div>
<div class="swatch" style="background-color: #ffffff;">$gray-0: #ffffff;</div>

### Hues

<div class="swatch" style="background-color: #126eb5; color: #ffffff;">$blue-digital: #126eb5</div>
<div class="swatch" style="background-color: #8fa6bc;">$blue-antique: #8fa6bc</div>
<div class="swatch" style="background-color: #00aaeb;">$blue-brand: #00aaeb</div>
<div class="swatch" style="background-color: #ac031f; color: white;">$red: #ac031f</div>
<div class="swatch" style="background-color: #e9ba15;">$yellow: #e9ba15</div>
<div class="swatch" style="background-color: #70B406;">$green: #70B406</div>
<div class="swatch" style="background-color: #ce255d; color: #ffffff;">$magenta: #ce255d</div>
<div class="swatch" style="background-color: #EE7101; color: #ffffff;">$orange: #EE7101</div>

### Color Combinations

We strive to meet WCAG 2.0 color contrast ratios to ensure accessibility. These are solid backgrounds with neutral text on top, with indications of what passes the required contrast ratios.

- <i class="icon-pbs-checkmark"></i> passes for all type sizes;
- <strong class="icon">&#9888;</strong> passes for large type sizes (above 18px or 14px/bold);
- <i class="icon-pbs-remove"></i> fails at all sizes

<button class="btn" id="contrast-swatch-toggle">Show Only Passing Combinations</button>

<div class="contrast-table">
  <div class="contrast-table__group">
    <h4>$gray-87</h4>
    <div class="contrast-table__swatch" style="background: #222222; color: #000000;">$gray-100 text <i class="icon-pbs-remove"></i></div>
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
    <div class="contrast-table__swatch" style="background: #4b4b4b; color: #000000;">$gray-100 text <i class="icon-pbs-remove"></i></div>
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
    <div class="contrast-table__swatch" style="background: #707070; color: #000000;">$gray-100 text <strong class="icon">&#9888;</strong></div>
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
    <div class="contrast-table__swatch" style="background: #b3b3b3; color: #000000;">$gray-100 text <i class="icon-pbs-checkmark"></i></div>
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
    <div class="contrast-table__swatch" style="background: #e0e0e0; color: #000000;">$gray-100 text <i class="icon-pbs-checkmark"></i></div>
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
    <div class="contrast-table__swatch" style="background: #f3f3f3; color: #000000;">$gray-100 text <i class="icon-pbs-checkmark"></i></div>
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
    <div class="contrast-table__swatch" style="background: #f8f8f8; color: #000000;">$gray-100 text <i class="icon-pbs-checkmark"></i></div>
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
    <div class="contrast-table__swatch" style="background: #ffffff; color: #000000;">$gray-100 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #ffffff; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #ffffff; color: #4b4b4b;">$gray-71 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #ffffff; color: #707070;">$gray-56 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #ffffff; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ffffff; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ffffff; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ffffff; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #ffffff; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$blue-digital</h4>
    <div class="contrast-table__swatch" style="background: #126eb5; color: #000000;">$gray-100 text <strong class="icon">&#9888;</strong></div>
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
    <div class="contrast-table__swatch" style="background: #8fa6bc; color: #000000;">$gray-100 text <i class="icon-pbs-checkmark"></i></div>
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
    <div class="contrast-table__swatch" style="background: #00aaeb; color: #000000;">$gray-100 text <i class="icon-pbs-checkmark"></i></div>
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
    <div class="contrast-table__swatch" style="background: #ac031f; color: #000000;">$gray-100 text <i class="icon-pbs-remove"></i></div>
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
    <div class="contrast-table__swatch" style="background: #e9ba15; color: #000000;">$gray-100 text <i class="icon-pbs-checkmark"></i></div>
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
    <div class="contrast-table__swatch" style="background: #70B406; color: #000000;">$gray-100 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #70B406; color: #222222;">$gray-87 text <i class="icon-pbs-checkmark"></i></div>
    <div class="contrast-table__swatch" style="background: #70B406; color: #4b4b4b;">$gray-71 text <strong class="icon">&#9888;</strong></div>
    <div class="contrast-table__swatch" style="background: #70B406; color: #707070;">$gray-56 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #70B406; color: #b3b3b3;">$gray-30 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #70B406; color: #e0e0e0;">$gray-12 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #70B406; color: #f3f3f3;">$gray-5 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #70B406; color: #f8f8f8;">$gray-3 text <i class="icon-pbs-remove"></i></div>
    <div class="contrast-table__swatch" style="background: #70B406; color: #ffffff;">$gray-0 text <i class="icon-pbs-remove"></i></div>
  </div>

  <div class="contrast-table__group">
    <h4>$magenta</h4>
    <div class="contrast-table__swatch" style="background: #ce255d; color: #000000;">$gray-100 text <i class="icon-pbs-remove"></i></div>
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
    <div class="contrast-table__swatch" style="background: #EE7101; color: #000000;">$gray-100 text <i class="icon-pbs-checkmark"></i></div>
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

<div class="swatch swatch--icon">
<i class="icon-pbs-twitter-square"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-twitter"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-facebook"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-retweet"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-reply-mail"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-mail"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-favorite"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-facebook-square"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-instagram"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-pinterest"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-youtube"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-youtube-2"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-tumblr"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-tumblr-square"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-checkmark"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-share"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-embed2"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-cheveron-down"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-cheveron-up"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-search"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-pbshead"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-grid"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-menu-hamburger"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-remove"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-refresh"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-google"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-google-plus"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-google-plus2"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-cc"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-filter"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-play"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-pause"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-play-2"></i>
</div>
<div class="swatch swatch--icon">
<i class="icon-pbs-pause-2"></i>
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
<button class="btn btn--blue-antique">An $blue-antique button</button>
<button class="btn btn--blue-brand">A $blue-brand button</button>

<button class="btn btn--gray-56">A $gray-56 button</button>
<button class="btn btn--gray-30">A $gray-30 button</button>



<!-- <button class="btn btn--cta">
A Call to Action button
</button>

<button class="btn btn--inverse">
An Inverted button
</button>

<div class="passport">
  <button class="btn green-activation">
  An Activation button
  </button>
</div> -->

- Colors: All [hues](#hues) are availble, though $yellow is reserved for an activated state (e.g. a favorited show). $gray-56 and $gray-30 are also available.
- Text is always $gray-0 (aka white)
- No border - UNLESS the button's default state is a "ghost" button, and it fills in when active (e.g. a favorited show) - in that case, retain the original border color
- Hover/Focus state: text underline
- Active state: 20% darker color


### "Ghost" Buttons
<button class="btn"> A $blue-digital ghost button </button>
<button class="btn btn--ghost--red"> A $red ghost button</button>
<button class="btn btn--ghost--green"> A $green ghost button</button>
<button class="btn btn--ghost--gray-87"> A $gray-87 ghost button</button>

- Border and text colors are the same
- Background is transparent
- Hover/Focus state: there is a fill that is a slight tint of the text color
- Active state: a fill that is a slightly darker tint of the text color


### "Grey" Buttons (with their Active State)

<button class="btn btn--watchlist btn--ripple">
  <i class="icon-pbs-checkmark"></i>
  <span class="btn--text" data-text-default="Add to Watchlist" data-text-selected="In My Watchlist">Add to Watchlist</span>
</button>

<button class="btn btn--watchlist btn--ripple selected">
  <i class="icon-pbs-checkmark"></i>
  <span class="btn--text" data-text-default="Add to Watchlist" data-text-selected="In My Watchlist">In My Watchlist</span>
</button>

<button class="btn btn--favorite btn--ripple">
  <i class="icon-pbs-favorite" aria-hidden="true"></i>
  <span class="btn--text" data-text-default="Favorite This Show" data-text-selected="Favorite Show">Favorite This Show</span>
</button>

<button class="btn btn--favorite btn--ripple selected">
  <i class="icon-pbs-favorite" aria-hidden="true"></i>
  <span class="btn--text" data-text-default="Favorite This Show" data-text-selected="Favorite Show">Favorited Show</span>
</button>

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

* * *

## Forms

* * *

<p>The Fieldset:</p>
<fieldset>
  <legend>Legend</legend>

  <p>The Form:</p>

  <form>
    <p><label for="text_field">Text Field:</label><br />
      <input type="text" id="text_field" />
    </p>

    <p><label for="text_field_disabled">Disabled Text Field:</label><br />
      <input type="text" id="text_field_disabled" disabled value="I'm disabled" />
    </p>

    <p><label for="text_field_readonly">Readonly Text Field:</label><br />
      <input type="text" id="text_field_readonly" readonly value="I'm readonly" />
    </p>

    <p><label for="text_area">Text Area:</label><br />
      <textarea id="text_area"></textarea>
    </p>

    <p><label for="text_area_disabled">Disabled Text Area:</label><br />
      <textarea id="text_area_disabled" disabled>I'm disabled</textarea>
    </p>

    <p><label for="text_area">Readonly Text Area:</label><br />
      <textarea id="text_area" readonly>I'm readonly</textarea>
    </p>

    <p><label for="select_element">Select Element:</label></p>
    <div class="styled-select">
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
    </div>


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

    <p><label for="password">Password:</label><br />
      <input type="password" class="password" id="password" />
    </p>

    <p><label for="file">File Input:</label><br />
      <input type="file" class="file" id="file" />
    </p>

    <h3>HTML5-specific Form Elements</h3>

    <p><label for="email">Email:</label><br />
      <input type="email" id="email" />
    </p>

    <p><label for="url">URL:</label><br />
      <input type="url" id="url" />
    </p>

    <p><label for="tel">Telephone:</label><br />
      <input type="tel" id="tel" />
    </p>

    <p><label for="number">Number:</label><br />
      <input type="number" id="number" min="0" max="10" step="1" value="5" />
    </p>

    <p><label for="search">Search:</label><br />
      <input type="search" id="search" />
    </p>

    <p><label for="date">Date:</label><br />
      <input type="date" id="date" />
    </p>

    <p><label for="time">Time:</label><br />
      <input type="time" id="time" />
    </p>

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
