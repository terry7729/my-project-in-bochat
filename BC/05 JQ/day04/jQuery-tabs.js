(function ($) {
  /**
   * 给$的原型添加tabs方法.
   * @param options 对象 传入的参数
   * @param options.tabHeads       点击的页签们选择器
   * @param options.tabHeadsClass  被点击的那个页签所拥有的样式类
   * @param options.tabBodys       要显示的页面div们选择器
   * @param options.tabBodysClass  选中的那个页面div所拥有的样式类
   */
  $.fn.tabs = function (options) {
    var bigDiv =  this;//先把这个方法中的this存起来.
    //给要点击的页签们设置点击事件.
    $(options.tabHeads).on('click', function () {
      //当前鼠标点击的这个页签添加传入的这个类, 他的兄弟们移除这个传入的类.
      $(this).addClass(options.tabHeadsClass).siblings().removeClass(options.tabHeadsClass);
      //找到这个鼠标点击的页签的索引.
      var idx = $(this).index();
      //要显示的页面们索引对应的那个页面,添加传入的options.tabHeadsClass类,他的兄弟们移除这个类.
      $(options.tabBodys).eq(idx).addClass(options.tabBodysClass).siblings().removeClass(options.tabBodysClass);

    });

    //返回调用这个tabs方法的"人"
    return bigDiv;
  }
}(jQuery));
