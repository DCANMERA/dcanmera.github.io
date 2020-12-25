$(() => {

  // 记录tabBar的点击索引
  var index = 0;

  // 侧边栏的top
  var top = 0;

  // 固定定位的top
  var topValue = 125;

  // 滑动到该值就改变定位方式
  var criticalValue = 0;

  // 隐藏主体区元素
  $('.main .main-content .title')
    .children()
    .hide();

  $('.main .main-content>.content')
    .children()
    .hide();

  // 显示主体区部分元素
  $('.main .main-content .title>div')
    .eq(index)
    .show();

  $('.main .main-content>.content>div')
    .eq(index)
    .show();

  // 主体tabBar栏切换功能
  $('.main .tabBar ul li').on('click', function () {
    index = $(this).index();

    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active');

    $('.main .main-content .title>div')
      .eq(index)
      .show()
      .siblings()
      .hide();

    $('.main .main-content>.content>div')
      .eq(index)
      .show()
      .siblings()
      .hide();

    if (index > 0) {

      // 拿到结尾以item类名的元素集合
      var item = $(`.main-content>.content>div:eq(${index})>div[class$="item"]`);

      if (index == 1) {
        $('.main .main-content>.content>.sidebar').html(
          `<span class="sidebar-item">分职位类别宣讲</span>
          <span class="sidebar-item">综合高校宣讲</span>
          <span class="sidebar-item">美术类高校宣讲</span>
          <span class="sidebar-item">留学生专场宣讲</span>`
        );

        top = $('.onlinePresentation-item-head')
          .eq(0)
          .height();
      }

      if (index == 2) {
        $('.main .main-content>.content>.sidebar').html(
          `<span class="sidebar-item">关于简历投递</span>
          <span class="sidebar-item">关于内推</span>
          <span class="sidebar-item">关于笔试</span>
          <span class="sidebar-item">关于面试</span>
          <span class="sidebar-item">关于发展机会</span>`
        );

        top = 0;
      }

      $('.main .main-content>.content>.sidebar')
        .css('top', top + 'px')
        .children()
        .eq(0)
        .addClass('sidebar-item-active');

      // 显示侧边栏
      $('.main .main-content>.content>.sidebar')
        .show(
          0,
          () => criticalValue = $('.main .main-content>.content>.sidebar')
            .offset()
            .top - topValue
        );

      // 侧边栏点击功能
      $('.main-content .sidebar .sidebar-item').on('click', function () {
        $(this)
          .addClass('sidebar-item-active')
          .siblings()
          .removeClass('sidebar-item-active');

        $('body,html')
          .scrollTop(
            parseInt(
              item
                .eq($(this).index())
                .offset()
                .top - 60
            )
          );
      });


      // 窗口滚动与回到顶部功能
      $(window).on('scroll', () => {
        var y = $(window).scrollTop();
        var mainConHeight = $('.main-content').outerHeight(true) - 120;
        var mainConTop = mainConHeight - 80;

        // 滚动小于第一带结尾item类名的top值
        if (y <= item.eq(0).offset().top) {

          // 初始化第一个侧边栏的高亮
          $('.main-content .sidebar .sidebar-item')
            .eq(0)
            .addClass('sidebar-item-active')
            .siblings()
            .removeClass('sidebar-item-active');
        }

        // 侧边栏随页面滚动的目录效果功能
        item.each(function () {
          var el = $(this);
          var itemTop = el.offset().top;

          if (y > itemTop - 250) {
            $('.main-content .sidebar .sidebar-item')
              .eq(el.index())
              .addClass('sidebar-item-active')
              .siblings()
              .removeClass('sidebar-item-active');
          }
        });

        // 侧边栏与回到顶部随页面滚动的定位方式与显示隐藏功能
        switch (true) {
          case y > criticalValue && y < mainConTop:
            $('.main .main-content>.content>.sidebar').css({
              position: "fixed",
              top: topValue + "px",
              opacity: 1
            });

            $('.main .main-content .float-home')
              .show()
              .children()
              .css({
                position: "fixed",
                top: "unset",
                bottom: "80px"
              });

            break;

          case y > mainConTop:
            $('.main .main-content .float-home')
              .children()
              .css({
                position: "absolute",
                top: mainConHeight + 'px',
                bottom: "unset"
              });

            if (
              y > (mainConHeight + $('.sidebar').height()) &&
              $(window).innerHeight() < 478
            ) {
              $('.main .main-content>.content>.sidebar').css('opacity', 0);
            }

            break;

          default:
            $('.main .main-content>.content>.sidebar').css({
              position: "absolute",
              top: top,
              opacity: 1
            });

            $('.main .main-content .float-home')
              .hide()
              .children()
              .removeClass('float-home-fixed');

            break;
        }
      });
    }
  });

});
