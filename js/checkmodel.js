var formcheck = false;
(function ($) {
    if ($.AMUI && $.AMUI.validator) {
        // 增加多个正则
        $.AMUI.validator.patterns = $.extend($.AMUI.validator.patterns, {
            colorHex: /^(#([a-fA-F0-9]{6}|[a-fA-F0-9]{3}))?$/
        });
        // 增加单个正则
        $.AMUI.validator.patterns.yourpattern = /^your$/;
        // 增加单个正则
        $.AMUI.validator.patterns.mobile = /^(13|15|18|14|17)[0-9]{9}$/;
    }
})(window.jQuery);
$(function () {
    $('#doc-vld-msg').validator({

        onValid: function (validity) {
            $(validity.field).closest('.am-form-groupa').find('.am-alert').css('visibility', 'hidden');
            //console.log($(validity.field));
            formcheck = validity.valid;
            if ($(validity.field).is("select")) {
                formcheck = false;
                var $check = $(validity.field).val();
                var $sendcode = $("#doc-modal-7--re").find("input");
                //console.log($check);
                var test = /^1[1-9]\d{9}$/.test($check);
                if (test) {
                    $sendcode.attr("name", "vvCode").attr("minlength", "4");
                    $("#doc-modal-5").attr("data-style", $check);
                    $("#doc-modal-11").attr("data-style", $check);
                } else if (!test) {
                    $sendcode.attr("name", "vmCode").attr("minlength", "6");
                    $("#doc-modal-4").attr("data-style", $check);
                }
            }
            return formcheck;
        },

        onInValid: function (validity) {
            var $field = $(validity.field);
            var $group = $field.closest('.am-form-groupa');
            var $alert = $group.find('.am-alert');
            // 使用自定义的提示信息 或 插件内置的提示信息
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

            $alert.html(msg).show().css('visibility', 'visible');
            //console.log(validity);
            return formcheck = validity.valid;

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
        validate: function (validity) {
            var v = $(validity.field).val();
            var $field = $(validity.field);
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);
            //console.log(validity.field);
            var comparer = function (v1, v2) {
                if (v1 != v2) {
                    validity.valid = false;
                }

                // 这些属性目前 v2.3 以前没什么用，如果不想写可以忽略
                // 从 v2.3 开始，这些属性被 getValidationMessage() 用于生成错误提示信息
                if (v2 < 10) {
                    validity.rangeUnderflow = true;
                } else if (v2 > 10) {
                    validity.rangeOverflow = true;
                }
            };

        }
    });
});
$(function () {
    $('#doc-vld-msgg').validator({

        onValid: function (validity) {
            $(validity.field).closest('.am-form-groupa').find('.am-alert').css('visibility', 'hidden');
            //console.log($(validity.field));
            formcheck = validity.valid;
            if ($(validity.field).is("select")) {
                formcheck = false;
                var $check = $(validity.field).val();
                var $sendcode = $("#doc-modal-7--re").find("input");
                //console.log($check);
                var test = /^1[1-9]\d{9}$/.test($check);
                if (test) {
                    $sendcode.attr("name", "vvCode").attr("minlength", "4");
                    $("#doc-modal-5").attr("data-style", $check);
                    $("#doc-modal-11").attr("data-style", $check);
                } else if (!test) {
                    $sendcode.attr("name", "vmCode").attr("minlength", "6");
                    $("#doc-modal-4").attr("data-style", $check);
                }
            }
            return formcheck;
        },

        onInValid: function (validity) {
            var $field = $(validity.field);
            var $group = $field.closest('.am-form-groupa');
            var $alert = $group.find('.am-alert');
            // 使用自定义的提示信息 或 插件内置的提示信息
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

            $alert.html(msg).show().css('visibility', 'visible');
            //console.log(validity);
            return formcheck = validity.valid;

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
        validate: function (validity) {
            var v = $(validity.field).val();
            var $field = $(validity.field);
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);
            //console.log(validity.field);
            var comparer = function (v1, v2) {
                if (v1 != v2) {
                    validity.valid = false;
                }

                // 这些属性目前 v2.3 以前没什么用，如果不想写可以忽略
                // 从 v2.3 开始，这些属性被 getValidationMessage() 用于生成错误提示信息
                if (v2 < 10) {
                    validity.rangeUnderflow = true;
                } else if (v2 > 10) {
                    validity.rangeOverflow = true;
                }
            };

        }
    });
});
$(function () {
    $('#doc-vld-msgs').validator({

        onValid: function (validity) {
            $(validity.field).closest('.am-form-groupa').find('.am-alert').css('visibility', 'hidden');
            //console.log($(validity.field));
            formcheck = validity.valid;
            if ($(validity.field).is("select")) {
                formcheck = false;
                var $check = $(validity.field).val();
                var $sendcode = $("#doc-modal-7--re").find("input");
                //console.log($check);
                var test = /^1[1-9]\d{9}$/.test($check);
                if (test) {
                    $sendcode.attr("name", "vvCode").attr("minlength", "4");
                    $("#doc-modal-5").attr("data-style", $check);
                    $("#doc-modal-11").attr("data-style", $check);
                } else if (!test) {
                    $sendcode.attr("name", "vmCode").attr("minlength", "6");
                    $("#doc-modal-4").attr("data-style", $check);
                }
            }
            return formcheck;
        },

        onInValid: function (validity) {
            var $field = $(validity.field);
            var $group = $field.closest('.am-form-groupa');
            var $alert = $group.find('.am-alert');
            // 使用自定义的提示信息 或 插件内置的提示信息
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

            $alert.html(msg).show().css('visibility', 'visible');
            //console.log(validity);
            return formcheck = validity.valid;

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
        validate: function (validity) {
            var v = $(validity.field).val();
            var $field = $(validity.field);
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);
            //console.log(validity.field);
            var comparer = function (v1, v2) {
                if (v1 != v2) {
                    validity.valid = false;
                }

                // 这些属性目前 v2.3 以前没什么用，如果不想写可以忽略
                // 从 v2.3 开始，这些属性被 getValidationMessage() 用于生成错误提示信息
                if (v2 < 10) {
                    validity.rangeUnderflow = true;
                } else if (v2 > 10) {
                    validity.rangeOverflow = true;
                }
            };

        }
    });
});
$(function () {
    $('#doc-vld-msgmail').validator({

        onValid: function (validity) {
            $(validity.field).closest('.am-form-groupa').find('.am-alert').css('visibility', 'hidden');
            //console.log($(validity.field));
            formcheck = validity.valid;
            if ($(validity.field).is("select")) {
                formcheck = false;
                var $check = $(validity.field).val();
                var $sendcode = $("#doc-modal-7--re").find("input");
                //console.log($check);
                var test = /^1[1-9]\d{9}$/.test($check);
                if (test) {
                    $sendcode.attr("name", "vvCode").attr("minlength", "4");
                    $("#doc-modal-5").attr("data-style", $check);
                    $("#doc-modal-11").attr("data-style", $check);
                } else if (!test) {
                    $sendcode.attr("name", "vmCode").attr("minlength", "6");
                    $("#doc-modal-4").attr("data-style", $check);
                }
            }
            return formcheck;
        },

        onInValid: function (validity) {
            var $field = $(validity.field);
            var $group = $field.closest('.am-form-groupa');
            var $alert = $group.find('.am-alert');
            // 使用自定义的提示信息 或 插件内置的提示信息
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

            $alert.html(msg).show().css('visibility', 'visible');
            //console.log(validity);
            return formcheck = validity.valid;

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
        validate: function (validity) {
            var v = $(validity.field).val();
            var $field = $(validity.field);
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);
            //console.log(validity.field);
            var comparer = function (v1, v2) {
                if (v1 != v2) {
                    validity.valid = false;
                }

                // 这些属性目前 v2.3 以前没什么用，如果不想写可以忽略
                // 从 v2.3 开始，这些属性被 getValidationMessage() 用于生成错误提示信息
                if (v2 < 10) {
                    validity.rangeUnderflow = true;
                } else if (v2 > 10) {
                    validity.rangeOverflow = true;
                }
            };

        }
    });
});
$(function () {
    $('#doc-vld-msgaddtel').validator({

        onValid: function (validity) {
            $(validity.field).closest('.am-form-groupa').find('.am-alert').css('visibility', 'hidden');
            //console.log($(validity.field));
            formcheck = validity.valid;
            if ($(validity.field).is("select")) {
                formcheck = false;
                var $check = $(validity.field).val();
                var $sendcode = $("#doc-modal-7--re").find("input");
                //console.log($check);
                var test = /^1[1-9]\d{9}$/.test($check);
                if (test) {
                    $sendcode.attr("name", "vvCode").attr("minlength", "4");
                    $("#doc-modal-5").attr("data-style", $check);
                    $("#doc-modal-11").attr("data-style", $check);
                } else if (!test) {
                    $sendcode.attr("name", "vmCode").attr("minlength", "6");
                    $("#doc-modal-4").attr("data-style", $check);
                }
            }
            return formcheck;
        },

        onInValid: function (validity) {
            var $field = $(validity.field);
            var $group = $field.closest('.am-form-groupa');
            var $alert = $group.find('.am-alert');
            // 使用自定义的提示信息 或 插件内置的提示信息
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

            $alert.html(msg).show().css('visibility', 'visible');
            //console.log(validity);
            return formcheck = validity.valid;

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
        validate: function (validity) {
            var v = $(validity.field).val();
            var $field = $(validity.field);
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);
            //console.log(validity.field);
            var comparer = function (v1, v2) {
                if (v1 != v2) {
                    validity.valid = false;
                }

                // 这些属性目前 v2.3 以前没什么用，如果不想写可以忽略
                // 从 v2.3 开始，这些属性被 getValidationMessage() 用于生成错误提示信息
                if (v2 < 10) {
                    validity.rangeUnderflow = true;
                } else if (v2 > 10) {
                    validity.rangeOverflow = true;
                }
            };

        }
    });
});
$(function () {
    $('#doc-vld-msgaddmail').validator({

        onValid: function (validity) {
            $(validity.field).closest('.am-form-groupa').find('.am-alert').css('visibility', 'hidden');
            //console.log($(validity.field));
            formcheck = validity.valid;
            if ($(validity.field).is("select")) {
                formcheck = false;
                var $check = $(validity.field).val();
                var $sendcode = $("#doc-modal-7--re").find("input");
                //console.log($check);
                var test = /^1[1-9]\d{9}$/.test($check);
                if (test) {
                    $sendcode.attr("name", "vvCode").attr("minlength", "4");
                    $("#doc-modal-5").attr("data-style", $check);
                    $("#doc-modal-11").attr("data-style", $check);
                } else if (!test) {
                    $sendcode.attr("name", "vmCode").attr("minlength", "6");
                    $("#doc-modal-4").attr("data-style", $check);
                }
            }
            return formcheck;
        },

        onInValid: function (validity) {
            var $field = $(validity.field);
            var $group = $field.closest('.am-form-groupa');
            var $alert = $group.find('.am-alert');
            // 使用自定义的提示信息 或 插件内置的提示信息
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

            $alert.html(msg).show().css('visibility', 'visible');
            //console.log(validity);
            return formcheck = validity.valid;

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
        validate: function (validity) {
            var v = $(validity.field).val();
            var $field = $(validity.field);
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);
            //console.log(validity.field);
            var comparer = function (v1, v2) {
                if (v1 != v2) {
                    validity.valid = false;
                }

                // 这些属性目前 v2.3 以前没什么用，如果不想写可以忽略
                // 从 v2.3 开始，这些属性被 getValidationMessage() 用于生成错误提示信息
                if (v2 < 10) {
                    validity.rangeUnderflow = true;
                } else if (v2 > 10) {
                    validity.rangeOverflow = true;
                }
            };

        }
    });
});
$(function () {
    $('#doc-vld-msgspassword_set').validator({

        onValid: function (validity) {
            $(validity.field).closest('.am-form-groupa').find('.am-alert').css('visibility', 'hidden');
            //console.log($(validity.field));
            formcheck = validity.valid;
            if ($(validity.field).is("select")) {
                formcheck = false;
                var $check = $(validity.field).val();
                var $sendcode = $("#doc-modal-7--re").find("input");
                //console.log($check);
                var test = /^1[1-9]\d{9}$/.test($check);
                if (test) {
                    $sendcode.attr("name", "vvCode").attr("minlength", "4");
                    $("#doc-modal-5").attr("data-style", $check);
                    $("#doc-modal-11").attr("data-style", $check);
                } else if (!test) {
                    $sendcode.attr("name", "vmCode").attr("minlength", "6");
                    $("#doc-modal-4").attr("data-style", $check);
                }
            }
            return formcheck;
        },

        onInValid: function (validity) {
            var $field = $(validity.field);
            var $group = $field.closest('.am-form-groupa');
            var $alert = $group.find('.am-alert');
            // 使用自定义的提示信息 或 插件内置的提示信息
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

            $alert.html(msg).show().css('visibility', 'visible');
            //console.log(validity);
            return formcheck = validity.valid;

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
        validate: function (validity) {
            var v = $(validity.field).val();
            var $field = $(validity.field);
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);
            //console.log(validity.field);
            var comparer = function (v1, v2) {
                if (v1 != v2) {
                    validity.valid = false;
                }

                // 这些属性目前 v2.3 以前没什么用，如果不想写可以忽略
                // 从 v2.3 开始，这些属性被 getValidationMessage() 用于生成错误提示信息
                if (v2 < 10) {
                    validity.rangeUnderflow = true;
                } else if (v2 > 10) {
                    validity.rangeOverflow = true;
                }
            };

        }
    });
});
//监听select change事件
// function selectchange(thisone){
//     var $this=$(thisone);
//     console.log($this.find("option:selected").attr("data-style"));
// }
//change
function changemo() {
    $("#doc-modal-7").attr("data-style", "password");
}
//倒计时
!(function timemoves() {
    var timelast = $("body").attr("data-ts");
    if (timelast) {
        changepasses(timelast);
    }

})();

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
    var $input = $btn.siblings("input");
    var $inputcontent = $("#doc-modal-7").find("select").val();
    // var $inputcontent1 = $inputcontent.eq(0).attr("data-style");
    // var $inputcontent2 = $inputcontent.eq(1).attr("data-style");
    // console.log($input.attr("name")==="vmCode");
    if ($input.attr("name") === "vmCode") {
        //var data=$($this).val();
        $.ajax({
            type: "post",
            url: "http://www.d1ev.com/member/Accountnew/mailcode",
            dataType: "json",
            data: {email: $inputcontent},
            success: function (_msg) {
                codeajax(_msg, $btn);

            }
        });
    } else if ($input.attr("name") === "vvCode") {
        //var data=$($this).val();
        $.ajax({
            type: "post",
            url: "http://www.d1ev.com/member/Accountnew/mobilecode",
            dataType: "json",
            data: {mobile: $inputcontent},
            success: function (_msg) {
                codeajax(_msg, $btn);
            }
        });
    } else if ($input.attr("name") === "vmmCode") {
        //var data=$($this).val();
        $.ajax({
            type: "post",
            url: "http://www.d1ev.com/member/Accountnew/onlyemailcode",
            dataType: "json",
            data: {email: $mom},
            success: function (_msg) {
                codeajax(_msg, $btn);

            }
        });
    } else if ($input.attr("name") === "vvvCode") {
        //var data=$($this).val();
        $.ajax({
            type: "post",
            url: "http://www.d1ev.com/member/Accountnew/sms",
            dataType: "json",
            data: {mobile: $mom},
            success: function (_msg) {
                codeajax(_msg, $btn);
            }
        });
    }


});


//点击下一步
//$("#doc-modal-7").find("input.am-btn-first").attr("data-am-modal","{target: '#doc-modal-4', closeViaDimmer: 0, width: 470, height: 327}")
function nextone(thisone) {
    var $this = $(thisone);
    //console.log($this);
    var $select = $this.siblings(".am-form-group").find("select").val();
    var code = Boolean($("body").attr("data-style"));
    var $input = $("#doc-modal-7--re").find("input");
    if (!$input.val()) {
        $input.focus();
    }
    var $vCodedata = $input.val();
    //console.log($vCodedata);
    // var $mobile = $this.siblings(".am-form-group").find("select");
    // if ($mobile.val() === "a") {
    //     $select = $mobile.find("option").eq(0).attr("data-style");
    // } else {
    //     $select = $mobile.find("option").eq(1).attr("data-style");
    // }
    //console.log($select);
    //console.log($mobile);
    var $styles = $("#doc-modal-7").attr("data-style");
    var time = setTimeout(function () {
        if (formcheck && code) {
            $.ajax({
                type: "post",
                url: "http://www.d1ev.com/member/Accountnew/modify",
                dataType: "json",
                data: {select: $select, vCode: $vCodedata},
                success: function (_msg) {
                    console.log(_msg);
                    if (_msg.error === 0) {
                        changepasses(90000);
                        console.log($styles);
                        $("#doc-modal-7").modal('close');
                        if ($styles === "mail") {
                            $("#doc-modal-4").modal({closeViaDimmer: 0, width: 470, height: 327});
                        } else if ($styles === "mobile") {
                            $("#doc-modal-5").modal({closeViaDimmer: 0, width: 470, height: 327});
                        } else if ($styles === "password") {
                            $("#doc-modal-11").modal({closeViaDimmer: 0, width: 470, height: 327});
                        }

                    } else {
                        var $thisone = $this.siblings(".am-form-groupa").find("input");
                        codeajax(_msg, $thisone);
                    }
                }
            });

        }
    });


}
//add data-style
function adddata(a) {
    console.log(a);//mail mobile
    var $content = $("#doc-modal-7").find("select").val();
    var $sendcode = $("#doc-modal-7--re").find("input");
    // var $username1 = $content.eq(0).attr("data-style");
    // //console.log($username1);
    // var $username2 = $content.eq(1).attr("data-style");
    //console.log($username2);
    var $check = $("#doc-vld-msgmail").find("select").val();
    var test = /^1[1-9]\d{9}$/.test($check);
    var $name;
    var $number;
    if (test) {
        $name = "vvCode";
        $number = "4"
    } else {
        $name = "vmCode";
        $number = "6"
    }

    if (a === "mail") {
        $sendcode.attr("name", $name).attr("minlength", $number);
        $("#doc-modal-4").attr("data-style", $content);
    } else if (a === "mobile") {
        $sendcode.attr("name", $name).attr("minlength", $number);
        $("#doc-modal-5").attr("data-style", $content);
    } else if (a === "password") {
        $sendcode.attr("name", $name).attr("minlength", $number);
        $("#doc-modal-11").attr("data-style", $content);
    }
}
//点击修改
function sendstyle(a, thisone) {
    $("#doc-modal-7").attr("data-style", a);
    var $this = $(thisone);
    var $style = $this.closest("li").attr("data-style");
    //$("#doc-modal-4").attr("data-style",$username2);
    //console.log($style);
    !(function checkwitch() {
        if ($style === "old") {
            clickbutton1();
        } else if ($style === "new") {
            clickbutton();
        }
    })();
    adddata(a);
    function clickbutton1() {

        $("#doc-modal-7").modal({closeViaDimmer: 0, width: 470, height: 327});
    }

    function clickbutton() {
        $("#doc-modal-7").modal('close');
        if (a === "mail") {
            $("#doc-modal-4").modal({closeViaDimmer: 0, width: 470, height: 327});
        } else if (a === "mobile") {
            $("#doc-modal-5").modal({closeViaDimmer: 0, width: 470, height: 327});
        } else if (a === "password") {
            $("#doc-modal-11").modal({closeViaDimmer: 0, width: 470, height: 327});
        }
    }
}


//点击修改按钮input
//ajax验证
function checkfalse(thisone) {

    var $this = $(thisone);
    console.log(formcheck);
    var time = setTimeout(function () {
        if (formcheck) {
            //console.log($($this).attr("name")==="mobile");
            if ($($this).attr("name") === "mobile") {
                var data = $($this).val();

                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/checkunique",
                    dataType: "json",
                    data: {type: "mobile", value: data},
                    success: function (_msg) {
                        codeajax(_msg, $this);
                        console.log(_msg);
                    }
                });
            } else if ($($this).attr("name") === "bindmobile") {
                var data = $($this).val();

                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/checkunique",
                    dataType: "json",
                    data: {type: "bindmobile", value: data},
                    success: function (_msg) {
                        codeajax(_msg, $this);
                        console.log(_msg);
                    }
                });
            } else if ($($this).attr("name") === "password") {
                var data = $($this).val();
                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/Accountnew/modifypasswordold",
                    dataType: "json",
                    data: {passwordold: data},
                    success: function (_msg) {
                        console.log(_msg);
                        codeajax(_msg, $this);

                    }
                });
            } else if ($($this).attr("name") === "password_bind") {
                var data = $($this).val();
                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/Accountnew/passwordold",
                    dataType: "json",
                    data: {passwordold: data},
                    success: function (_msg) {
                        console.log(_msg);
                        codeajax(_msg, $this);

                    }
                });
            } else if ($($this).attr("name") === "vmCode") {
                var data = $($this).val();
                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/Accountnew/rvmailcode",
                    dataType: "json",
                    data: {vCode: data},
                    success: function (_msg) {
                        console.log(_msg);
                        codeajax(_msg, $this);

                    }
                });
            } else if ($($this).attr("name") === "vvCode") {
                var data = $($this).val();
                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/Accountnew/rvsms",
                    dataType: "json",
                    data: {vCode: data},
                    success: function (_msg) {
                        console.log(_msg);
                        codeajax(_msg, $this);
                    }
                });
            } else if ($($this).attr("name") === "email") {
                var data = $($this).val();

                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/checkunique",
                    dataType: "json",
                    data: {type: "email", value: data},
                    success: function (_msg) {
                        codeajax(_msg, $this);
                        console.log(_msg);
                    }
                });
            } else if ($($this).attr("name") === "bindemail") {
                var data = $($this).val();

                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/checkunique",
                    dataType: "json",
                    data: {type: "bindemail", value: data},
                    success: function (_msg) {
                        codeajax(_msg, $this);
                        console.log(_msg);
                    }
                });
            } else if ($($this).attr("name") === "vmmCode") {
                var data = $($this).val();
                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/Accountnew/rvmailcode",
                    dataType: "json",
                    data: {vCode: data},
                    success: function (_msg) {
                        console.log(_msg);
                        codeajax(_msg, $this);

                    }
                });
            } else if ($($this).attr("name") === "vvvCode") {
                var data = $($this).val();
                $.ajax({
                    type: "post",
                    url: "http://www.d1ev.com/member/Accountnew/rvsms",
                    dataType: "json",
                    data: {vCode: data},
                    success: function (_msg) {
                        console.log(_msg);
                        codeajax(_msg, $this);
                    }
                });
            }

        }
    });

}

//ajax返回值验证
function codeajax(_msg, $this, select) {
    var $alert;
    console.log($this.hasClass("am-modal_button--re"));
    if ($this.hasClass("am-modal_button--re")) {
        $alert = $this.siblings(".am-form-groupa").find(".am-alert").eq(0);
    } else if ($this.attr("name") === "password_bind") {
        $alert = $this.closest('.am-form-password').find('.am-alert');
    } else {
        $alert = $this.closest('.am-form-groupa').find('.am-alert');
    }
    console.log($alert);
    var $select = select;
    if (_msg.error === 3) {
        console.log(_msg.error);
        $alert.html(_msg.message).show().css('visibility', 'visible');
        var time = setTimeout(function () {
            formcheck = false;
            $("body").attr("data-style", "");
        });


    } else if (_msg.error === 0) {
        console.log(_msg.error);
        $alert.html(_msg.message).show().css('visibility', 'hidden');
        var time1 = setTimeout(function () {
            formcheck = true;
            $("body").attr("data-style", false);
            if (select) {

                replace(select, _msg);
            }
        });


    } else {
        console.log(_msg.error);
        $alert.html(_msg.message).show().css('visibility', 'visible');
        var time2 = setTimeout(function () {
            formcheck = false;
            $("body").attr("data-style", "");
        });

    }
}
//last submit点击
function submitclick(thies, thisone) {
    var $this = $(thies);
    var code = Boolean($("body").attr("data-style"));
    var $mom = $this.siblings(".am-form-groupa").find("input").val();
    var $inputcontent = $this.siblings(".am-form-icon").find("input").val();
    var $passwordold = $this.siblings(".am-form-groupa").eq(0).find("input").val();
    var $passwordnew = $this.siblings(".am-form-groupa").eq(1).find("input").val();
    var $passwordnewre = $this.siblings(".am-form-groupa").eq(2).find("input").val();
    var $password = $this.siblings(".am-form-password").find("input").val();
    var $username = $this.closest(".am-modal").attr("data-style");
    //console.log($username);
    //console.log($passwordold);

    //console.log(thisone);
    var time = setTimeout(function () {
        if (formcheck && code && thisone === "submitmail") {
            console.log(1);
            $.ajax({
                type: "post",
                url: "http://www.d1ev.com/member/Accountnew/modifyemail",
                dataType: "json",
                data: {select: $username, email: $mom, vCode: $inputcontent},
                success: function (_msg) {
                    console.log(_msg);
                    codeajax(_msg, $this, thisone);
                }
            });
        } else if (formcheck && code && thisone === "submitmobile") {
            console.log(2);
            $.ajax({
                type: "post",
                url: "http://www.d1ev.com/member/Accountnew/modifymobile",
                dataType: "json",
                data: {select: $username, mobile: $mom, vCode: $inputcontent},
                success: function (_msg) {
                    console.log(_msg);
                    codeajax(_msg, $this, thisone);
                }
            });
        } else if (formcheck && code && thisone === "submitpassword") {
            console.log(3);
            $.ajax({
                type: "post",
                url: "http://www.d1ev.com/member/Accountnew/modifypassword",
                dataType: "json",
                data: {
                    select: $username,
                    oldpassword: $passwordold,
                    newpassword: $passwordnew,
                    repassword: $passwordnewre
                },
                success: function (_msg) {
                    console.log(_msg);
                    codeajax(_msg, $this, thisone);
                }
            });
        } else if (formcheck && code && thisone === "submitaddtel") {
            console.log(4);
            $.ajax({
                type: "post",
                url: "http://www.d1ev.com/member/Accountnew/binding",
                dataType: "json",
                data: {select: $username, binding: $mom, password: $password, vCode: $inputcontent},
                success: function (_msg) {
                    console.log(_msg);
                    codeajax(_msg, $this, thisone);
                }
            });
        } else if (formcheck && code && thisone === "submitaddmail") {
            console.log(5);
            console.log($password);
            $.ajax({
                type: "post",
                url: "http://www.d1ev.com/member/Accountnew/binding",
                dataType: "json",
                data: {select: $username, binding: $mom, password: $password, vCode: $inputcontent},
                success: function (_msg) {
                    console.log(_msg);
                    codeajax(_msg, $this, thisone);
                }
            });
        } else if (formcheck && thisone === "submitsetpassword_set") {
            console.log(6);
            $.ajax({
                type: "post",
                url: "http://www.d1ev.com/member/Accountnew/addpassword",
                dataType: "json",
                data: {
                    newpassword: $passwordold,
                    repassword: $passwordnew
                },
                success: function (_msg) {
                    console.log(_msg);
                    codeajax(_msg, $this, thisone);
                }
            });
        }
    });
}

function changepasses(timelast) {
    function changepass(a) {

        $("#modifyPassword").find("li").each(function () {
            $(this).attr("data-style", a);
            console.log($(this).attr("data-style"));

        })

    }

    if (timelast) {
        changepass("new");
        var time = setTimeout(function () {
            changepass("old");
            clearTimeout(time);
        }, timelast);
    }
}

function bindaddorno(a, thisone) {
    var $this = $(thisone);
    var $select = a;
    var $li = $this.closest("li");
    var $selectcontent = $li.find(".li_span--content").text();
    if ($selectcontent) {
        $li.attr("data-style", "bind");
    } else if (!$selectcontent) {
        $li.attr("data-style", "unbind");
    }
    //console.log($selectcontent);
    //console.log($li);
    if ($li.attr("data-style") === "bind") {//绑定
        //console.log("bind");
        if ($select === "qq") {
            $("#doc-modal-1").modal({closeViaDimmer: 0, width: 470, height: 240});
        } else if ($select === "weixin") {
            $("#doc-modal-2").modal({closeViaDimmer: 0, width: 470, height: 240});
        } else if ($select === "weibo") {
            $("#doc-modal-3").modal({closeViaDimmer: 0, width: 470, height: 240});
        }
    } else if ($li.attr("data-style") === "unbind") {//未绑定
        console.log("unbind");
        if ($select === "qq") {
            url = "http://www.d1ev.com/index.php?g=member&m=third&a=bind&type=qq";
        } else if ($select === "weixin") {
            url = "https://open.weixin.qq.com/connect/qrconnect?appid=wxb6c18a9512fe651a&scope=snsapi_login&redirect_uri=http://www.d1ev.com/member/third/bind&state=&login_type=jssdk";
        } else if ($select === "weibo") {
            url = "http://www.d1ev.com/index.php?g=member&m=third&a=bind&type=sina_weibo";
        }
        window.location.href = url;

    }
}
function unbind(_msg, thisone, select) {
    console.log(1);
    var $this = $(thisone);
    var $select = select;
    var $url=_msg.forword;
    if ($select && $select === "qq") {
        $("#doc-modal-1").modal('close');
        location.reload(true);
    } else if ($select && $select === "weixin") {
        $("#doc-modal-2").modal('close');
        location.reload(true);
    } else if ($select && $select === "weibo") {
        $("#doc-modal-3").modal('close');
        location.reload(true);
    } else if ($select && $select === "submitmail") {
        $("#doc-modal-4").modal('close');
        location.reload(true);
    } else if ($select && $select === "submitmobile") {
        $("#doc-modal-5").modal('close');
        location.reload(true);
    } else if ($select && $select === "submitpassword") {
        $("#doc-modal-6").modal('close');
        location.reload(true);
    } else if ($select && $select === "submitaddtel") {
        $("#doc-modal-9").modal('close');
        window.location.href = $url;
    } else if ($select && $select === "submitaddmail") {
        $("#doc-modal-10").modal('close');
        window.location.href = $url;
    } else if ($select && $select === "submitsetpassword_set") {
        $("#doc-modal-11").modal('close');
        location.reload(true);
    }


}
function externalbind(a, thisone) {
    var $this = $(thisone);
    var $select = a;
    var url;
    var $selectcontent;
    var $add = $("#accountBindContent").find("li");
    var addorno;
    var $li;
    var $alert = $this.siblings(".am-alert");
    if ($select === "qq") {
        $li = $add.eq(0);
        url = "http://www.d1ev.com/index.php?g=member&m=third&a=removebind&type=qq";
        $selectcontent = $li.find(".li_span--content").text();
        addorno = $li.attr("data-style");
    } else if ($select === "weixin") {
        $li = $add.eq(1);
        url = "http://www.d1ev.com/index.php?g=member&m=third&a=removebind&type=weixin";
        $selectcontent = $li.find(".li_span--content").text();
        addorno = $li.attr("data-style");
    } else if ($select === "weibo") {
        $li = $add.eq(2);
        url = "http://www.d1ev.com/index.php?g=member&m=third&a=removebind&type=sina_weibo";
        $selectcontent = $li.find(".li_span--content").text();
        addorno = $li.attr("data-style");
    }
    if (addorno === "bind") {//已绑定
        //console.log("bind");

        $.ajax({
            type: "post",
            url: url,
            dataType: "json",
            data: {
                bind: $selectcontent
            },
            success: function (_msg) {
                // console.log(_msg.error===0);
                if (_msg.error === 0) {
                    unbind(_msg, $this, $select);
                    $li.find(".li_span--content").text("");
                    $li.find(".li_span--button").text("解除绑定");
                } else {
                    $alert.html(_msg.message).show().css('visibility', 'visible');
                }
            }
        });
    }
}
!(function userexternal() {
    var $li = $("#accountBindContent").find("li");
    var $li2 = $("#modifyPassword").find("li");
    $li.each(function () {
        var $span = $(this).find(".li_span--content");
        var $button = $span.closest("li").find(".li_span--button");
        //console.log($span.text());
        if (!$span.text()) {
            $button.text("绑定");
        } else if ($span.text()) {
            $button.text("解除绑定");
        }
    });
    $li2.each(function () {
        if ($(this).find(".li_span--content").text()) {
            $(this).closest("li").find(".li_span--button").removeClass("am-disabled");
        } else if (!$(this).find(".li_span--content").text()) {
            //console.log(this);
            //$(this).find(".li_span--button").addClass("am-disabled");
        }
    })
})();
function replace(select, _msg) {
    console.log(select);
    var thisone = $(this);
    //关闭window
    //replace
    var $li2 = $("#modifyPassword").find("li");
    var $option = $("#doc-vld-msgmail").find("select option");
    if (select === "submitmail") {
        $li2.find(".li_span--content").eq(0).text(_msg.value);
        $option.eq(0).attr("data-style", _msg.select);
        $option.eq(0).text("使用" + _msg.value + "验证");
        unbind(_msg, thisone, select)
    } else if (select === "submitmobile") {
        $li2.find(".li_span--content").eq(1).text(_msg.value);
        $option.eq(1).attr("data-style", _msg.select);
        $option.eq(1).text("使用" + _msg.value + "验证");
        unbind(_msg, thisone, select)
    } else if (select === "submitpassword") {
        unbind(_msg, thisone, select)
    } else if (select === "submitsetpassword_set") {
        unbind(_msg, thisone, select)
    } else if (select === "submitaddtel") {
        unbind(_msg, thisone, select)
    } else if (select === "submitaddmail") {
        unbind(_msg, thisone, select)
    }

}