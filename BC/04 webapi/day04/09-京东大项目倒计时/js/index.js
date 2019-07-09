
//-------------页面顶部广告开始-----------------------------
//1.获取元素
var closeTopAd = id("closeTopAd");
var banner = id("banner");
//2.给关闭按钮注册一个单击事件
closeTopAd.onclick = function () {

    //第一种方式：隐藏banner
    //banner.style.display = "none";

    //2.第二种方式：清空banner的innerHTML
    //2.1 清空banner  这个div里面的内容
    banner.innerHTML = "";
    //2.2 把banner 这个div的高度设置为0
    // banner.style.height = "0";

}
//-------------页面顶部广告结束-----------------------------


//-----------------页面秒杀部分开始-------------------------------------\

/*思路分析
    1.开启定时器，每隔1s执行
        * 2.获取页面元素的文本  h m s
        * 3. s--
        * 4.如果s < 0,s = 59，m--
        * 5.如果m < 0, m= 59，h--
        * 6.如果 h m s 小于10，则在前面加上0
        * 7.将计算好的时分秒重新赋值给页面的元素    *

 */

//1.开启定时器
setInterval(function (  ) {
    //2.1 获取当前元素的时分秒
    var spanHour = document.getElementById('spanHour');
    var spanMin = document.getElementById('spanMin');
    var spanSec = document.getElementById('spanSec');

    var h = spanHour.innerText;
    var m = spanMin.innerText;
    var s = spanSec.innerText;
    //2.2 s--
    s--;//自减运算符可以隐式类型转换

    //2.3 如果s < 0,s = 59，m--
    if (s<0){
        s = 59;
        m--;
    }
    //2.4 如果m < 0, m= 59，h--
    if (m<0){
        m = 59;
        h--;
    }

    //2.5 如果h m s小于10，则在前面加上0

    /*细节： h m s默认是字符串，一般字符串不会与数字比较大小与计算，这里需要转成number在计算
   语意：  parseInt  parseFloat  Number      +num
    * */
    h = parseInt(h);
    m = parseInt(m);
    s = parseInt(s);

   h = h<10?'0' + h:h;
   m = m<10?'0' + m:m;
   s = s<10?'0' + s:s;
    //2.6 将计算好的时分秒重新赋值给页面的元素

    spanHour.innerText = h;
    spanMin.innerText = m;
    spanSec.innerText = s;
},1000)




//-----------------页面秒杀部分结束-------------------------------------
