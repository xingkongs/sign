var formcheck=false;
(function ($) {
    if ($.AMUI && $.AMUI.validator) {
        // 增加多个正则
        $.AMUI.validator.patterns = $.extend($.AMUI.validator.patterns, {
            colorHex: /^(#([a-fA-F0-9]{6}|[a-fA-F0-9]{3}))?$/
        });
        // 增加单个正则
        $.AMUI.validator.patterns.yourpattern = /^your$/;
        // 增加单个正则
        $.AMUI.validator.patterns.mobile = /^1((3|5|8){1}\d{1}|70)\d{8}$/;
    }
})(window.jQuery);

$.ready(function(){
    $("input[name=moblie]").val("");
});

$(function check() {
    $('#doc-vld-msg').validator({

        onValid: function (validity) {
            $(validity.field).closest('.am-form-groupa').find('.am-alert').css('visibility', 'hidden');
            //console.log($(validity.field));
            formcheck=validity.valid;
        },

        onInValid: function (validity) {
            var $field = $(validity.field);
            var $group = $field.closest('.am-form-groupa');
            var $alert = $group.find('.am-alert');
            // 使用自定义的提示信息 或 插件内置的提示信息
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

            $alert.html(msg).show().css('visibility', 'visible');
            $(".alert--position").hide();
            //console.log($(validity.field));
            formcheck=validity.valid;
        },
        validate: function (validity) {
            var v = $(validity.field).val();
            var $field = $(validity.field);
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);
            var code=Boolean($("body").attr("data-style"));
            // $("input[name=password]").focus(function(){
            //    $(this).attr("type","password");
            // });
            $(validity.field).focus(function(){
                $(validity.field).removeClass("am-field-error");
                $(validity.field).closest('.am-form-groupa').find('.am-alert').css('visibility', 'hidden');
            });
            // var comparer = function (v1, v2) {
            //     if (v1 != v2) {
            //         validity.valid = false;
            //     }
            //
            //     // 这些属性目前 v2.3 以前没什么用，如果不想写可以忽略
            //     // 从 v2.3 开始，这些属性被 getValidationMessage() 用于生成错误提示信息
            //     if (v2 < 10) {
            //         validity.rangeUnderflow = true;
            //     } else if (v2 > 10) {
            //         validity.rangeOverflow = true;
            //     }
            // };
            // if($(validity.field).is("input[name=mobile]")){
            //     var data=$(validity.field).val();
            //
            //     $.ajax({
            //         type: "post",
            //         url: "http://www.d1ev.com/member/checkunique",
            //         dataType: "json",
            //         data:{type:"mobile",value:data},
            //         success: function (_msg) {
            //             console.log(_msg)
            //         }
            //     });
            // } else if($(validity.field).is("input[name=rvCode]")){
            //     var data=$(validity.field).val();
            //     $.ajax({
            //         type: "post",
            //         url: "http://www.d1ev.com/member/liutengfei/rvcode",
            //         dataType: "json",
            //         data:{rvCode:data},
            //         success: function (_msg) {
            //             console.log(_msg)
            //         }
            //     });
            // }else if($(validity.field).is("input[name=vCode]")){
            //     var data=$(validity.field).val();
            //     $.ajax({
            //         type: "post",
            //         url: "http://www.d1ev.com/member/liutengfei/rvsms",
            //         dataType: "json",
            //         data:{vCode:data},
            //         success: function (_msg) {
            //             console.log(_msg)
            //         }
            //     });
            // }else if($(validity.field).is("input[name=email]")){
            //     var data=$(validity.field).val();
            //     console.log(1);
            //     $.ajax({
            //         type: "post",
            //         url: "http://www.d1ev.com/member/checkunique",
            //         dataType: "json",
            //         data:{type:"email",value:data},
            //         success: function (_msg) {
            //             console.log(_msg)
            //         }
            //     });
            // }
            // Ajax 验证
            // $("input#submit").on("click", function () {
            //
            //     //Response.Redirect("~/");
            //     if ($(validity.field).is('#doc-vld-msg')) {
            //         // 异步操作必须返回 Deferred 对象
            //         return $.ajax({
            //             url: 'http://www.d1ev.com/member/liutengfei/mobilereg',
            //             // cache: false, 实际使用中请禁用缓存
            //             dataType: 'json'
            //         }).then(function (data) {
            //             comparer(data.count, v);
            //             //Response.Redirect("~/");
            //             //window.location.href='http://www.d1ev.com'
            //             $(".alert--position").addClass("am-alert-successes").html(msg).show().hide("fast", arguments.callee);
            //             return validity;
            //         }, function () {
            //             $(".alert--position").addClass("am-alert-dangeres").html(msg).show().hide("fast", arguments.callee);
            //             return validity;
            //         });
            //     }
            // })
        }
    });
});
function codecheck(_msg){
    var $p= $(".alert--position").find("p");
    // if($p.hasClass("am-alert-dangeres")){
    //     $p.removeClass("am-alert-dangeres");
    // } else if($p.hasClass("am-alert-success")){
    //     $p.removeClass("am-alert-success");
    // }else if($p.hasClass("am-alert-warning")){
    //     $p.removeClass("am-alert-warning");
    // }
    //var $alert=$("#doc-vld-msg").find('.am-form-groupa').find('.am-alert');
    if (_msg.error === 3) {
        $p.addClass("am-alert-warning").html(_msg.message).end().show();
        $("body").attr("data-style","");

    } else if (_msg.error === 0) {
        $p.addClass("am-alert-success").html(_msg.message).end().show();
        $("body").attr("data-style","false");

    } else{
        $p.addClass("am-alert-dangeres").html(_msg.message).end().show();
        $("body").attr("data-style","");
    }
}
function codeajax(_msg,$this){
    var $alert;
    if(!$this){
        $alert=$("#doc-vld-msg").find('.am-form-groupa').eq(0).find('.am-alert')
    }else{
        $alert=$this.closest('.am-form-groupa').find('.am-alert');
    }


    if (_msg.error === 3) {
        $alert.html(_msg.message).show().css('visibility', 'visible');
        formcheck=false;
        $("body").attr("data-style","");
    } else if (_msg.error === 0) {
        $alert.html(_msg.message).show().css('visibility', 'hidden');
        formcheck=true;
        $("body").attr("data-style","false");
    } else{
        $alert.html(_msg.message).show().css('visibility', 'visible');
        formcheck=false;
        $("body").attr("data-style","");
    }

}
function submits(options,e){

    $('#doc-vld-msg').validator(options);
    if(!formcheck){
    //     $(".alert--position").find("p").addClass("am-alert-dangeres").html("请正确填写内容").end().show();
        return
     }
    if(e===1){
        var messages=$("input[name=email]").val();
        url="http://www.d1ev.com/member/liutengfei/emailreg";
        href="http://www.d1ev.com/sign/bindmail.html#"+messages;

    } else if(e===2){
        //console.log(e);
        url="http://www.d1ev.com/member/liutengfei/mobilereg";
        href="http://www.d1ev.com";
        //var hashStrings = (window.location.hash.length > 0 ? window.location.hash.substring(1) : "");
    } else if(e===3){
        //console.log(e);
        url="http://www.d1ev.com/member/shina/dropbind";
        href="http://www.d1ev.com";
    } else if(e===4){
        //console.log(e);
        url="http://www.d1ev.com/member/shina/binduser";
        href="http://www.d1ev.com";
    }
    else if(e===5){
        //console.log(e);
        url="http://www.d1ev.com/index.php?g=member&m=weibo&a=dropbind";
        href="http://www.d1ev.com";
    }

    // if(!$("input[name=rvCode]").val()){
    //     $(".alert--position").find("p").addClass("am-alert-warning").html("请正确填写内容").end().show();
    //     return
    // }
    //console.log(1);
    $.ajax({
        type: "post",
        url: url,
        dataType: "json",
        data:{mobile:$("input[name=mobile]").val(),loginName:$("input[name=loginName]").val(),password:$("input[name=password]").val(),rvCode:$("input[name=rvCode]").val(),vCode:$("input[name=vCode]").val(),email:$("input[name=email]").val()},
        success: function (_msg) {
            codeajax(_msg);
            if(_msg.error === 0){
                window.location.href=href;
                formcheck=true;
            } else{
                formcheck=false;
            }
        }
    });
}
$("#submit").on("click",function(options){
    var e=2;
    submits(options,e)
});
$("#submit2").on("click",function(options){
    var e=1;
    submits(options,e)
});
$("#submit3").on("click",function(options){
    var e=3;
    submits(options,e)
});
$("#submit4").on("click",function(options){
    //qq
    var e=4;
    submits(options,e)
});
$("#submit5").on("click",function(options){
    //qq
    var e=5;
    submits(options,e)
});
$('#doc-vld-msg').find("input").change(function messageajax(){

    var $this=$(this);
    var code=Boolean($("body").attr("data-style"));
    var time=setTimeout(function checkfalse(){
        if(formcheck){
            //console.log(1);
            if($($this).attr("name")==="mobile"){
                var data=$($this).val();

                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/checkunique",
                    dataType: "json",
                    data:{type:"mobile",value:data},
                    success: function (_msg) {
                        codeajax(_msg,$this);
                        console.log(_msg);
                    }
                });
            } else if($($this).attr("name")==="rvCode"){
                var data=$($this).val();
                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/liutengfei/rvcode",
                    dataType: "json",
                    data:{rvCode:data},
                    success: function (_msg) {
                        codeajax(_msg,$this);

                    }
                });
            }else if($($this).attr("name")==="vCode"){
                var data=$($this).val();
                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/liutengfei/rvsms",
                    dataType: "json",
                    data:{vCode:data},
                    success: function (_msg) {
                        codeajax(_msg,$this);
                    }
                });
            }else if($($this).attr("name")==="email"){
                var data=$($this).val();

                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/checkunique",
                    dataType: "json",
                    data:{type:"email",value:data},
                    success: function (_msg) {
                        codeajax(_msg,$this);
                        console.log(_msg);
                    }
                });
            }else if($($this).attr("name")==="loginName"){
                var data=$($this).val();

                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/ganghe/dolostpassword",
                    dataType: "json",
                    data:{loginName:data},
                    success: function (_msg) {
                        codeajax(_msg,$this);
                        console.log(_msg);
                    }
                });
            } else if($($this).attr("name")==="password"){
                var a={}; a.error=0;
                codeajax(a,$this);
                //console.log($this);
                $($this).attr("type","password");
            }

        }
    });
});
//手机验证码

$('.btn-loading-example').click(function () {
    var code=Boolean($("body").attr("data-style"));
    var $btn = $(this);
    var time = 60;
    var n=0;
    var i;
    if($(".am-form-icon:has(img)").length>0){i=3}else{i=2}
    $btn.closest(".am-form-icon").siblings(".am-form-groupa").find("input").each(function(){
        if($(this).val()){n++}else{formcheck=false;}
    });
    //console.log(i);
    //console.log(formcheck);
    if(n===i){formcheck=true;}
    if(n===i&&formcheck&&code){
        var mobile = $("#mobile").val();
        $.ajax({
            type: "post",
            url: "http://www.d1ev.com/member/liutengfei/sms",
            data: "mobile=" + mobile,
            dataType: "json",
            success: function (_msg) {
                codeajax(_msg,$btn);
                if(_msg.error===0){
                    $btn.button('loading');
                    var hander = setInterval(function () {
                        if (time <= 0) {
                            clearInterval(hander); //清除倒计时
                            $btn.button('reset');
                        } else {
                            $btn.val("" + (time--) + "秒重发");
                        }
                    }, 1000);
                }

                // // console.log(n===i);
                // if(n===i){formcheck=true;}
                // // console.log(formcheck);
                // console.log(code);
                // if(n===i&&formcheck&&code){$("#doc-vld-msg").find(".am-form-icon").find("input[type=button]").removeClass("am-disabled");}

                // //var _msg = JSON.parse(_msg);
                // if (_msg.error === 1) {
                //     $(".alert--position").addClass("am-alert-dangeres").html(_msg.message).show();
                //
                // } else if (_msg.error === 2) {
                //     $(".alert--position").addClass("am-alert-dangeres").html(_msg.message).show();
                //
                // } else if (_msg.error === 3) {
                //     $(".alert--position").addClass("am-alert-warning").html(_msg.message).show();
                //
                // } else if (_msg.error === 0) {
                //     $(".alert--position").addClass("am-alert-success").html(_msg.message).show();
                //
                // }
            }
        });

    }


});
!(function timeaa() {
    var i = 5;
    var timea = setTimeout(function step() {
        if (i <= 0) {

            clearTimeout(timea);
        } else {
            $("p.timechange").text("" + (--i) + "秒后自动进入第一电动网");
            setTimeout(step, 1000);
        }
    }, 1000);
})();
function imga(obj) {
    $(obj).attr({"src": "http://www.d1ev.com/api/checkcode?type=register&code_len=4&font_size=14&width=133&height=48&t=" + Math.random()});

}
//跳转到指定的邮箱登录页面
$("#gomail").click(function () {
    //var uurl = $("input.hide_email").val();
    var hashStrings = (window.location.hash.length > 0 ? window.location.hash.slice(1) : "");
    var uurl = gotoEmail(hashStrings);
    if (uurl != "") {
        window.open("http://"+uurl);
    } else {
        console.log("抱歉!未找到对应的邮箱登录地址，请自己登录邮箱查看邮件！");
    }
});

//功能：根据用户输入的Email跳转到相应的电子邮箱首页
function gotoEmail($mail) {
    $t = $mail.split('@')[1];
    $t = $t.toLowerCase();
    if ($t == '163.com') {
        return 'mail.163.com';
    } else if ($t == 'vip.163.com') {
        return 'vip.163.com';
    } else if ($t == '126.com') {
        return 'mail.126.com';
    } else if ($t == 'qq.com' || $t == 'vip.qq.com' || $t == 'foxmail.com') {
        return 'mail.qq.com';
    } else if ($t == 'gmail.com') {
        return 'mail.google.com';
    } else if ($t == 'sohu.com') {
        return 'mail.sohu.com';
    } else if ($t == 'tom.com') {
        return 'mail.tom.com';
    } else if ($t == 'vip.sina.com') {
        return 'vip.sina.com';
    } else if ($t == 'sina.com.cn' || $t == 'sina.com') {
        return 'mail.sina.com.cn';
    } else if ($t == 'tom.com') {
        return 'mail.tom.com';
    } else if ($t == 'yahoo.com.cn' || $t == 'yahoo.cn') {
        return 'mail.cn.yahoo.com';
    } else if ($t == 'tom.com') {
        return 'mail.tom.com';
    } else if ($t == 'yeah.net') {
        return 'www.yeah.net';
    } else if ($t == '21cn.com') {
        return 'mail.21cn.com';
    } else if ($t == 'hotmail.com') {
        return 'www.hotmail.com';
    } else if ($t == 'sogou.com') {
        return 'mail.sogou.com';
    } else if ($t == '188.com') {
        return 'www.188.com';
    } else if ($t == '139.com') {
        return 'mail.10086.cn';
    } else if ($t == '189.cn') {
        return 'webmail15.189.cn/webmail';
    } else if ($t == 'wo.com.cn') {
        return 'mail.wo.com.cn/smsmail';
    } else if ($t == '139.com') {
        return 'mail.10086.cn';
    } else {
        return '';
    }
}
$(".am-close--re").on("click",function(){
   $(this).closest(".am-alert").hide();
});
//重新发送
function resend(){
    var hashStrings = (window.location.hash.length > 0 ? window.location.hash.slice(1) : "");
    $.ajax({
        type: "post",
        url: "http://www.d1ev.com/member/liutengfei/rsendmail",
        dataType: "json",
        data:{email:hashStrings},
        success: function (_msg) {
            codeajax(_msg,$this);
            console.log(_msg);
        }
    });
}
// function getHashStringArgs() {
//
//     //取得查询的hash，并去除开头的#号
//
//     var hashStrings = (window.location.hash.length > 0 ? window.location.hash.substring(1) : ""),
//
//         //保持数据的对象
//
//         hashArgs = {},
//
//
//
//         //取得每一项hash对
//
//         items = hashStrings.length > 0 ? hashStrings.split("&") : [],
//
//         item = null,
//
//         name = null,
//
//         value = null,
//
//         i = 0,
//
//         len = items.length;
//
//
//
//     //逐个将每一项添加到hashArgs中
//
//     for (i = 0; i < len; i++) {
//
//         item = items[i].split("=");
//
//         name = decodeURIComponent(item[0]);
//
//         value = decodeURIComponent(item[1]);
//
//         if (name.length > 0) {
//
//             hashArgs[name] = value;
//
//         }
//
//     }
//
//     return hashArgs;
//
// }