window.scrollTo(0, 0)
var BoChat = function() {}

//查询二维码接口
function code(type) {
    $.ajax({
        type: "post",
        url: "http://api.bochat.net/app/partners/getCodeList",
        async: true,
        data: {
            type: type
        },
        dataType: 'json',
        success: function(data) {
            if (data.retcode == 0 && data.data.item.length > 0) {
                if (type == 'BM') {
                    $('.nodezm .node img').attr('src', data.data.item[0].url)
                } else if (type == 'XZ') {
                    $('.rightcode img').attr('src', data.data.item[0].url)
                } else if (type == 'GZH') {
                    $('.gzhcode img').attr('src', data.data.item[0].url)
                } else {

                    $('.payfor img').attr('src', data.data.item[0].url)
                }
            }


        }
    });
}

BoChat.prototype = {
    headerScroll: function() {
        window.addEventListener('scroll', function() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            var opacity = scrollTop / 200;
            var header = document.querySelector(".sameheader");

            if (opacity > 0.95) opacity = 0.95
            header.style.backgroundColor = 'rgba(27,27,27,' + opacity + ')';
            if ($('.nav li').hasClass('active')) {
                $('.nav li').find('.length').removeClass(
                    'actives');
            }

            if (scrollTop >= 600) {
                $('.firstpage').removeClass('actives')
                $('.picAnd li img ').fadeIn(1000)
            } else if (scrollTop <= 613) {
                $('.firstpage').addClass('actives')
            }
        })
    }
}

var bc = new BoChat();
bc.headerScroll();