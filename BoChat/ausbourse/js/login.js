$(function() {
    //获取url地址参数判断是登录还是注册
    var url = location.search;
    if (url.indexOf('1') == -1 & url.indexOf('type') != -1) {
        $('.regist').show().siblings('.loginForm').hide();
    }
    var loginBox = $('.regBox')
    setTimeout(function() {
        loginBox.animate({
            top: '0'
        }, 1000)
    })


})

function upLogin() {
    var username = $("#login_username ").val();
    var password = $("#login_password ").val();
    var verifyCode = $("#login_gacode ").val();
    if (username == "" || username == null) {
        layer.tips('请输入手机号码/邮箱', '#login_username', {
            tips: 3
        });
        return false;
    }
    if (password == "" || password == null) {
        layer.tips('请输入密码', '#login_password', {
            tips: 3
        });
        return false;
    }
    if (verifyCode == "" || verifyCode == null) {
        layer.tips('请输入图形验证码', '#login_gacode', {
            tips: 3,



        });
        return false;
    }
    return true;
}

function upregist() {
    var phone = $('#phone').val()
    var pwd = $('#pwd').val();
    var repwd = $('#repwd').val();
    var invotecode = $('#invotecode').val();
    var txcode = $('#txcode').val();
    var yzcode = $('#yzcode').val();
    if (phone == "" || phone == null) {
        layer.tips('请输入手机号码', '#phone', {
            tips: 3,

        });
        return false;
    }
    if (phone == "" || phone == null) {
        layer.tips('请输入手机号码', '#phone', {
            tips: 3,

        });
        return false;
    }
    if (pwd == "" || pwd == null) {
        layer.tips('请输入密码', '#pwd', {
            tips: 3,

        });
        return false;
    }
    if (repwd == "" || repwd == null) {
        layer.tips('请确认密码', '#repwd', {
            tips: 3,

        });
        return false;
    }
    if (txcode == "" || txcode == null) {
        layer.tips('请输入图形验证码', '#txcode', {
            tips: 3,

        });
        return false;
    }
    if (yzcode == "" || yzcode == null) {
        layer.tips('请输入短信验证码', '#yzcode', {
            tips: 3,

        });
        return false;
    }
}
//页面table切换样式更改
$('.navs li').click(
        function() {
            $(this).find('a').addClass('active').parent().siblings('li').find('a').removeClass('active');
        }
    )
    // 用户注册显示 登录隐藏
$('.registers').click(function() {

    $('.regist').css({
        top: '-70px'
    }).animate({
        top: 0
    }, 1000).show().siblings('.loginForm').hide();

})

//点击用户注册协议
$('.goAgreement').click(function() {
        // layer.open({
        //     type: 2,
        //     area: ['882px', '734px'],
        //     fixed: false, //不固定
        //     maxmin: true,
        //     content: 'test/iframe.html'
        // });

        //页面层-自定义
        var html = '<div class="xyheader">用户注册协议'
        html += '<div class="xytext"><p class="title"> Mxx交易所-Mxx旗下专业数字资产交易平台-Mxx用户协议</p>'
        html += '<p>最后更新时间:2019-12-21</p>'
        html += '<p>最后更新时间:2019-12-21</p>'
        html += '</div>'
        html += '</div>'
        layer.open({
            area: ['882px', '734px'],
            type: 1,
            title: false,
            shadeClose: true,
            content: html,
            closeBtn: 1,
        });
    })
    //登录验证
$('.btnlogin').click(function(e) {
        e.preventDefault();
        upLogin();
    })
    //注册验证
$('.btnregist').click(function(e) {
        e.preventDefault();
        upregist();
    })
    //去到登录
$('.gotoLogin').click(function() {

    $('.loginForm ').css({
        top: '-70px'
    }).animate({
        top: 0
    }, 1000).show().siblings('.regist').hide();
})