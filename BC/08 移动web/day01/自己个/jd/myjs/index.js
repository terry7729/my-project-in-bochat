window.onload = function () {
    headerEffect()
    swipers()
    downtime()
}

function headerEffect() {
    var header = document.querySelector('header');
    var height = document.querySelector('#slide').offsetHeight;
    var scrTop = document.body.scrollTop || document.documentElement.scrollTop;
    var opcity = scrTop / height;
    header.style.backgroundColor = `rgba(233,35,34,${opcity})`;
    window.onscroll = function () {
        scrTop = document.body.scrollTop || document.documentElement.scrollTop;
        opcity = scrTop / height;
        header.style.backgroundColor = `rgba(233,35,34,${opcity})`;

    }
}

function downtime(){
  var time=69;
 
  var span= document.querySelectorAll('.seckill .downtime span:not(:nth-child(3n))');
  setInterval(function(){
    time--;
    var hour=Math.floor(time/3600);
    var min=Math.floor((time%3600)/60);
    var sec=time%60;
    if(time<=0){
      time=7200
    }
    span[0].innerHTML=Math.floor(hour/10);
    span[1].innerHTML=Math.floor(hour%10);
    span[2].innerHTML=Math.floor(min/10);
    span[3].innerHTML=Math.floor(min%10);
    span[4].innerHTML=Math.floor(sec/10);
    span[5].innerHTML=Math.floor(sec%10);
  },1000)
}

function swipers(){
    var mySwiper = new Swiper ('.swiper-container',
     {
     
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        autoplay:true,
      }) 
}