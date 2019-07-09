$(function () {

    $('#itcast').fullpage({
        navigation: true,
        sectionsColor: ['#f9dd67', '#84a2d4', '#ef674d', '#ffeedd', '#cf4759', '#85d9ed', '#8ac060', '#84d9ed'],
        afterLoad: function (a, index) {

            //还原
            // $('.section2 .search01').removeAttr('style');
            // $('.section2 .search02').removeAttr('style');
            // $('.section2 .sofas').removeAttr('style');

            // 可以缩减成下面一句话
            $('.section>div img').removeAttr('style');
            $('.section>div div').removeAttr('style');


            //谁滚出来，就给谁加一个animation
            $('.section').eq(index - 1).addClass('animation').siblings().removeClass('animation');


            if (index == 2) {

                // 默认运动曲线只有swing和linear两种，用了jquery.easing后就扩展了运动曲线
                $('.section2 .search01').animate({
                    marginLeft: -111

                }, 1000, 'easeOutBack', function () {

                    //把search01隐藏
                    $('.section2 .search01').hide();
                    //把search02显示
                    $('.section2 .search02').show();

                    //往右上走并缩小
                    $('.section2 .search02').delay(500).animate({

                        marginLeft: 130,
                        marginBottom: 450,
                        width: 148
                    }, 1000);

                    //同时把沙发放大
                    $('.section2 .sofas').delay(500).animate({
                        width: 441
                    }, 1000);
                });
            } else if (index == 4) {

                //第四屏
                $('.section4 .carBox').animate({
                    marginLeft: 2000

                }, 2500, 'easeInElastic', function () {

                    //显示出键盘
                    $('.section4 .keyboard').animate({

                        opacity: 1
                    }, 800);
                });
            } else if (index == 6) {

                $('.section6 .giftBox').animate({

                    top: 10

                }, 1000, function () {

                    $('.section6 .street').animate({

                        backgroundPositionX: -1300
                    }, 2500,function(){

                        //当车停下来，人下车(放大)
                        $('.section6 .man').animate({

                            height:140

                        },800,function(){
                            
                            // 人放大后往右边
                            $('.section6 .man').animate({

                                right:-150

                            },800,function(){

                                //把门显示出来
                                $('.section6 .door').show();
                               
                                setTimeout(function(){

                                    $('.section6 .girl').show();
                                },500);
                            });
                        });
                    });
                });


            }

        }
    });

    // 第八屏鼠标移入
    $('.section8').mousemove(function(e){
        
        $('.section8 .hand').css('left',e.pageX - 70);
        $('.section8 .hand').css('top',e.pageY - 5); 
    });

    // 再来一次的点击事件
    $('.section8 .again').click(function(){

        //fullpage插件自带了一个滚动到某一屏去的方法
        $.fn.fullpage.moveTo(1);
    });

})