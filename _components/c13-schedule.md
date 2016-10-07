---
layout: post
title:  "Schedule"
date:   2016-06-30
category: content
products:
- pbs-org
status: in use
thumb: pbs-org-c13-schedule.png
code: c13
example: |
  <div class="row-with-ad row-with-ad-at-md hidden-xs row--flex l-container__inner">
    <div class="col-content">
      <div class="row--flex content-row">
        <div class="col-xs-12 col-sm-6 col-md-5x6 col-divider">

        </div>
        <div class="col-xs-12 col-sm-6 col-md-7x6 col-divider">
          <section class="schedule">
            <h2 class="section-title"><img class="station-logo" src="http://image.pbs.org/stations/weta-color-logo-iZbJH8k.png.resize.250x125.png" srcset="http://image.pbs.org/stations/weta-color-logo-iZbJH8k.png.resize.250x125.png,
    http://image.pbs.org/stations/weta-color-logo-iZbJH8k.png.resize.500x250.png 2x" width="74" alt="WETA"><span class="schedule-title">What’s on Now</span></h2>
            <table class="table schedule__table">
              <tbody>
                <tr>
                  <td class="schedule__time home-schedule__table-cell-time schedule__time--formatted">2:00 PM</td>
                  <td>Supernature - Wild Flyers: Defying Gravity</td>
                </tr>
                <tr>
                  <td class="schedule__time home-schedule__table-cell-time schedule__time--formatted">3:00 PM</td>
                  <td>NOVA: Making North America: Origins</td>
                </tr>
                <tr>
                  <td class="schedule__time home-schedule__table-cell-time schedule__time--formatted">4:00 PM</td>
                  <td>9 Months That Made You: The First 8 Weeks</td>
                </tr>
                <tr>
                  <td class="schedule__time home-schedule__table-cell-time schedule__time--formatted">5:00 PM</td>
                  <td>Antiques Roadshow: Bexhill-on-Sea</td>
                </tr>
              </tbody>
            </table>
            <p class="view-all"><a href="http://www.weta.org/schedule?utm_source=whats_on_module&amp;utm_medium=full_schedule&amp;utm_campaign=pbs_homepage" target="_blank">Full Schedule</a></p>
          </section>
        </div>
      </div>
    </div>
    <!-- col-content -->
    <div class="col-ad hidden-xs hidden-sm row--flex">
      <!-- start medium-rectangle-half-page -->
      <div class="ad ad--medium-rectangle-half-page ad--rendered">
      </div>
    </div>
  </div>


---

The **Schedule** component displays a current TV schedule of the user's localized station. This component is not visible in a non-localized state.

- Includes the logo of the localized station (WETA shown)
- In its current implementation, it is not visible below 1024px. It is part of the 'row with ad', along with the [Verticals component](c19-verticals.html)
- The "Full Schedule" link at the bottom goes to the TV Schedule page on the localzied station's website


