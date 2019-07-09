// 进入页面判断
if (location.hash.indexOf('C2C') != -1) {
    gotoC2C();

}
//进入到C2C模块
function gotoC2C() {
    $('.topnav li').eq(2).find('a').addClass('active').parent().siblings('li').find('a').removeClass('active');
    $('.helpnav li').eq(1).find('a').addClass('active').parent().siblings('li').find('a').removeClass('active');
    $('.section2').show().siblings().hide();
    $('.section2 li').eq(1).find('a').addClass('active').parent().siblings('li').find('a').removeClass('active');
    $('.section2 .content2').show().siblings().hide();
}
//点击C2C交易
$('.goC2C').click(function() {
    gotoC2C();
})

//页面所有table切换 添加样式
$('.navs li').click(
    function() {
        $(this).find('a').addClass('active').parent().siblings('li').find('a').removeClass('active');
        selectC2C();
    }

)

//资产管理栏tab切换控制内容显示
$('.helpnav li').click(function() {
    var index = $(this).index();
    $('.section' + [index + 1]).show().siblings().hide();
    var s = $('.section2').css('display')
    if (s === 'none') {
        $('.topnav li').eq(2).find('a').removeClass('active')
    } else {
        selectC2C();
    }


})

//个人中心栏tab切换控制内容显示
$('.secfist li').click(function() {
    var index = $(this).index();
    $(this).parent().parent().siblings().find('.content' + [index + 1]).show().siblings().hide()

})


//点击复制链接
$('.copy').click(function() {
    if ($('#input').val().trim()) {
        var Url = document.getElementById("input");
        Url.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        layer.open({
            type: 1,
            title: false,
            skin: 'demo-class',
            area: ['200px', '200px'],
            content: "复制成功！",
            time: 2000,
            shadeClose: true,
        });
    }


})


//添加钱包地址
$('.addAddress').click(function() {
    layer.open({
        title: false,
        type: 2,
        area: ['460px', '460px'],
        skin: 'layui-layer-rim', //加上边框
        content: ['./addwalletaddresss.html', 'no']
    });
})

//实名认证-下一步
$('.next').click(function(e) {
        e.preventDefault();
        if ($('#realname').val().trim() == "") {
            layer.tips('请输入真实姓名', '#realname', {
                tips: 3
            })
            return false;
        }
        if ($('#idcard').val().trim() == "") {
            layer.tips('请输入身份证号码', '#idcard', {
                tips: 3
            })
            return false;
        }

        $('.list2').show().siblings().hide();
    })
    //实名认证-完成认证
$('.finshed').click(function(e) {
    e.preventDefault();
    $('.list3').show().siblings().hide();
})

//我的资产 table切换控制内容显示
$('.section2 .mainnav li').click(function() {
        var index = $(this).index();
        $('.section2 .content' + [index + 1]).show().siblings().hide();
    })
    //账号安全 tab切换控制内容显示
$('.section3 .mainnav li').click(function() {
    var index = $(this).index();
    $('.section3 .content' + [index + 1]).show().siblings().hide();
})


//点击用户头像跳到个人中心
$('.userinfo img').click(function() {
    location = '../page/personCenter.html'
})

//个人中点击修改登录密码跳到账号安全的修改登录密码
$('.updateLoginPwd').click(function() {
        $('.helpnav li').eq(2).find('a').addClass('active').parent().siblings('li').find('a').removeClass(
            'active');

        $('.section3').show().siblings().hide();
        $('.section3 li').eq(2).find('a').addClass('active').parent().siblings('li').find('a').removeClass(
            'active');
        $('.section3 .content3').show().siblings().hide();
    })
    //个人中点击修改交易密码跳到账号安全的修改交易密码
$('.updatetrPwd').click(function() {
    $('.helpnav li').eq(2).find('a').addClass('active').parent().siblings('li').find('a').removeClass(
        'active');

    $('.section3').show().siblings().hide();
    $('.section3 li').eq(3).find('a').addClass('active').parent().siblings('li').find('a').removeClass(
        'active');
    $('.section3 .content4').show().siblings().hide();
})

//个人中点击实名认证跳到账号安全的实名认证
$('.checksmrz').click(function() {
    $('.helpnav li').eq(2).find('a').addClass('active').parent().siblings('li').find('a').removeClass(
        'active');

    $('.section3').show().siblings().hide();
    $('.section3 li').eq(0).find('a').addClass('active').parent().siblings('li').find('a').removeClass(
        'active');
    $('.section3 .content1').show().siblings().hide();

})

//个人中点击谷歌认证跳到账号安全的谷歌认证
$('.googleRZ').click(function() {
    $('.helpnav li').eq(2).find('a').addClass('active').parent().siblings('li').find('a').removeClass(
        'active');

    $('.section3').show().siblings().hide();
    $('.section3 li').eq(1).find('a').addClass('active').parent().siblings('li').find('a').removeClass(
        'active');
    $('.section3 .content2').show().siblings().hide();
})

//去c2c页面
function selectC2C() {
    if ($('.section2 .navs li').eq(1).find('a').hasClass('active')) {
        $('.topnav li').eq(2).find('a').addClass('active')
    } else {
        $('.topnav li').eq(2).find('a').removeClass('active')
    }
}

//转出数字资产表单提交验证
$('.zcszzz button').click(function() {
    if ($('#tokenType').val() == "") {
        layer.tips('请选择/输入币种', '#tokenType', {
            tips: 3,
        })
        return false;
    }
    if ($('#outNumber').val() == "") {
        layer.tips('请输入转出数量', '#outNumber', {
            tips: 3
        })
        return false;
    }
    if ($('#yzcode').val() == "") {
        layer.tips('请输入验证码', '#yzcode', {
            tips: 3
        })
        return false;
    }
    if ($('#jypwd').val() == "") {
        layer.tips('请输入交易密码', '#jypwd', {
            tips: 3
        })
        return false;
    }
})

// 登录密码修改表单验证
$('.loginPwd button').click(function(e) {
        e.preventDefault();
        if ($('#loginpwdold').val().trim() == "") {
            layer.tips('请输入原登录密码', '#loginpwdold', {
                tips: 3,
            })
            return false;

        }
        if ($('#loginpwdnew').val().trim() == "") {
            layer.tips('请输入新登录密码', '#loginpwdnew', {
                tips: 3,
            })
            return false;
        }
        if ($('#loginpwdnew2').val().trim() == "") {
            layer.tips('请确认新登录密码', '#loginpwdnew2', {
                tips: 3,
            })
            return false;
        }
    })
    //交易密码修改表单验证
$('.jyForm button').click(function(e) {
    e.preventDefault();
    if ($('#jypwdold').val().trim() == "") {
        layer.tips('请输入原交易密码', '#jypwdold', {
            tips: 3,
        })
        return false;

    }
    if ($('#jypwdnew').val().trim() == "") {
        layer.tips('请输入新交易密码', '#jypwdnew', {
            tips: 3,
        })
        return false;
    }
    if ($('#jypwdnew2').val().trim() == "") {
        layer.tips('请输入新交易密码', '#jypwdnew2', {
            tips: 3,
        })
        return false;
    }
})

//谷歌认证
$('.section3 .content2 button').click(function() {
    if ($('#rzcodes').val().trim() == "") {
        layer.tips('请输入认证码', '#rzcodes', {
            tips: 3,

        })
        return false;
    }
})

//交易设置
$('.content5 button').click(function() {
    if (radioType == 2) {
        if ($('.content5 #jypwd').val().trim() == "") {
            layer.tips('请输入交易密码', '.content5 #jypwd', {
                tips: 3,

            })
            return false;
        }
    }
})

// layer.use('form', function() {
//     var form = layer.form;
//     form.on('radio', function(data) {
//         console.log(data.elem)
//     })
// })

var radioType = 1;
layui.use('form', function() {
    var form = layui.form;
    form.on('radio(switchTest1)', function(data) {
        radioType = 1
        if (this.checked) {
            $('.section3 .content5 #jypwd').attr('readonly', 'readonly').
            css({ cursor: 'not-allowed', backgroundColor: '#ccc' })
        }

    })
})

layui.use('form', function() {
    var form = layui.form;
    form.on('radio(switchTest2)', function(data) {

        if (this.checked) {
            radioType = 2
            $('.section3 .content5 #jypwd').removeAttr('readonly', 'readonly').css({ cursor: 'auto', backgroundColor: '#fff' })
        }

    })
})