/*
** Create by 张晓坤 on 2018/11/28
*/

//将一些工具函数放到这个文件中


/**
 * 生成16进制随机颜色字符串
 * @return {string}
 */
function getRandomColor (  ) {
    var str = '#';
    var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    for (var i = 1;i<=6;i++){
        var index = Math.floor(Math.random()*16);
        str += arr[index];
    };
    console.log ( str );
    return str;
}