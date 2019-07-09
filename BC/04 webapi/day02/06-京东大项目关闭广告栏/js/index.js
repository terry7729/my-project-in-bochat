
//-------------1.点击顶部关闭按钮隐藏banner条-----------------------------

//1.获取元素
var closeTopAd = document.getElementById('closeTopAd');
var banner = document.getElementById('banner');

//2.注册事件
closeTopAd.onclick = function (  ) {
    //3.事件处理：隐藏banner

    // //3.1 设置display属性为none
    // banner.style.display = 'none';

    //3.2 设置innerHTML为空字符串
    banner.innerHTML = '';
    //innerHTML只能修改元素的内容，不能修改元素的自身，banner自身的样式还在
    banner.style.height = '0px';
}

//-------------页面顶部广告结束-----------------------------
