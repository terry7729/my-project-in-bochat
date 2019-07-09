(function ($) {
  //如何给jQuery扩展方法呢?
  //jQuery的原型中的方法,jQuery对象都是可以访问的.
  $.fn.bgColor = function (bgc) {
    //console.log(this);//这个this是代表调用这个方法的对象,是一个jQuery对象.
    this.css('backgroundColor',bgc);

    //返回自身
    return this;
  }
}(jQuery));
