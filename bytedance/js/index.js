$(() => {
  // swiper轮播
  new Swiper('.employeeStory-swiperContainer', {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 700,
    loop: true,
    autoplay: {
      delay: 7000
    },
    slidesPerView: 'auto',
    spaceBetween: 56,
    slidesOffsetBefore: 28,
    slidesOffsetAfter: 30,
    touchRatio: '0',
    navigation: {
      nextEl: '.employeeStory-swiper-button-next',
      prevEl: '.employeeStory-swiper-button-prev'
    }
  });

  // 视频的向下滑动按钮功能
  $('.slide-icon').on('click', function () {
    $('body,html').animate(
      {
        scrollTop: $('.process-block__fokUm').offset().top
      },
      300
    );
  });

  // 视频点击播放
  $('.employeeCard-avatar').click(function () {
    var videosrc = $(this).attr('data-video-src');
    $('.top-video').show();
    $('.top-video .video-box video').attr('src', videosrc);
    $('.top-video .video-box video>source:eq(0)').attr('src', videosrc);
    $('body').css('overflow', 'hidden');
    $('.top-video .video-box video').trigger('play');
  });

  // 视频关闭
  $('.video-bg').click(function () {
    $('body,html').css('overflow', 'visible');
    $('.top-video').hide();
    $('.top-video .video-box video').trigger('pause');
  });

  $('.top-video .video-box .quit').click(function () {
    $('body,html').css('overflow', 'visible');
    $('.top-video').hide();
    $('.top-video .video-box video').trigger('pause');
  });

  var Recruitmenth = $('.Recruitment').height();
  var Processh = Recruitmenth + $('.timeline').height();
  var onlinetellh = Processh + $('.onlinetell').height();

  // 窗口滚动返回顶部与头部显示隐藏
  // 照片流程动画
  // 上浮动画
  $(document).on('mousewheel DOMMouseScroll scroll', function (e) {
    var delta =
      (e.originalEvent.wheelDelta &&
        (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
      (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));

    var top = $(window).scrollTop();
    var target = parseInt($('.anchor-con').offset().top);
    var fixedValue = 2000;

    if (top > Recruitmenth) {
      $('.Recruitment').addClass('slideUpIn100');
    }
    if (top > Processh) {
      $('.Process').addClass('slideUpIn100');
    }
    if (top > onlinetellh) {
      $('.onlinetell').addClass('slideUpIn60');
    }

    switch (true) {
      case top <= target:
        $('.header')
          .removeClass('header-remove-active')
          .addClass('header-active');
        $('.float-home').hide();

        break;
      case top > target && top <= fixedValue:
        $('.float-home').show();
        $('.float-home .backTop').css({
          position: 'fixed',
          bottom: '144px'
        });
        $('.float-home .weChat').css({
          position: 'fixed',
          bottom: '80px'
        });

        if (top > 800) {
          $('.Inspire').addClass('slideUpIn100');
          $('.Inspire').css('transform', 'translateY(' + 0 + 'px)');
        }

        if (top > 1075) {
          $('.toutiao').addClass('slideUpIn100');
          $('.toutiao').css('transform', 'translateY(' + 0 + 'px)');
        }

        if (top > 1095) {
          $('.douyin').addClass('slideUpIn100');
          $('.douyin').css('transform', 'translateY(' + 0 + 'px)');
        }

        if (top > 1115) {
          $('.facebook').addClass('slideUpIn100');
          $('.facebook').css('transform', 'translateY(' + 0 + 'px)');
        }

        if (top > 1140) {
          $('.xigua').addClass('slideUpIn100');
          $('.xigua').css('transform', 'translateY(' + 0 + 'px)');
        }

        if (top > 1165) {
          $('.gogo').addClass('slideUpIn100');
          $('.gogo').css('transform', 'translateY(' + 0 + 'px)');
        }

        if (top > 1190) {
          $('.faceu').addClass('slideUpIn100');
          $('.faceu').css('transform', 'translateY(' + 0 + 'px)');
        }

        if (top > 1300) {
          $('.knowmore').addClass('slideUpIn60');
          $('.knowmore').css('transform', 'translateY(' + 0 + 'px)');
        }

        if (top > 1550) {
          $('.employeeStory').addClass('slideUpIn100');
          $('.employeeStory').css('transform', 'translateY(' + 0 + 'px)');
        }

        break;

      default:
        $('.float-home .backTop').css({
          position: 'absolute',
          bottom: '144px'
        });
        $('.float-home .weChat').css({
          position: 'absolute',
          bottom: '80px'
        });

        break;
    }

    // 页面上滚
    if (delta == 1) {
      $('.header')
        .removeClass('header-active')
        .addClass('header-remove-active');

      if (top <= target) {
        $('.header')
          .removeClass('header-remove-active')
          .addClass('header-active');
      }

      return;
    }

    // 页面下滚
    if (delta == -1) {
      $('.header')
        .removeClass('header-remove-active')
        .addClass('header-active');
    }
  });

  // 招聘信息弹出
  $('.atsx-btn-circle').click(function (event) {
    event.stopPropagation();
    $('#progressbox').show();
    $('body').css('overflow', 'hidden');
  });

  // 招聘信息隐藏
  $('.atsx-modal-close').click(function () {
    $('#progressbox').hide();
    $('body').css('overflow', 'visible');
  });

  $('.atsx-modal-body').click(function (event) {
    event.stopPropagation();
  });

  $(window).click(function () {
    if ($('#progressbox').css('display') == 'block') {
      $('#progressbox').hide();
      $('body').css('overflow', 'visible');
    }
  });

  // 招聘跳转
  $('.Graduates').click(function () {
    window.open(
      'https://job.bytedance.com/campus/position?keywords=&category=&location=&type=2&job_hot_flag='
    );
  });

  $('.intern').click(function () {
    window.open(
      'https://job.bytedance.com/campus/position?keywords=&category=&location=&type=3&job_hot_flag='
    );
  });
});
