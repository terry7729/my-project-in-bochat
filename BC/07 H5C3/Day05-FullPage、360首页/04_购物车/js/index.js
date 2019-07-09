$(function () {
    $('#itcast').fullpage({
        navigation: true,
        sectionsColor: ['#f9dd67', '#84a2d4', '#ef674d', '#ffeedd', '#cf4759', '#85d9ed', '#8ac060', '#84d9ed'],
        afterLoad: function (a, index) {
            $('.section').eq(index-1).addClass('animation').siblings().removeClass('animation');
            $('.section>div> img').removeAttr('style');
            $('.section>div> div').removeAttr('style');
            if (index == 2) {
                $('.section2 .search01').animate({
                    marginLeft: -111
                }, 1000, 'easeOutBack', function () {
                    $('.section2 .search01').hide();
                    $('.section2 .search02').show();
                    $('.section2 .search02').delay(500).animate({
                            marginLeft: 130,
                            marginBottom: 450,
                            width: 148
                        }, 1000),
                        $('.section2 .sofas').delay(500).animate({
                            width: 441
                        }, 1000)

                })
            }

            if (index==4) {
                $('.section4 .shoppingCar').animate({
                    marginLeft:1000
                },3000,'easeInElastic',function(){
                    $('.section4 .keyboard').animate({
                        opacity:1
                    },600)
                })
            }

            if(index==6){
                $('.section6 .shopBox').animate({
                    marginBottom: -110,
                },1000,function(){
                    $('.section6 .street').animate({
                 
                        backgroundPositionX: -1250
                    },2500,function(){
                        $('.section6 .man').animate({
                            width:100
                        },1000,function(){
                            $('.section6 .man').animate({
                                marginLeft:130
                            },1000,function(){
                                $('.section6 .door').show();
                                setTimeout(function(){
                                    $('.section6 .girl').show();
                                },500);
                            }) 
                        })
                    })
                })

            }

       
        }
    });

    $('.section8').on('mousemove',function(e){
            e=e||event;
            var x =e.pageX;
            var y=e.pageY;
            $('.section8 .hand').css('left',x-65);
            $('.section8 .hand').css('top',y-7);

    })

    $('.section8 .again').on('click',function(){
        location.reload();
        $('.section1').addClass('active').siblings().removeClass('active');
       
    })


})