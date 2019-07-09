/*
** Create by 张晓坤 on 2018/11/18
*/

/**1.匀速动画封装
 * @param ele 要移动的元素
 * @param target  目标距离
 */
function animationMove ( ele,target ) {
    //1.先清除之前的定时器，以本次移动为准
    clearInterval(ele.timeID);
    //2.开始本次移动
    ele.timeID = setInterval(function (  ) {
        //2.1 获取元素当前的位置
        var currentLeft = ele.offsetLeft;
        //2.2 开始移动
        var isLeft =  currentLeft < target?true:false;
        isLeft?currentLeft+=20:currentLeft-=20;
        ele.style.left = currentLeft + 'px';
        //2.3 边界检测
        if (isLeft?currentLeft>=target:currentLeft <= target){
            //(1)停止定时器
            clearInterval(ele.timeID);
            //(2)元素复位
            ele.style.left = target + 'px';
        }
    },10);
}