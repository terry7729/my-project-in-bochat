window.onload=function(){
    new Swiper('.category-left .swiper-container', {
        direction: 'vertical', // 垂直滚动
        // 可以支持多张轮播图显示 属性一定要加 内容滚动的距离如果不加无法计算
        slidesPerView: 'auto',
        freeMode: true, // 是否添加滑动的惯性

        // mousewheel: true,//支持鼠标滚轮
    });
    new Swiper('.category-right .swiper-container', {
        direction: 'vertical', // 垂直滚动
        // 可以支持多张轮播图显示 属性一定要加 内容滚动的距离如果不加无法计算
        slidesPerView: 'auto',
        freeMode: true, // 是否添加滑动的惯性

        // mousewheel: true,//支持鼠标滚轮
    });

    var left=this.document.querySelector('.category-left')
    var leftH=left.offsetHeight;
    

}