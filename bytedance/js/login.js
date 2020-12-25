$(() => {

  // 手机和邮箱选项切换
  $('.emaillogin').click(function () {
    $('.emaillogin')
      .css({
        color: '#3370ff',
      })
      .siblings()
      .css({
        color: '#8f959e',
      });

    $('.emailogin')
      .css({
        display: 'block',
      })
      .prev()
      .css({
        display: 'none',
      });
  });

  $('.phonelogin').click(function () {
    $('.phonelogin')
      .css({
        color: '#3370ff',
      })
      .siblings()
      .css({
        color: '#8f959e',
      });

    $('.mobielogin')
      .css({
        display: 'block',
      })
      .next()
      .css({
        display: 'none',
      });

    $('.pwdinp input').val('');
  });

  // 下拉框转动特效
  $('.phoneselect').click(function (event) {
    event.stopPropagation();

    if ($('.plone-icon').attr('index') == 1) {
      $('.plone-icon').css({
        transform: ' rotate(180deg)',
        transition: 'all 0.4s',
      });
      $('.plone-icon').attr('index', '0');
      $('.selectbox').slideDown(100);
      $('.phoneselect').css({
        color: '#A5A7A9',
      });
    } else if ($('.plone-icon').attr('index') == 0) {
      $('.plone-icon').css({
        transform: ' rotate(0deg)',
        transition: 'all 0.4s',
      });
      $('.plone-icon').attr('index', '1');
      $('.selectbox').slideUp(100);
      $('.phoneselect').css({
        color: 'black',
      });
    }
  });

  // 密码输入框眼睛
  $('.openEye').click(function () {
    $('.closeEye').css({
      display: 'block',
    });
    $('.openEye').css({
      display: 'none',
    });
    $('.pwdinp input').attr('type', 'password');
  });

  $('.closeEye').click(function () {
    $('.openEye').css({
      display: 'block',
    });
    $('.closeEye').css({
      display: 'none',
    });
    $('.pwdinp input').attr({
      type: 'text',
    });
  });

  // 地区选择下拉框点击
  $('.leftselect ul li').bind('click', function () {
    num = parseInt(
      $(this)
        .text()
        .replace(/[^0-9]/gi, '')
    );
    $('.placenum').text('+' + num);
  });

  // 地区选择下拉框隐藏
  $(window).click(function () {
    if ($('.plone-icon').attr('index') == 0) {
      $('.plone-icon').css({
        transform: ' rotate(0deg)',
        transition: 'all 0.4s',
      });

      $('.plone-icon').attr('index', '1');
      $('.selectbox').slideUp(100);
      $('.phoneselect').css({
        color: 'black',
      });
    }
  });

  // 鼠标移入移出第三方微信icon功能
  $('.thirdPartyLogin-icons .wechat').hover(
    function () {

      // over
      $('.thirdPartyLogin-icons .code')
        .show()
        .css('transition', 'all 1s ease-in');
    },
    function () {

      // out
      $('.thirdPartyLogin-icons .code').hide();
    }
  );

  // 用户协议弹出和隐藏
  $('.useragree').click(function () {
    $('.useragreebox').show();
    $('body').css('overflow', 'hidden');
  });

  $('.useragreebox .modal-header button').click(function () {
    $('.useragreebox').hide();
    $('body').css('overflow', 'visible');
  });

  $('.useragreebox .modal-footer button').click(function () {
    $('.useragreebox').hide();
    $('body').css('overflow', 'visible');
  });

  // 隐私政策
  $('.Policy').click(function () {
    $('.Policybox').show();
    $('body').css('overflow', 'hidden');
  });

  $('.Policybox .modal-header button').click(function () {
    $('.Policybox').hide();
    $('body').css('overflow', 'visible');
  });

  $('.Policybox .modal-footer button').click(function () {
    $('.Policybox').hide();

    $('body').css('overflow', 'visible');
  });

  // 验证点击框取消not-allow
  $('.phonenum input').bind('input propertychange', function () {
    var val = $(this).val();
    var isok = isNaN(val);
    if ($(this).val().length == 11) {
      if (isok == false) {
        $('.sendnum').css({ cursor: 'pointer' });
        $('.sendnum').css({ opacity: '1' });
      }
    } else {
      $('.sendnum').css({ cursor: 'not-allowed' });
      $('.sendnum').css({ opacity: '.4' });
    }
  });
});
