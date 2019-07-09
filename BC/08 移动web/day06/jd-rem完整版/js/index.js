// 1. 添加一个onload事件 等待页面元素资源加载完毕执行的代码
// addEventListener HTML5新增的添加事件的方法 添加多个事件 支持冒泡捕获 兼容最新浏览器和最新的事件
window.addEventListener('load', function() {
    //调用搜索框渐变函数
    // searchGradient();
    //调用倒计时函数
    // countDown();
    //调用轮播图函数
    // slide();

    //调用对象里面的函数的方式
    // JD.searchGradient();
    // JD.countDown();
    // JD.slide();
    //创建JD构造函数的实例
    var jd = new JD();
    //调用实例对象里面的搜索渐变方法
    jd.searchGradient();
    jd.countDown();
    jd.slide();
});
// //搜索框渐变函数
// function searchGradient() {
//     // 获取轮播图元素 
//     var slide = document.querySelector('#slide');
//     // 获取顶部搜索的元素
//     var header = document.querySelector("#header");
//     //搜索框渐变
//     // 1. 添加滚动条滚动的事件在事件里面不断获取滚动条的距离
//     window.addEventListener('scroll', function() {
//         // 2. 获取滚动条滚动的距离 为了兼容处理使用|| 如果前面存在就使用前面的值 不存在使用后面的值
//         var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//         // console.log(scrollTop);
//         // 3. 获取当前轮播的高度
//         var slideHeight = slide.offsetHeight;
//         // console.log(slideHeight);
//         // 4. 计算当前的透明度
//         var opacity = scrollTop / slideHeight;
//         // console.log(opacity);
//         // 5. 设置透明度到头部背景色颜色的rgba里面
//         header.style.backgroundColor = 'rgba(222, 24, 27,' + opacity + ')';
//     });
// }
// //倒计时函数
// function countDown() {
//     //倒计时

//     // 1. 获取未来的时间
//     // new Date初始化日期对象 传递参数 以指定的日期初始化
//     // 注意月份在国外是从0-11月   国外星期 0 - 6  现在是10月 写9
//     // getTime方法把日期对象转成毫秒数 从1970.1.1.0.0.0- 今天中午12点的毫秒数
//     // 使用毫秒数/1000求到秒数
//     var futureTime = new Date(2018, 9, 21, 12, 00, 00).getTime() / 1000;
//     // 2. 获取当前的时间 求到秒数
//     var nowTime = new Date().getTime() / 1000;
//     // console.log(futureTime-nowTime);
//     // 3. 计算总时间 = 未来时间-当前时间
//     var time = futureTime - nowTime;
//     //注意带all获取所有span
//     var spans = document.querySelectorAll('.seckill-time span');
//     // 4. 定义一个定时器 每个1秒执行一次
//     var timeId = setInterval(function() {
//         // 5. 总时间--
//         time--;
//         downtime();
//     }, 1000);
//     // 页面加载马上调用实现倒计时
//     downtime();

//     function downtime() {
//         if (time <= 0) {
//             //重置为7200
//             time = 7200;
//             // 清除定时器
//             // clearInterval(timeId);
//         }
//         // 6. 计算当前总时间的时 分 秒
//         // 1小时 60  1 分钟 60  1小时=3600    3600/3600 == 1  7200/3600=2  10800 / 3600 = 3
//         // 超过1小时 剩下是属于分钟 向下取整
//         var hour = Math.floor(time / 3600);
//         console.log(hour);
//         // 1 分钟 60 秒   60 / 60 == 1  120/60 == 2 180/60 == 3   3660/60 == 61   7260/121   
//         // 向下取整
//         var minute = Math.floor(time / 60 % 60);
//         console.log(minute);
//         // 61 % 60 = 1  121 % 60 = 1 秒数 只要是60以内的都是秒数
//         var second = Math.floor(time % 60);
//         console.log(second);
//         // 分别计算时分秒的十位和个位设置到页面中 十位使用 时间/10  个位 使用时间%10
//         spans[0].innerHTML = Math.floor(hour / 10);
//         spans[1].innerHTML = Math.floor(hour % 10);
//         spans[3].innerHTML = Math.floor(minute / 10);
//         spans[4].innerHTML = Math.floor(minute % 10);
//         spans[6].innerHTML = Math.floor(second / 10);
//         spans[7].innerHTML = Math.floor(second % 10);
//     }
// }
// //轮播图函数
// function slide() {
//     //轮播图的初始化
//     // 4. 初始化swiper插件  传入一个swiper大容器  传入一些配置项 对象形式 属性:值
//     var mySwiper = new Swiper('.swiper-container', {
//         direction: 'horizontal', // 垂直切换选项
//         loop: true, // 循环模式选项
//         autoplay: true,
//         autoplay: {
//             delay: 1000, //自动轮播图间隔时间
//             stopOnLastSlide: false, //是否在轮播图到最后一张停止自动轮播图 开启loop失效
//             disableOnInteraction: false, //是否在滑动后要禁止自动轮播图  true禁止 false不禁止
//         },
//         // 如果需要分页器
//         pagination: {
//             el: '.swiper-pagination',
//         },

//         // 如果需要前进后退按钮
//         // navigation: {
//         //     nextEl: '.swiper-button-next',
//         //     prevEl: '.swiper-button-prev',
//         // },

//         // 如果需要滚动条
//         // scrollbar: {
//         //     el: '.swiper-scrollbar',
//         // },
//     })
// }

// 创建一个JD对象
// var JD = new Object();
// // 给JD对象添加3个属性  属性的值都是一个函数  这些属性是JD对象 不是全局的  只会污染一个JD对象
// JD.searchGradient = function (dom) {
//     // 获取轮播图元素 
//     var slide = document.querySelector('#slide');
//     // 获取顶部搜索的元素
//     var header = document.querySelector("#header");
//     //搜索框渐变
//     // 1. 添加滚动条滚动的事件在事件里面不断获取滚动条的距离
//     window.addEventListener('scroll', function() {
//         // 2. 获取滚动条滚动的距离 为了兼容处理使用|| 如果前面存在就使用前面的值 不存在使用后面的值
//         var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//         // console.log(scrollTop);
//         // 3. 获取当前轮播的高度
//         var slideHeight = slide.offsetHeight;
//         // console.log(slideHeight);
//         // 4. 计算当前的透明度
//         var opacity = scrollTop / slideHeight;
//         // console.log(opacity);
//         // 5. 设置透明度到头部背景色颜色的rgba里面
//         header.style.backgroundColor = 'rgba(222, 24, 27,' + opacity + ')';
//     });
// }
// JD.countDown = function (dom) {
    
// }
// JD.slide = function (dom) {
    
// }

// JD.name = '张三';

//创建JD构造函数的实例对象 实例对象里面拥有构造函数的prototype里面的所有的属性和方法
// var jd = new JD();
//创建一个JD构造函数
var JD = function () {
   
}
JD.prototype = {
    searchGradient:function () {        
        // 获取轮播图元素 
        var slide = document.querySelector('#slide');
        // 获取顶部搜索的元素
        var header = document.querySelector("#header");
        //搜索框渐变
        // 1. 添加滚动条滚动的事件在事件里面不断获取滚动条的距离
        window.addEventListener('scroll', function() {
            // 2. 获取滚动条滚动的距离 为了兼容处理使用|| 如果前面存在就使用前面的值 不存在使用后面的值
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(scrollTop);
            // 3. 获取当前轮播的高度
            var slideHeight = slide.offsetHeight;
            // console.log(slideHeight);
            // 4. 计算当前的透明度
            var opacity = scrollTop / slideHeight;
            // console.log(opacity);
            // 5. 设置透明度到头部背景色颜色的rgba里面
            header.style.backgroundColor = 'rgba(222, 24, 27,' + opacity + ')';
        });
    },

    
    countDown:function() {
        //倒计时

        // 1. 获取未来的时间
        // new Date初始化日期对象 传递参数 以指定的日期初始化
        // 注意月份在国外是从0-11月   国外星期 0 - 6  现在是10月 写9
        // getTime方法把日期对象转成毫秒数 从1970.1.1.0.0.0- 今天中午12点的毫秒数
        // 使用毫秒数/1000求到秒数
        var futureTime = new Date(2018, 9, 21, 12, 00, 00).getTime() / 1000;
        // 2. 获取当前的时间 求到秒数
        var nowTime = new Date().getTime() / 1000;
        // console.log(futureTime-nowTime);
        // 3. 计算总时间 = 未来时间-当前时间
        var time = futureTime - nowTime;
        //注意带all获取所有span
        var spans = document.querySelectorAll('.seckill-time span');
        // 4. 定义一个定时器 每个1秒执行一次
        var timeId = setInterval(function() {
            // 5. 总时间--
            time--;
            downtime();
        }, 1000);
        // 页面加载马上调用实现倒计时
        downtime();

        function downtime() {
            if (time <= 0) {
                //重置为7200
                time = 7200;
                // 清除定时器
                // clearInterval(timeId);
            }
            // 6. 计算当前总时间的时 分 秒
            // 1小时 60  1 分钟 60  1小时=3600    3600/3600 == 1  7200/3600=2  10800 / 3600 = 3
            // 超过1小时 剩下是属于分钟 向下取整
            var hour = Math.floor(time / 3600);
            console.log(hour);
            // 1 分钟 60 秒   60 / 60 == 1  120/60 == 2 180/60 == 3   3660/60 == 61   7260/121   
            // 向下取整
            var minute = Math.floor(time / 60 % 60);
            console.log(minute);
            // 61 % 60 = 1  121 % 60 = 1 秒数 只要是60以内的都是秒数
            var second = Math.floor(time % 60);
            console.log(second);
            // 分别计算时分秒的十位和个位设置到页面中 十位使用 时间/10  个位 使用时间%10
            spans[0].innerHTML = Math.floor(hour / 10);
            spans[1].innerHTML = Math.floor(hour % 10);
            spans[3].innerHTML = Math.floor(minute / 10);
            spans[4].innerHTML = Math.floor(minute % 10);
            spans[6].innerHTML = Math.floor(second / 10);
            spans[7].innerHTML = Math.floor(second % 10);
        }
    },
    slide:function() {
        //轮播图的初始化
        // 4. 初始化swiper插件  传入一个swiper大容器  传入一些配置项 对象形式 属性:值
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: true,
            autoplay: {
                delay: 1000, //自动轮播图间隔时间
                stopOnLastSlide: false, //是否在轮播图到最后一张停止自动轮播图 开启loop失效
                disableOnInteraction: false, //是否在滑动后要禁止自动轮播图  true禁止 false不禁止
            },
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },

            // 如果需要滚动条
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
        })
    }
}