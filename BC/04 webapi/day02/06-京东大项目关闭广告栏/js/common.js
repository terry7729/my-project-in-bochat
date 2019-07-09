
/**
 * 根据id返回一个当前id的元素
 * @param id 参数，需要一个id
 * @returns {Element} 返回值，返回的就是这个id对应的元素。
 */
function  id (id){
  return document.getElementById(id);
}


//获取元素的文本。
function getText(ele){
  //能力检测-看执行当前这个代码的浏览器支不支持这个代码。
  if(ele.textContent == undefined){
    //如果到了这里，就说明这个浏览器是ie8及之前的。
    return ele.innerText;
  }else {
    //到了这里，就说明这个浏览器支持textContent
    return ele.textContent;
  }
}


//设置元素的文本
function setText(ele,txt){
  //能力检测
  if(ele.textContent == undefined){
    ele.innerText = txt;
  }else {
    ele.textContent = txt;
  }
}
