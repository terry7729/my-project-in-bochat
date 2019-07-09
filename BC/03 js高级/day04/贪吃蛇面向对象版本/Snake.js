/*
** Create by 张晓坤 on 2018/11/28
*/

/*
沙箱模式：
    a.独立空间，避免全局变量污染
    b.模块化开发
 */

(function  (window  ) {
    /**1.蛇对象构造函数
     * @param width:每一节身体宽度
     * @param height:每一节身体高度
     * @param direction:移动方向  'left' 'right' 'bottom' 'top'
     */
    function Snake (width,height,direction ) {
        this.width = width || 20;
        this.height = height || 20;
        this.direction = direction || 'right';
        this.body = [//身体数组  第一个元素是蛇头
            {x:3,y:2,bgColor:'red'},
            {x:2,y:2,bgColor:getRandomColor()},
            {x:1,y:2,bgColor:getRandomColor()}
        ];
        this.snakeElements = [];//声明一个空数组用于存储每一节身体的div，用于移除
    };

    //2.每一条蛇都可以添加到页面，写在原型中
    Snake.prototype.render = function (map  ) {
        //this:指向调用这个方法的蛇对象
        for(var i = 0;i<this.body.length;i++){
            //1.创建元素
            var div = document.createElement('div');
            //2.设置属性
            div.style.position = 'absolute';
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = this.body[i].x * this.width + 'px';
            div.style.top =this.body[i].y * this.height + 'px';
            div.style.backgroundColor = this.body[i].bgColor;

            this.snakeElements.push(div);
            //3.添加到页面
            map.appendChild(div);
        }
    }

    /*3.蛇move:移动方法*/
    Snake.prototype.move = function ( map ) {
        //this:指向调用这个方法的蛇对象
        //(1)蛇的每一节身体位置是前一节身体位置   (倒着从蛇尾遍历,蛇头不用遍历)
        for(var i = this.body.length-1;i>0;i--){
            this.body[i].x =  this.body[i-1].x;
            this.body[i].y =  this.body[i-1].y;
        };
        //(2)蛇头位置取决于移动方向
        switch (this.direction){
            case 'left':
                this.body[0].x--;
                break;
            case 'top':
                this.body[0].y--;
                break;
            case 'right':
                this.body[0].x++;
                break;
            case 'bottom':
                this.body[0].y++;
                break;
        };
        //3.移除旧蛇
        this.remove(map);
        //4.重新显示新蛇
        this.render(map);
    }

    /*4.eat:蛇吃食物方法*/
    Snake.prototype.eat = function ( food,map ) {
        //this:指向调用这个方法的蛇对象
        //1.记录蛇尾的位置，将食物添加到body最后面
        var snakeLastX = this.body[this.body.length-1].x;
        var snakeLastY = this.body[this.body.length-1].y;
        this.body.push({
            x:snakeLastX,
            y:snakeLastY,
            bgColor:food.bgColor
        });
        //2.移除旧蛇
        this.remove(map);
        //3.重新显示新蛇
        /*此时蛇的身体会变长，但是食物位置与蛇尾位置重叠，下一次移动的时候，由于每一节身体位置前移，
        食物位置不变，还是原先蛇尾的位置，而原蛇尾已经前移了
         */
        this.render(map);
    };

    /*5.remove:蛇移除旧身体*/
    Snake.prototype.remove = function ( map ) {
        for(var i = 0;i<this.snakeElements.length;i++){
            map.removeChild(this.snakeElements[i]);//移除dom中的div
            this.snakeElements.shift();//内存移除
            i--//抵消i自增
        };
    }

    //6.暴露接口
    window.Snake = Snake;
})(window)