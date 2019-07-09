/*
** Create by 张晓坤 on 2018/11/28
*/

(function  (  window) {
    //1.构造游戏对象:食物  蛇
    function Game (  ) {
        //食物对象 蛇对象  都是局部变量
        this.food = new Food();
        this.snake = new Snake();
        this.map =map;//将页面map作为属性

        this.food.render(this.map);
        this.snake.render(this.map);
    };


    var timeID = null;//声明变量存储定时器ID
    //2.开始游戏
    Game.prototype.start = function (  ) {
        //this:调用这个方法的game对象
        console.log ( this );//game对象
        //注册键盘事件
        //2.注册事件：给window注册键盘按下
        window.onkeydown = function ( e ) {

            //this:指向window

            e = e || window.event;
            var code =  e.keyCode || e.charCode || e.which;
            console.log ( code );
            //根据键盘按键修改蛇移动方向
            /*细节：蛇不能倒着移动*/
            switch (code){
                case 37:
                    // left
                    if (this.snake.direction != 'right'){
                        this.snake.direction = 'left';
                    }
                    break;
                case 38:
                    // top
                    if (this.snake.direction != 'bottom'){
                        this.snake.direction = 'top';
                    }
                    break;
                case 39:
                    // right
                    if (this.snake.direction != 'left'){
                        this.snake.direction = 'right';
                    }
                    break;
                case 40:
                    // bottom
                    if (this.snake.direction != 'top'){
                        this.snake.direction = 'bottom';
                    }
                    break;
            };

            //清除之前的定时器，以本次移动为准
            clearInterval(timeID);
            //事件处理
           timeID = setInterval(function (  ) {
               /*定时器中的this默认指向：window*/
               //1.蛇移动
               this.snake.move(this.map);
               //2.边界检测
               if (this.snake.body[0].x < 0 || this.snake.body[0].x >= this.map.offsetWidth/this.snake.width){
                   alert('Game Over');
                   window.location.reload();//刷新页面，游戏重新开始
               };
               if (this.snake.body[0].y <0 || this.snake.body[0].y >= this.map.offsetHeight/this.snake.height){
                   alert('Game Over');
                   window.location.reload();//刷新页面，游戏重新开始
               };
               //3:吃食物（蛇头位置与食物位置完全一致）
               if (this.snake.body[0].x == this.food.x  && this.snake.body[0].y == this.food.y){
                   //3吃食物
                   this.snake.eat(this.food,this.map);
                   //4:刷新食物
                   //4.1 先移除旧食物
                   this.map.removeChild(this.food.ele);
                   //4.2 重新生成新的食物并显示
                   this.food = new Food();//重新赋值食物会把旧食物覆盖
                   this.food.render(this.map);
               }
           }.bind(this),100);
        }.bind(this);//事件外面的this指向game对象，而事件里面的this指向window。 将事件里面的this改成外面的this(game)
    }


    //暴露接口
    window.Game = Game;
})(window)