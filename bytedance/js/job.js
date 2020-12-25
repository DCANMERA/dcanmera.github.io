$(function () {
  var job_search = $('.main_box .job_search');
  var banner = $('.main_box .job_banner');
  var search = $('.main_box .job_search .search');
  var search_ipt = $('#search_s');
  var search_icon = $('.main_box .job_search .search .search_icon');
  var search_btn = $('.main_box .job_search .search .search_btn');
  var clear = $('.job_content .clear');
  var class_icon = $('.main_box .class_text .class_icon .icon');

  var data = [
    {
      classify: [
        '后端',
        '前端',
        '大数据',
        '测试',
        '算法',
        '客户端',
        '基础框架',
        '多媒体',
        '安全',
        '计算机视觉',
        '数据挖掘',
        '运维',
        '自然语言处理',
        '机器学习'
      ]
    },
    {
      classify: [
        '商业运营',
        '审核',
        '用户运营',
        '内容运营',
        '频道运营',
        '产品运营',
        '销售运营',
        '编辑',
        '内容引进',
        '客服',
        '游戏运营',
        '项目管理'
      ]
    },
    {
      classify: [
        '产品经理',
        '商业产品(广告)',
        '数据分析'
      ]
    },
    {
      classify: [
        '法务',
        '战略',
        '人力',
        '财务',
        '行政设施',
        'IT支持',
        '采购',
        '投资',
        '内审'
      ]
    },
    {
      classify: [
        '销售',
        '销售支持',
        '销售专员',
        '销售管理'
      ]
    },
    {
      classify: [
        'UI',
        '平面设计',
        '交互设计',
        '视觉设计',
        '用户研究',
        '多媒体设计',
        '3D动效',
        '游戏美术'
      ]
    },
    {
      classify: [
        '广告投放',
        '营销策划',
        'PR',
        '品牌',
        '政府关系',
        '商务拓展BD',
        '媒介公关'
      ]
    },
    {
      classify: [
        '教研',
        '主讲',
        '课程辅导',
        '教务管理'
      ]
    },
    {
      classify: [
        '游戏系统策划',
        '游戏数值策划',
        '游戏剧情策划',
        '游戏音频策划'
      ]
    }
  ];

  // 搜索框滚动
  $(window).scroll(function () {
    var gun_doc = $(window).scrollTop();
    if (gun_doc >= 450) {
      job_search.css({
        position: 'sticky',
        top: '0px',
        background: 'white',
        boxShadow: '0 2px 16px 0 rgba(31,35,41,.05)'
      });
      search_icon.css('line-height', '40px');
      search_btn.css('line-height', '40px');
      search_ipt.css('width', '830px');
      banner.css('margin-bottom', '0');
      search.css({
        height: '40px',
        position: 'abosolute',
        top: '20px',
        width: '55%'
      });
    } else {
      job_search.css({
        position: 'absolute',
        top: '390px',
        left: '50',
        background: 'none',
        boxShadow: 'none'
      });
      search.css({
        height: '58px',
        width: '800px'
      });
      banner.css('margin-bottom', '80px');
      search_icon.css('line-height', '56px');
      search_btn.css('line-height', '56px');
      search_ipt.css('width', '588px');
    }
  });

  // 分类
  $('.class_text').attr('data-flag', true);
  class_icon.children().css('transition', 'all .3s');
  class_icon.on('click', function () {
    var grandfather = $(this).parent().parent();
    var index = grandfather.index();
    var count = 0;
    var html = '';

    if (grandfather.attr('data-flag') == 'true') {
      $(this)
        .children()
        .css('transform', 'rotate(0deg)');

      html += '<ol class="class_two_tltle" id="class_two_tltle">';
      for (var item of data[index].classify) {
        count++;
        html += `<li>
                  <span class="class_two_checked">
                    <input type="checkbox" name="" id="two_checked">
                  </span>
                  <span class="class_two_text">${item}</span>
                </li>`;
      }
      html += '</ol>';

      grandfather
        .attr('data-flag', false)
        .css({
          marginBottom: count * 38 + 'px',
          overflow: 'unset'
        })
        .append(html)
        .find('.class_two_tltle')
        .css('transition', 'all .6s');

      return;
    }

    $(this)
      .children()
      .css('transform', 'rotate(-90deg)');

    grandfather
      .attr('data-flag', true)
      .css({
        overflow: 'hidden',
        marginBottom: 0
      })
      .find('.class_two_tltle')
      .remove();
  });

  //title提示
  $('.title_right').hover(
    function () {
      $(this)
        .parent()
        .children('div.titlebox:eq(0)')
        .show();
    },
    function () {
      $(this)
        .parent()
        .children('div.titlebox:eq(0)')
        .hide();
    }
  );

  $('#city_search').focus(function () {
    $('.city_search').addClass('active');
  });

  $('#city_search').blur(function () {
    $('.city_search').removeClass('active');
  });

  // 清除所有的复选框
  clear.on('click', () => {
    $('.job_content_left input[type="checkbox"]').prop('checked', false);
  });
});
