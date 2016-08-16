var formcheck=false;
(function($) {
    if ($.AMUI && $.AMUI.validator) {
        // 增加多个正则
        $.AMUI.validator.patterns = $.extend($.AMUI.validator.patterns, {
            colorHex: /^(#([a-fA-F0-9]{6}|[a-fA-F0-9]{3}))?$/
        });
        // 增加单个正则
        $.AMUI.validator.patterns.yourpattern = /^your$/;
        // 增加单个正则
        $.AMUI.validator.patterns.mobile = /^1((3|5|8){1}\d{1}|70)\d{8}$/ ;
    }
})(window.jQuery);
$(function() {
    $('#doc-vld-msg').validator({

        onValid: function(validity) {
            $(validity.field).closest('.am-form-groupa').find('.am-alert').css('visibility','hidden');
            //console.log($(validity.field));
            formcheck=validity.valid;
            if($(validity.field).is("select")){
                formcheck=false;
                var $check=$(validity.field).siblings(".am-selected").find(".am-selected-content li.am-checked").attr("data-value");
                var $sendcode=$("#doc-modal-7--re").find("input");
                var $username1=$(validity.field).find("option").eq(0).attr("data-style");
                var $username2=$(validity.field).find("option").eq(1).attr("data-style");
                //console.log($check);
                if($check==="a"){
                    $sendcode.attr("name","vvCode");
                    $("#doc-modal-5").attr("data-style",$username1);
                    $("#doc-modal-6").attr("data-style",$username1||$username2);
                }else if($check==="b"){
                    $sendcode.attr("name","vmCode");
                    $("#doc-modal-4").attr("data-style",$username2);
                }
            }
            return formcheck;
        },

        onInValid: function(validity) {
            var $field = $(validity.field);
            var $group = $field.closest('.am-form-groupa');
            var $alert = $group.find('.am-alert');
            // 使用自定义的提示信息 或 插件内置的提示信息
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

            $alert.html(msg).show().css('visibility','visible');
            //console.log(validity);
            return formcheck=validity.valid;

            // var $modal = $('#your-modal');
            //
            // $modal.siblings('.am-btn').on('click', function(e) {
            //     var $target = $(e.target);
            //     if (($target).hasClass('js-modal-open')) {
            //         $modal.modal();
            //     } else if (($target).hasClass('js-modal-close')) {
            //         $modal.modal('close');
            //     } else {
            //         $modal.modal('toggle');
            //     }
            // });

        },
        validate: function(validity) {
            var v = $(validity.field).val();
            var $field = $(validity.field);
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);
            //console.log(validity.field);
            var comparer = function(v1, v2) {
                if (v1 != v2) {
                    validity.valid = false;
                }

                // 这些属性目前 v2.3 以前没什么用，如果不想写可以忽略
                // 从 v2.3 开始，这些属性被 getValidationMessage() 用于生成错误提示信息
                if (v2 < 10) {
                    validity.rangeUnderflow = true;
                } else if(v2 > 10) {
                    validity.rangeOverflow = true;
                }
            };

        }
    });
});
$(function() {
    $('#doc-vld-msgg').validator({

        onValid: function(validity) {
            $(validity.field).closest('.am-form-groupa').find('.am-alert').css('visibility','hidden');
            //console.log($(validity.field));
            formcheck=validity.valid;
            if($(validity.field).is("select")){
                formcheck=false;
                var $check=$(validity.field).siblings(".am-selected").find(".am-selected-content li.am-checked").attr("data-value");
                var $sendcode=$("#doc-modal-7--re").find("input");
                var $username1=$(validity.field).find("option").eq(0).attr("data-style");
                var $username2=$(validity.field).find("option").eq(1).attr("data-style");
                //console.log($check);
                if($check==="a"){
                    $sendcode.attr("name","vvCode");
                    $("#doc-modal-5").attr("data-style",$username1);
                    $("#doc-modal-6").attr("data-style",$username1||$username2);
                }else if($check==="b"){
                    $sendcode.attr("name","vmCode");
                    $("#doc-modal-4").attr("data-style",$username2);
                }
            }
            return formcheck;
        },

        onInValid: function(validity) {
            var $field = $(validity.field);
            var $group = $field.closest('.am-form-groupa');
            var $alert = $group.find('.am-alert');
            // 使用自定义的提示信息 或 插件内置的提示信息
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

            $alert.html(msg).show().css('visibility','visible');
            //console.log(validity);
            return formcheck=validity.valid;

            // var $modal = $('#your-modal');
            //
            // $modal.siblings('.am-btn').on('click', function(e) {
            //     var $target = $(e.target);
            //     if (($target).hasClass('js-modal-open')) {
            //         $modal.modal();
            //     } else if (($target).hasClass('js-modal-close')) {
            //         $modal.modal('close');
            //     } else {
            //         $modal.modal('toggle');
            //     }
            // });

        },
        validate: function(validity) {
            var v = $(validity.field).val();
            var $field = $(validity.field);
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);
            //console.log(validity.field);
            var comparer = function(v1, v2) {
                if (v1 != v2) {
                    validity.valid = false;
                }

                // 这些属性目前 v2.3 以前没什么用，如果不想写可以忽略
                // 从 v2.3 开始，这些属性被 getValidationMessage() 用于生成错误提示信息
                if (v2 < 10) {
                    validity.rangeUnderflow = true;
                } else if(v2 > 10) {
                    validity.rangeOverflow = true;
                }
            };

        }
    });
});
$(function() {
    $('#doc-vld-msgs').validator({

        onValid: function(validity) {
            $(validity.field).closest('.am-form-groupa').find('.am-alert').css('visibility','hidden');
            //console.log($(validity.field));
            formcheck=validity.valid;
            if($(validity.field).is("select")){
                formcheck=false;
                var $check=$(validity.field).siblings(".am-selected").find(".am-selected-content li.am-checked").attr("data-value");
                var $sendcode=$("#doc-modal-7--re").find("input");
                var $username1=$(validity.field).find("option").eq(0).attr("data-style");
                var $username2=$(validity.field).find("option").eq(1).attr("data-style");
                //console.log($check);
                if($check==="a"){
                    $sendcode.attr("name","vvCode");
                    $("#doc-modal-5").attr("data-style",$username1);
                    $("#doc-modal-6").attr("data-style",$username1||$username2);
                }else if($check==="b"){
                    $sendcode.attr("name","vmCode");
                    $("#doc-modal-4").attr("data-style",$username2);
                }
            }
            return formcheck;
        },

        onInValid: function(validity) {
            var $field = $(validity.field);
            var $group = $field.closest('.am-form-groupa');
            var $alert = $group.find('.am-alert');
            // 使用自定义的提示信息 或 插件内置的提示信息
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

            $alert.html(msg).show().css('visibility','visible');
            //console.log(validity);
            return formcheck=validity.valid;

            // var $modal = $('#your-modal');
            //
            // $modal.siblings('.am-btn').on('click', function(e) {
            //     var $target = $(e.target);
            //     if (($target).hasClass('js-modal-open')) {
            //         $modal.modal();
            //     } else if (($target).hasClass('js-modal-close')) {
            //         $modal.modal('close');
            //     } else {
            //         $modal.modal('toggle');
            //     }
            // });

        },
        validate: function(validity) {
            var v = $(validity.field).val();
            var $field = $(validity.field);
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);
            //console.log(validity.field);
            var comparer = function(v1, v2) {
                if (v1 != v2) {
                    validity.valid = false;
                }

                // 这些属性目前 v2.3 以前没什么用，如果不想写可以忽略
                // 从 v2.3 开始，这些属性被 getValidationMessage() 用于生成错误提示信息
                if (v2 < 10) {
                    validity.rangeUnderflow = true;
                } else if(v2 > 10) {
                    validity.rangeOverflow = true;
                }
            };

        }
    });
});
$(function() {
    $('#doc-vld-msgmail').validator({

        onValid: function(validity) {
            $(validity.field).closest('.am-form-groupa').find('.am-alert').css('visibility','hidden');
            //console.log($(validity.field));
            formcheck=validity.valid;
            if($(validity.field).is("select")){
                formcheck=false;
                var $check=$(validity.field).siblings(".am-selected").find(".am-selected-content li.am-checked").attr("data-value");
                var $sendcode=$("#doc-modal-7--re").find("input");
                var $username1=$(validity.field).find("option").eq(0).attr("data-style");
                var $username2=$(validity.field).find("option").eq(1).attr("data-style");
                //console.log($check);
                if($check==="a"){
                    $sendcode.attr("name","vvCode");
                    $("#doc-modal-5").attr("data-style",$username1);
                    $("#doc-modal-6").attr("data-style",$username1||$username2);
                }else if($check==="b"){
                    $sendcode.attr("name","vmCode");
                    $("#doc-modal-4").attr("data-style",$username2);
                }
            }
            return formcheck;
        },

        onInValid: function(validity) {
            var $field = $(validity.field);
            var $group = $field.closest('.am-form-groupa');
            var $alert = $group.find('.am-alert');
            // 使用自定义的提示信息 或 插件内置的提示信息
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

            $alert.html(msg).show().css('visibility','visible');
            //console.log(validity);
            return formcheck=validity.valid;

            // var $modal = $('#your-modal');
            //
            // $modal.siblings('.am-btn').on('click', function(e) {
            //     var $target = $(e.target);
            //     if (($target).hasClass('js-modal-open')) {
            //         $modal.modal();
            //     } else if (($target).hasClass('js-modal-close')) {
            //         $modal.modal('close');
            //     } else {
            //         $modal.modal('toggle');
            //     }
            // });

        },
        validate: function(validity) {
            var v = $(validity.field).val();
            var $field = $(validity.field);
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);
            //console.log(validity.field);
            var comparer = function(v1, v2) {
                if (v1 != v2) {
                    validity.valid = false;
                }

                // 这些属性目前 v2.3 以前没什么用，如果不想写可以忽略
                // 从 v2.3 开始，这些属性被 getValidationMessage() 用于生成错误提示信息
                if (v2 < 10) {
                    validity.rangeUnderflow = true;
                } else if(v2 > 10) {
                    validity.rangeOverflow = true;
                }
            };

        }
    });
});
//手机验证码

$('.btn-loading-example').click(function () {

    var $btn = $(this);
    var time = 60;
    $btn.button('loading');
    var hander = setInterval(function () {
        if (time <= 0) {
            clearInterval(hander); //清除倒计时
            $btn.button('reset');
        } else {
            $btn.val("" + (time--) + "秒重发");
        }
    }, 1000);
    var $mom = $btn.closest(".am-form-icon").siblings(".am-form-groupa").find("input").val();
    var $input=  $btn.siblings("input");
    var $inputcontent=$("#doc-modal-7").find("select").find("option");
    var $inputcontent1=$inputcontent.eq(0).attr("data-style");
    var $inputcontent2=$inputcontent.eq(1).attr("data-style");
   // console.log($input.attr("name")==="vmCode");
    if($input.attr("name")==="vmCode"){
        //var data=$($this).val();
        $.ajax({
            type: "post",
            url: "http://www.d1ev.com/member/liutengfei/mailcode",
            dataType: "json",
            data:{email:$inputcontent2||$inputcontent1},
            success: function (_msg) {
                codeajax(_msg,$btn);

            }
        });
    }else if($input.attr("name")==="vvCode"){
        //var data=$($this).val();
        $.ajax({
            type: "post",
            url: "http://www.d1ev.com/member/liutengfei/mobilecode",
            dataType: "json",
            data:{mobile:$inputcontent1||$inputcontent2},
            success: function (_msg) {
                codeajax(_msg,$btn);
            }
        });
    }else if($input.attr("name")==="vmmCode"){
        //var data=$($this).val();
        $.ajax({
            type: "post",
            url: "http://www.d1ev.com/member/liutengfei/onlyemailcode",
            dataType: "json",
            data:{email:$mom},
            success: function (_msg) {
                codeajax(_msg,$btn);

            }
        });
    }else if($input.attr("name")==="vvvCode"){
        //var data=$($this).val();
        $.ajax({
            type: "post",
            url: "http://www.d1ev.com/member/liutengfei/sms",
            dataType: "json",
            data:{mobile:$mom},
            success: function (_msg) {
                codeajax(_msg,$btn);
            }
        });
    }


});


//点击下一步
//$("#doc-modal-7").find("input.am-btn-first").attr("data-am-modal","{target: '#doc-modal-4', closeViaDimmer: 0, width: 470, height: 327}")
function nextone(thisone){
    var $this=$(thisone);
    //console.log($this);
    var $select="b";
    var code=Boolean($("body").attr("data-style"));
    var $input=$("#doc-modal-7--re").find("input");
    if(!$input.val()){
        $input.focus();
    }
    var $vCodedata=$input.val();
    //console.log($vCodedata);
    var $mobile=$this.siblings(".am-form-group").find("select");
    if($mobile.val()==="a"){
        $select=$mobile.find("option").eq(0).attr("data-style");
    }else{
        $select=$mobile.find("option").eq(1).attr("data-style");
    }
    //console.log($select);
    //console.log($mobile);
    var $styles=$("#doc-modal-7").attr("data-style");
    var time=setTimeout(function(){
        if(formcheck&&code){
            $.ajax({
                type: "post",
                url: "http://www.d1ev.com/member/liutengfei/modify",
                dataType: "json",
                data:{select:$select,vCode:$vCodedata},
                success: function (_msg) {
                    console.log(_msg);
                    if(_msg.error===0){
                        changepasses();
                        $("#doc-modal-7").modal('close');
                        if($styles==="mail"){
                            $("#doc-modal-4").modal({closeViaDimmer: 0, width: 470, height: 327});
                        } else if($styles==="mobile"){
                            $("#doc-modal-5").modal({closeViaDimmer: 0, width: 470, height: 327});
                        } else if($styles==="password"){
                            $("#doc-modal-6").modal({closeViaDimmer: 0, width: 470, height: 409});
                        }

                    }else{
                        var $thisone=$this.siblings(".am-form-groupa").find("input");
                        codeajax(_msg,$thisone);
                    }
                }
            });

        }
    });


}
//add data-style
function adddata(a){
    console.log(a);
    var $content=$("#doc-modal-7").find("select").find("option");
    var $username1=$content.eq(0).attr("data-style");
    //console.log($username1);
    var $username2=$content.eq(1).attr("data-style");
    //console.log($username2);
    if(a==="mail"){
        $("#doc-modal-4").attr("data-style",$username2);
    }else if(a==="mobile"){
        $("#doc-modal-5").attr("data-style",$username1);
    }else if(a==="password"){
        $("#doc-modal-6").attr("data-style",$username1||$username2);
    }
}
//点击修改
function sendstyle(a,thisone){
    $("#doc-modal-7").attr("data-style",a);
    var $this=$(thisone);
    var $style= $this.closest("li").attr("data-style");
    //$("#doc-modal-4").attr("data-style",$username2);
    //console.log($style);
    !(function checkwitch(){
        if($style==="old"){
            clickbutton1();
        }else if($style==="new"){
            clickbutton();
        }
    })();
    adddata(a);
    function clickbutton1(){

        $("#doc-modal-7").modal({closeViaDimmer: 0, width: 470, height: 327})
    }
    function clickbutton(){
        $("#doc-modal-7").modal('close');
        if(a==="mail"){
            $("#doc-modal-4").modal({closeViaDimmer: 0, width: 470, height: 327});
        } else if(a==="mobile"){
            $("#doc-modal-5").modal({closeViaDimmer: 0, width: 470, height: 327});
        } else if(a==="password"){
            $("#doc-modal-6").modal({closeViaDimmer: 0, width: 470, height: 409});
        }
    }
}


//点击修改按钮input
//ajax验证
function checkfalse(thisone){

    var $this=$(thisone);
    console.log(formcheck);
    var time=setTimeout(function(){
        if(formcheck){
            //console.log($($this).attr("name")==="mobile");
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
            } else if($($this).attr("name")==="password"){
                var data=$($this).val();
                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/liutengfei/modifypasswordold",
                    dataType: "json",
                    data:{passwordold:data},
                    success: function (_msg) {
                        console.log(_msg);
                        codeajax(_msg,$this);

                    }
                });
            }else if($($this).attr("name")==="vmCode"){
                var data=$($this).val();
                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/liutengfei/rvmailcode",
                    dataType: "json",
                    data:{vCode:data},
                    success: function (_msg) {
                        console.log(_msg);
                        codeajax(_msg,$this);

                    }
                });
            }else if($($this).attr("name")==="vvCode"){
                var data=$($this).val();
                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/liutengfei/rvsms",
                    dataType: "json",
                    data:{vCode:data},
                    success: function (_msg) {
                        console.log(_msg);
                        codeajax(_msg,$this);
                    }
                });
            } else if($($this).attr("name")==="email"){
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
            } else if($($this).attr("name")==="vmmCode"){
                var data=$($this).val();
                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/liutengfei/rvmailcode",
                    dataType: "json",
                    data:{vCode:data},
                    success: function (_msg) {
                        console.log(_msg);
                        codeajax(_msg,$this);

                    }
                });
            }else if($($this).attr("name")==="vvvCode"){
                var data=$($this).val();
                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/liutengfei/rvsms",
                    dataType: "json",
                    data:{vCode:data},
                    success: function (_msg) {
                        console.log(_msg);
                        codeajax(_msg,$this);
                    }
                });
            }

        }
    });

}

//ajax返回值验证
function codeajax(_msg,$this){
    var $alert=$this.closest('.am-form-groupa').find('.am-alert');
    if (_msg.error === 3) {
        console.log(_msg.error);
        $alert.html(_msg.message).show().css('visibility', 'visible');
        var time=setTimeout(function(){
            formcheck=false;
            $("body").attr("data-style","");
        });


    } else if (_msg.error === 0) {
        console.log(_msg.error);
        $alert.html(_msg.message).show().css('visibility', 'hidden');
        var time1=setTimeout(function(){
            formcheck=true;
            $("body").attr("data-style",false);
        });


    } else{
        console.log(_msg.error);
        $alert.html(_msg.message).show().css('visibility', 'visible');
        var time2=setTimeout(function(){
            formcheck=false;
            $("body").attr("data-style","");
        });

    }
}
//last submit点击
function submitclick(thies,thisone){
    var $this=$(thies);
    var code=Boolean($("body").attr("data-style"));
    var $mom=$this.siblings(".am-form-groupa").find("input").val();
    var $inputcontent=$this.siblings(".am-form-icon").find("input").val();
    var $passwordold=$this.siblings(".am-form-groupa").eq(0).find("input").val();
    var $passwordnew=$this.siblings(".am-form-groupa").eq(1).find("input").val();
    var $passwordnewre=$this.siblings(".am-form-groupa").eq(2).find("input").val();
    var $username=$this.closest(".am-modal").attr("data-style");
    //console.log($username);
    //console.log($passwordold);

    //console.log(thisone);
    var time=setTimeout(function(){
    if(formcheck&&code&&thisone==="submitmail"){
        console.log(1);
        $.ajax({
            type: "post",
            url: "http://www.d1ev.com/member/liutengfei/modifyemail",
            dataType: "json",
            data:{select:$username,email:$mom,vCode:$inputcontent},
            success: function (_msg) {
                console.log(_msg);
                codeajax(_msg,$this);
            }
        });
    }else if(formcheck&&code&&thisone==="submitmobile"){
        console.log(2);
        $.ajax({
            type: "post",
            url: "http://www.d1ev.com/member/liutengfei/modifymobile",
            dataType: "json",
            data:{select:$username,mobile:$mom,vCode:$inputcontent},
            success: function (_msg) {
                console.log(_msg);
                codeajax(_msg,$this);
            }
        });
    }else if(formcheck&&code&&thisone==="submitpassword"){
        console.log(3);
        $.ajax({
            type: "post",
            url: "http://www.d1ev.com/member/liutengfei/modifypassword",
            dataType: "json",
            data:{select:$username,oldpassword:$passwordold,newpassword:$passwordnew,repassword:$passwordnewre},
            success: function (_msg) {
                console.log(_msg);
                codeajax(_msg,$this);
            }
        });
    }
});
}

function changepasses() {
    function changepass(a) {

        $("#modifyPassword").find("li").each(function () {
            $(this).attr("data-style", a);
            console.log($(this).attr("data-style"));

        })

    }
    changepass("new");
    var time=setTimeout(function(){
        changepass("old");
        clearTimeout(time);
    },150000);



}