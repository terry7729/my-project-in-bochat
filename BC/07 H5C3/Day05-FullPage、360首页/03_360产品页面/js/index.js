$(function () {

    //初始化代码
    $('#itcast').fullpage({
        navigation: true,
        sectionsColor: ['#00bfff', '#9acd32', '#ffa500', '#008000', '#87ceeb'],
        afterLoad:function(a,index){

            // $('.section1').addClass('animation');
            // $('.section2').addClass('animation');

            // 谁滚出来，才让谁加animation
            // $('.section').eq(0); //找到第一屏  index=1
            // $('.section').eq(1); //找到第二屏  index=2
            // $('.section').eq(2); //找到第三屏  index=3

            //谁滚出来就找到谁，并给谁加animation，然后让所有其他的其他屏复原（删掉animation这个类）
            $('.section').eq(index - 1).addClass('animation').siblings().removeClass('animation');
        }
    });
})