var Url = 'http://api.bochat.net';
//index.html
function alert_html(o) {
    //	var html = '<div><span>手机号</span><input type="number" id="mobile" style="width:2rem"></div>';
    //	html += '<div class="yzm"><span>验证码</span><input type="number" class="phone_code"></div><button class="sms">发送</button>';
    //	html += '<div><button type="button" class="submit"></button></div>';
    //	
    //	var index = layer.open({
    //		type: 1,
    //		title: '<p></p>',
    //		skin: 'layer-login',
    //		area: ['5.8rem', '8rem'],
    //		content: html
    //	});
    //显示验证身份框
    $(".layer_iphonex").show();
    //获取验证码
    var Mobile = ''; //获取验证码
    var Pcode = ''; //验证码
    $('.send_yzm').on('click', function() {
        Mobile = $('#mobile').val();
        if (Mobile == '') {
            layer.msg('请输入手机号');
        } else {
            //计时器
            function time() {
                var InterValObj;
                var count = 60;
                var curCount;
                curCount = count;
                $(".send_yzm").attr("disabled", true);
                InterValObj = window.setInterval(SetRemainTime, 1000);

                function SetRemainTime() {
                    if (curCount == 0) {         
                        window.clearInterval(InterValObj);
                        $(".send_yzm").attr("disabled", false);
                        $(".send_yzm").val("重新获取");
                    } else {
                        curCount--;
                        $(".send_yzm").val("" + curCount + "s后获取");
                    }
                }
            };
            $.ajax({
                type: "post",
                url: Url + "/app/user/getCode",
                async: true,
                data: 'phone=' + Mobile + '&type=1',
                success(data) {
                    if (data.retcode == 10003) {
                        layer.msg(data.msg);
                    } else if (data.retcode == 0) {
                        layer.msg(data.msg);
                        time();
                    }
                }
            });
        }
    });
    $('.submit_btn').on('click', function() {
        Pcode = $('.phone_code').val();
        Mobile = $('#mobile').val()
        var data = {
            'username': Mobile,
            'code': Pcode
        };
        if (Mobile == '') {
            layer.msg('手机号码不能留空');
            return false;
        } else if (Pcode == '') {
            layer.msg('验证码不能留空');
            return false;
        } else {
            $.ajax({
                type: "post",
                url: Url + '/login',
                async: true,
                contentType: "application/json",
                data: JSON.stringify(data),
                success(data) {
                    let oData = JSON.parse(data);
                    layer.msg(oData.msg);
                    if (oData.retcode == 0) {
                        $('.submit_btn').attr('disabled', 'disabled')
                        localStorage.setItem("token", oData.data.token);
                        if (oData.data.superiorPhone == '') {
                            alert_html_req();
                        } else {
                            submit_post_check();
                        }
                    }
                }
            });
        }
    })

}

function alert_html_req(o) {
    var html = '<div class="req"><input type="number" placeholder="请输入邀请人手机号" class="invitation_phone"></div>';
    html += '<div class="tip">必须有邀请人才可以申请</div>';
    html += '<div class="che"><button type="button" class="proving"></button></div>';
    layer.open({
        type: 1,
        title: '<p></p>',
        skin: 'layer-login',
        area: ['5.8rem', '8rem'],
        content: html
    });
    var invitation_phone = '';
    var Ohref = window.location.href;
    var Referral_Code = Ohref.split("?code=");
    if (Referral_Code[1] != undefined) {
        $('.invitation_phone').val(Referral_Code[1]);
    }
    $('.proving').on('click', function() {
        invitation_phone = $('.invitation_phone').val();
        if (invitation_phone == '') {
            layer.msg('请输入邀请');
            return false;
        } else {
            $.ajax({
                type: "post",
                url: Url + '/app/user/upSuperiorPhone',
                async: true,
                headers: {
                    'Authorization': localStorage.token
                },
                data: 'phone=' + invitation_phone + '',
                success(data) {
                    layer.msg(data.msg);
                    if (data.retcode == 0) {
                        submit_post_check()
                    }
                }
            });
        }
    })

}