(function ($) {
  /**
   * 给$的原型添加一个table方法.
   * @param arrThead 数组  生成表头的数据
   * @param arrTbody 数组  生成表格的主体数据
   */
  $.fn.table = function (arrThead,arrTbody) {
    //这个方法就是要生成一个表格.
    var list = [];
    list.push('<table>');
    //表头
    list.push('<tr>');
    for(var i = 0 ; i < arrThead.length; i++){
    	list.push('<th>');
        list.push(arrThead[i]);
    	list.push('</th>');
    }
    list.push('</tr>');
    //主体部分
    for(var j  = 0 ; j < arrTbody.length; j++){
      list.push('<tr>');
      //生成一个序号列
      list.push('<td>'+(j+1)+'</td>')
      for(var key in arrTbody[j]){
        list.push('<td>');
        list.push(arrTbody[j][key]);
        list.push('</td>');
      }
      list.push('</tr>');
    }
    list.push('</table>');


    //把这个list里面的元素拼接成一个字符串.这个字符串交给this的html.
    this.html(list.join(""));

    //返回自己
    return this;
  }
}(jQuery));
