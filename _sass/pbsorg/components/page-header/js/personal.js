const jQuery = window.jQuery = require('jquery');
const Utils = require('../../../scripts/_utils');

require('../../../scripts/pbs_profile');
require('../../../bower_components/limit/limit.js');
require('../../../scripts/jquery.pbs.cookie.js');
require('../../../scripts/modal_campaign.js');

jQuery(($) => {
  let url = '/personal/';
    if (window.PBS_HEAVY_TRAFFIC == "False" && $.cookie('pbs_uid')) {
      $.ajax({
        url: url,
        data: {}
      }).done(function (data) {
        window.PBS.personalData = data;
        let $viewingHistory = $('.user-dropdown__viewing-history__videos'),
          $viewingHistoryContent = $('div.viewing-history-content'),
          resumeVideos = document.createDocumentFragment();
        if (data.is_passport && !$.cookie('pbs_mvod')) {
          $.cookie('pbs_mvod', data.is_passport, {expires : 30, path : '/', domain : '.pbs.org'});
        } else if (data.is_passport == false && $.cookie('pbs_mvod')) {
          $.cookie('pbs_mvod', null, {expires : 0, path : '/', domain : '.pbs.org'});
        }

        if (data.username) {
          $('.user-name').html(data.username);
          $('#userDropdown, .user-dropdown__links, .user-dropdown').toggleClass('is-hidden');
          $('body').addClass('user-is-signed-in');

          // mobile menu
          $('.user-info__name').html(data.username);
          $('.user-info__dropdown-control').toggleClass('is-hidden');

          // test for presence of viewing history data
          if (data.resume_watching.content.length > 0) {
            $('.user-dropdown__viewing-history, .nav-item--resume-video').removeClass('is-hidden');
            $('.user-dropdown').addClass('has-viewing-history');

            // create document fragment
            let resumeVideo = document.createDocumentFragment();

            // create pieces to add to the fragment
            let obj = data.resume_watching.content[0],
              fragmentImg = document.createElement('a'),
              innerImg = document.createElement('img'),
              fragmentLabel = document.createElement('p'),
              progressContainer = document.createElement('div'),
              progressBar = document.createElement('div');

            // set attributes of the pieces
            fragmentImg.setAttribute('href', '/video/' + obj.id);
            fragmentImg.className = 'resume-video__link';
            innerImg.setAttribute('src', obj.image + '.crop.380x208.jpg');
            innerImg.setAttribute('alt', obj.title);
            fragmentLabel.className = 'nav-item--resume-video__label';
            fragmentLabel.innerHTML = obj.title;
            progressContainer.className = 'progress';
            progressBar.className = 'progress-bar progress-bar-success';
            progressBar.setAttribute('style', 'width:' + obj.percent_complete + '%');

            // append the pieces
            fragmentImg.appendChild(innerImg);
            progressContainer.appendChild(progressBar);
            resumeVideo.appendChild(fragmentImg);
            resumeVideo.appendChild(progressContainer);
            resumeVideo.appendChild(fragmentLabel);
            $('.nav-item--resume-video').append(resumeVideo);
          }

        $.each(data.resume_watching.content, function (index, obj) {

          // @todo clean up/re-structure this file
          // we should really have a template for this
          let viewingHistoryVideo = document.createElement('div'),
            videoLink = document.createElement('a'),
            image = document.createElement('img'),
            label = document.createElement('p'),
            progressContainer = document.createElement('div'),
            progressBar = document.createElement('div');

          viewingHistoryVideo.className = 'user-dropdown__viewing-history__video';

          // video image and link
          videoLink.setAttribute('href', '/video/'+ obj.id);
          videoLink.className = 'user-dropdown__viewing-history__video-link fallback-image__container fallback-image__container--gray';
          videoLink.setAttribute('data-gtm-video-id', obj.id);
          videoLink.setAttribute('data-gtm-video-title', obj.title);
          image.setAttribute('src', obj.image + '.crop.227x124.jpg');
          image.setAttribute('alt', obj.title);
          image.className = 'user-dropdown__viewing-history__video__image image--needs-fallback';
          videoLink.appendChild(image);

          // progress bar
          progressContainer.className = 'progress user-dropdown__viewing-history__video__progress';
          progressBar.className = 'progress-bar progress-bar-success';
          progressBar.setAttribute('style', 'width:' + obj.percent_complete + '%');

          // video label
          label.className = 'user-dropdown__viewing-history__video__label';
          label.textContent = obj.title;

          // add video image, progress bar, and label to video div
          viewingHistoryVideo.appendChild(videoLink);
          viewingHistoryVideo.appendChild(progressContainer);
          progressContainer.appendChild(progressBar);
          viewingHistoryVideo.appendChild(label);
          resumeVideos.appendChild(viewingHistoryVideo);

        });

        // add resume videos to dom only once
        $viewingHistory.append(resumeVideos);

          $.each(data.favorite_videos.content, function (index, obj) {
            let $btn = jQuery('*[data-video-id="' + obj.id + '"]'),
              txt = $btn.find('.btn--text').data('text-selected');
            $btn.addClass('selected').find('.btn--text').text(txt);
          });

          $.each(data.favorite_shows.content, function (index, obj) {
            let $btn = jQuery('*[data-show-id="' + obj.id + '"]'),
              txt = $btn.find('.btn--text').data('text-selected');
            $btn.addClass('selected').find('.btn--text').text(txt);
          });

          if (data.thumbnail_URL) {
            let userImage = document.createElement('img');
            userImage.src = data.thumbnail_URL;
            userImage.alt = 'Profile picture for ' + data.username;
            userImage.className = 'user-info__image';
            $('.header__image-container').prepend(userImage);
          } else {
            $('.header__image-container').remove();
          }

          // For users with passport:
          // Display smaller passport logo in corner of profile image if profile image exists
          // If no profile image, just display passport logo on its own
          if (data.is_passport && data.thumbnail_URL) {
            $('.passport-logo-with-image').removeClass('is-hidden');
          } else if (data.is_passport) {
            $('.passport-logo-no-image').removeClass('is-hidden');
          }

        } else {
          $('#userDropdownLoggedOut').toggleClass('is-hidden');
          $('.user-sign-in ').toggleClass('is-hidden');
        }
      }).error(function (data) {
        $('#userDropdownLoggedOut').toggleClass('is-hidden');
        $('.user-sign-in ').toggleClass('is-hidden');
      });
    } else {
      if ($.cookie('pbs_mvod')) {
        $.cookie('pbs_mvod', null, {expires : 0, path : '/', domain : '.pbs.org'});
      }
      $('#userDropdownLoggedOut').toggleClass('is-hidden');
      $('.user-sign-in ').toggleClass('is-hidden');
    }

    $('.donate-link').each(function () {
      $(this).on('click', function (e) {
        initJAWS(e, 'Donate');
        $.ajax({
          url: 'profile/updateDonateHistory/',
          type: 'post',
          success: function (data) {

          }
        });
      });
    });
});
