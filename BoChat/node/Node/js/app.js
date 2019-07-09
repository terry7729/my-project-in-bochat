/*(function () {
    var newFontSize = window.getComputedStyle(document.documentElement)['font-size'];
    var fontSizeScale = 16 / parseFloat(newFontSize.replace('px',''));
    //获取屏幕大小
    var html = document.documentElement;
    var ua = navigator.userAgent;
    var ios = /(iPhone|iPad|iPod|iOS)/i.test(ua);
    var android = /(Android)/i.test(ua);
    if(!ios && !android) {
        html.style.fontSize = '16px';
        //return;
    }

    document.addEventListener('DOMContentLoaded', function () {
        resetRem();
        resetScreen();
    });
    window.addEventListener('load', function () {
        setTimeout(resetRem, 300);
        resetScreen();
    });
    window.addEventListener('resize', function () {
        setTimeout(resetRem, 300);
        resetScreen();
    });
    function resetRem() {
        html.style.fontSize = html.clientWidth / 10 * fontSizeScale + 'px';
    }
    function resetScreen() {
        window.scrollTo(0,0);
        var height = html.clientHeight || window.innerHeight;
        var width = html.clientWidth || window.innerWidth;
        document.querySelector('body').style.height = height + 'px';
        document.querySelector('body').style.width = width + 'px';
        document.querySelector('body').style.margin = 0;
        document.querySelector('body').style.padding = 0;
    }
    resetRem();
})();*/
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=750){
                docEl.style.fontSize = '100px';
                // docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
setTimeout(showPage,1);
function showPage(){
    $('body').css('display','block')
}

function page_call_act(){
    var obj = $(this);
    var act = obj.attr('data-act');
    eval(act+'(obj)');
}