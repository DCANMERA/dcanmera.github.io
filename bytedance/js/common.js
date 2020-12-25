$(() => {
  // 缓慢上升功能
  setTimeout(() => {
    $('.main').css({
      'margin-top': '0',
      transition: 'margin-top 1s ease-out'
    });
  }, 300);

  // 防抖显示与隐藏code
  var codeTimer = null;
  $('.icon').hover(
    function () {
      clearTimeout(codeTimer);

      // over
      codeTimer = setTimeout(() => {
        $('.code').stop().hide();
        $(this).find('.code').stop().show();
      }, 400);
    },
    function () {
      clearTimeout(codeTimer);

      // out
      codeTimer = setTimeout(() => {
        $('.code').stop().hide();
      }, 400);
    }
  );

  $('.flaot-home .icon').hover(
    function () {
      // over
      $(this).find('svg>path').attr('fill', '#3370FF');
    },
    function () {
      // out
      $(this).find('svg>path').attr('fill', '#646A73');
    }
  );

  // 返回顶部功能
  $('.float-home .backTop').on('click', () => {
    $('body,html').animate(
      {
        scrollTop: 0
      },
      300
    );
  });
});
