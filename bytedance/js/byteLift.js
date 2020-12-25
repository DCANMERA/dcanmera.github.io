$(function () {
  var timer = null;
  var timer2 = null;
  var index = 0;
  var index2 = 0;

  var play = function () {
    index++;
    index = index > 1 ? 0 : index;
    $('.life1 .photo ul li')
      .eq(index)
      .addClass('active')
      .siblings('li')
      .removeClass('active');

    $('.life2 .photo ul li')
      .eq(index)
      .addClass('active')
      .siblings('li')
      .removeClass('active');

    $('.life3 .photo ul li')
      .eq(index)
      .addClass('active')
      .siblings('li')
      .removeClass('active');

    $('.life4 .photo ul li')
      .eq(index)
      .addClass('active')
      .siblings('li')
      .removeClass('active');
  };

  var play2 = function () {
    index2++;
    index2 = index2 > 2 ? 0 : index2;

    $('.life5 .photo ul li')
      .eq(index2)
      .addClass('active')
      .siblings('li')
      .removeClass('active');
  };

  timer = setInterval(play, 2000);
  timer2 = setInterval(play2, 2000);

  $('.content-video').click(function () {
    $('body,html').css('overflow', 'hidden');
    $('.top-video')
      .show()
      .find('video')
      .prop('currentTime', 0)
      .trigger('play');

    $('.content .content-video video').trigger('pause');
  });

  $('.video-bg').click(function () {
    $('body,html').css('overflow', 'visible');
    $('.top-video').hide();
    $('.top-video .video-box video').trigger('pause');
    $('.content .content-video video').trigger('play');
  });

  $('.top-video .video-box .quit').click(function () {
    $('body,html').css('overflow', 'visible');
    $('.top-video').hide();
    $('.top-video .video-box video').trigger('pause');
    $('.content .content-video video').trigger('play');
  });

  $(document).on('mousewheel DOMMouseScroll scroll', function (e) {
    var top = $(window).scrollTop();
    var target = parseInt($('.life1 .life-content').offset().top);
    var fixedValue = 4000;

    switch (true) {
      case top <= target:
        $('.float-home').hide();

        break;
      case top > target && top <= fixedValue:
        $('.float-home').show();
        $('.float-home .backTop').css({
          position: 'fixed',
          bottom: '80px'
        });

        break;

      default:
        $('.float-home .backTop').css({
          position: 'absolute',
          bottom: '80px'
        });

        break;
    }
  });
});
