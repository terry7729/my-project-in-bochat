window.addEventListener('load', function() {
    var jd = new JD();
    //调用初始化左侧swiper滑动函数
    jd.initSwiperLeft();
    // 调用初始化右侧swiper滑动函数
    jd.initSwiperRight();
    // 调用 左侧分类菜单的点击功能函数
    jd.categoryLeftTap();
});

var JD = function() {

}

JD.prototype = {
    //初始化左侧swiper滑动函数
    initSwiperLeft: function() {
        var swiper = new Swiper('.category-left .swiper-container', {
            direction: 'vertical', //滑动方向垂直
            slidesPerView: 'auto', //支持多张轮播图一起滑动
            freeMode: true, //回弹效果
            mousewheel: true, //支持鼠标滚轮滚动
        });
    },
    //初始化右侧swiper滑动
    initSwiperRight: function() {
        var swiper = new Swiper('.category-right .swiper-container', {
            direction: 'vertical', //滑动方向垂直
            slidesPerView: 'auto', //支持多张轮播图一起滑动
            freeMode: true, //回弹效果
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true, //支持鼠标滚轮滚动
        });
    },
    //左侧分类菜单的点击功能
    categoryLeftTap: function() {
        // 1. 给分类左侧添加点击事件
        var lis = document.querySelectorAll('.category-left ul li');
        for (var i = 0; i < lis.length; i++) {
            // 2. 给所有li添加一个索引
            //给JS对象添加的index属性   页面中看不到的
            lis[i].index = i;
            //给标签的元素添加的属性   页面中能看得到
            // lis[i].setAttribute('index', i);
            // lis[i].addEventListener('click', function() {
            //     // 获取JS对象的属性的值
            //     // console.dir(this.index);
            //     // 获取 标签中的属性的值
            //     // console.dir(this.getAttribute('index'));
            //     //3. 获取当前点击li的索引
            //     var index = this.index;
            //     var liHeight = this.offsetHeight;
            //     console.log(index);
            //     console.log(liHeight);
            //     // 4. 计算当前点击菜单的位移的距离  往上走是负值
            //     var translateY = -index * liHeight;
            //     // 5. 计算当前最大的位移的距离 - (子元素高度-父元素的高度)
            //     var maxTranslateY = -(document.querySelector('ul').offsetHeight - document.querySelector('.category-left').offsetHeight);
            //     // 6. 判断当前位移的距离是否超过了最大的位移距离
            //     //负值是越小越大  -1300 < -1200
            //     if (translateY < maxTranslateY) {
            //         //超过了最大位移距离设置为最大位移距离
            //         translateY = maxTranslateY;
            //     }
            //     // 7. 设置 左边的 swiper-wrapper的位移为当前计算的位移 注意设置位移的时候一定要带px单位
            //     document.querySelector('.category-left .swiper-wrapper').style.transform = 'translate3d(0px,' + translateY + 'px,0px)';
            //     // 8. 设置过渡效果  注意也要带单位   
            //     document.querySelector('.category-left .swiper-wrapper').style.transition = 'all 0.2s';
            //     // 9. 点击的时候先删除所有li的active类名
            //     for (var i = 0; i < lis.length; i++) {
            //         //使用H5里面的类名操作的方法删除当前active类名
            //         lis[i].classList.remove('active');
            //     }
            //     //10. 给当前点击li添加active类名
            //     this.classList.add('active');
            // });
            //使用自己封装的tap事件完成分类左侧的点击
            lis[i].tap1(function() {
                // 获取JS对象的属性的值
                // console.dir(this.index);
                // 获取 标签中的属性的值
                // console.dir(this.getAttribute('index'));
                //3. 获取当前点击li的索引
                //也要保证自己封装的tap事件获取的当前触发事件的dom元素
                // console.log(this);
                var index = this.index;
                var liHeight = this.offsetHeight;
                // console.log(index);
                // console.log(liHeight);
                // 4. 计算当前点击菜单的位移的距离  往上走是负值
                var translateY = -index * liHeight;
                // 5. 计算当前最大的位移的距离 - (子元素高度-父元素的高度)
                var maxTranslateY = -(document.querySelector('ul').offsetHeight - document.querySelector('.category-left').offsetHeight);
                // 6. 判断当前位移的距离是否超过了最大的位移距离
                //负值是越小越大  -1300 < -1200
                if (translateY < maxTranslateY) {
                    //超过了最大位移距离设置为最大位移距离
                    translateY = maxTranslateY;
                }
                // 7. 设置 左边的 swiper-wrapper的位移为当前计算的位移 注意设置位移的时候一定要带px单位
                document.querySelector('.category-left .swiper-wrapper').style.transform = 'translate3d(0px,' + translateY + 'px,0px)';
                // 8. 设置过渡效果  注意也要带单位   
                document.querySelector('.category-left .swiper-wrapper').style.transition = 'all 0.2s';
                // 9. 点击的时候先删除所有li的active类名
                for (var i = 0; i < lis.length; i++) {
                    //使用H5里面的类名操作的方法删除当前active类名
                    lis[i].classList.remove('active');
                }
                //10. 给当前点击li添加active类名
                this.classList.add('active');
            })
        }
    }
}

//把一个函数 挂载到对象的原型对象里面 所有对象都能访问到当前的函数
Object.prototype.tap1 = function(callback) {
    // 把callback赋值给当前this.callback
    this.callback = callback;
    //this就是函数的调用者 当前div 后面直接给this添加事件 就是给当前调用div添加事件
    // console.log(this);
    //定义一变量  isMove 用来记录是否触发了touchmove
    var isMove = false;
    this.addEventListener('touchstart', function() {})
    this.addEventListener('touchmove', function() {
        //如果触发了touchmove表示当前触发了移动操作
        isMove = true;
    })
    this.addEventListener('touchend', function() {
        //判断如果isMove 还是为false 表示没有执行touchmove事件 是一个单击操作
        if (isMove == false) {
            // callback.call(this);
            // callback.apply(this);
            //使用当前this.callback调用自身的callback
            this.callback();
        }
        //每次移动完成后 重置isMove为false
        isMove = false;
    })
};
