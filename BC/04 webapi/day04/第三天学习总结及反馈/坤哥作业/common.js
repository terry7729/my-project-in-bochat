/*
** Create by 张晓坤 on 2018/6/27
* 工具包封装：好处  便于维护/使用很方便,复用性高
* 本文件主要处理浏览器兼容性问题
* 获取元素常用方法
*/

/**
 * 1. 根据id获取元素
 * @param str  id字符串
 * @return {HTMLElement | null}  元素/null
 */
function id ( str ) {
    return document.getElementById(str);
}

/**
 * 2.获取元素文本内容兼容性封装
 * @param ele  元素
 * @return {*}   文本内容
 */
function getText ( ele ) {
    //能力检测
    if(ele.innerText == undefined){//获取不到，火狐42之前浏览器
        return ele.textContent;//直接获取textContent
    }else{//如果innerText可以使用（非IE8浏览器）
        return ele.innerText;
    }
}


/**
 * 3.设置元素文本内容兼容性封装
 * @param ele  元素
 * @param text  文本
 * @return {*}   无返回值
 */
function setText ( ele,text ) {
    //能力检测
    if(ele.innerText == undefined){//获取不到，火狐42之前浏览器
        ele.textContent = text;//直接获取textContent
    }else{//如果innerText可以使用（非IE8浏览器）
        ele.innerText = text;
    }
}


/**
 * 4.获取元素的上一个兄弟元素
 * @param ele 元素
 * @return 上一个元素
 */
function getPreviousElementSibling ( ele ) {
    if(ele.previousElementSibling){//只要previousElementSibling不是undeifined，条件成立
        return ele.previousElementSibling;//非IE8浏览器
    }else{
        var node = ele.previousSibling;//获取元素的上一个节点（注释 文本 null ）
        console.log ( node.nodeType );
        /*思路：如果上一个节点类型不是1，说明不是元素，就要继续往上找
        循环特点：（1）次数不固定
        （2）循环结束的条件固定：（2.1）node.nodeType == 1  || node == null
         while小括号，条件成立才会执行循环体： node.nodeType != 1 &&  node != null
         while(条件 true){
             node = node.previousSibling;
         }
         */
        while (node.nodeType != 1  &&  node != null){//如果能够找到上一个节点，并且上一个节点的类型不是1
            node = node.previousSibling;//继续寻找
        }
        return node;
    }
}

/**
 * 5.获取元素的下一个兄弟元素
 * @param ele 元素
 * @return 元素
 */
function getNextElementSibling ( ele ) {
    if(ele.nextElementSibling){//只要previousElementSibling不是undeifined，条件成立
        return ele.nextElementSibling;//非IE8浏览器
    }else{
        //IE8浏览器
        var node = ele.nextSibling;//上一个节点 文本  注释  元素  null
        /*while循环
        结束条件：可以找到节点，并且节点类型是1
         */
        while(node != null && node.nodeType != 1){//只要节点存在并且类型不是1，就说明一定不是元素节点，继续寻找
            node = node.nextSibling;//继续找上一个
        }
        //只要节点的类型是1，就结束寻找，返回找到的节点
        return node;
    }
}

/**
 * 6.获取第一个子元素
 * @param ele  父元素
 * @return {*} 第一个子元素
 */
function getfirstElementChild  ( ele ) {
    if(ele.firstElementChild){
        return ele.firstElementChild;//非IE8浏览器
    }else{
        //IE8 需要通过节点来获取
        var node = ele.firstChild;
        while (node.nodeType != 1 && node != null){
            node = node.nextSibling;
        }
        return node;
    }
}

/**
 * 7.获取元素的最后一个子元素
 * @param ele 元素
 * @return {*} 最后子元素
 */
function getlastElementChild ( ele ) {
    if(ele.lastElementChild){//非IE8
        return ele.lastElementChild;
    }else{//IE
        var node = ele.lastChild;//获取最后一个节点
        while (node.nodeType != 1 && node != null){
            node = node.previousSibling;//找上一个节点
        }
        return node;
    }
}