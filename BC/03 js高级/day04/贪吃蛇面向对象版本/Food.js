/*
** Create by 张晓坤 on 2018/11/28
*/

/*面向对象：将与食物对象相关功能封装到这个文件，外部只暴露对应的接口即可
        沙箱模式：一种封闭的内存空间（局部作用域）,通常都是自调用函数
 */

(function  (  window ) {

    //1.构造函数
    function Food ( width,height,x,y,bgColor ) {
        this.width = width || 20;
        this.height = height || 20;
        this.x = x || 0;
        this.y = y || 0;
        this.bgColor = bgColor || getRandomColor();
    };
    //2.显示到页面：每一个食物都可以添加到页面，写在原型中
    Food.prototype.render = function ( map ) {
        //this指向：调用这个方法的食物对象
        //1.创建空标签
        var div =  document.createElement('div');
        //2.设置属性
        div.style.position = 'absolute';
        div.style.width =this.width + 'px';
        div.style.height =this.height + 'px';
        //如果this.x不是0，则值不变。如果是0，则随机单位位置    map.offsetWidth/this.width = 800/20 = 40格子数
        this.x = this.x ||  Math.floor(Math.random()* map.offsetWidth/this.width);
        this.y = this.y ||  Math.floor(Math.random()* map.offsetHeight/this.height);
        div.style.left = this.x * this.width + 'px';
        div.style.top = this.y * this.height + 'px';
        div.style.backgroundColor =this.bgColor;
        this.ele = div;//动态添加一个ele元素存储页面的div，用于移除
        //3.添加到页面
        map.appendChild(div);
    }

    //3：暴露接口
    window.Food = Food;
})(window);

