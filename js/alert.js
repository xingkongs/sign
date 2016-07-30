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
        },

        onInValid: function(validity) {
            var $field = $(validity.field);
            var $group = $field.closest('.am-form-groupa');
            var $alert = $group.find('.am-alert');
            // 使用自定义的提示信息 或 插件内置的提示信息
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

            $alert.html(msg).show().css('visibility','visible');
        },
        validate: function(validity) {
            var v = $(validity.field).val();
            var $field = $(validity.field);
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

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
            // Ajax 验证
            $("input#submit").on("click",function(){
                Response.Redirect("~/");
                if ($(validity.field).is('.js-ajax-validate')) {
                    // 异步操作必须返回 Deferred 对象
                    return $.ajax({
                        url: 'http://s.amazeui.org/media/i/demos/validate.json',
                        // cache: false, 实际使用中请禁用缓存
                        dataType: 'json'
                    }).then(function(data) {
                        comparer(data.count, v);
                        Response.Redirect("~/");
                        //window.location.href='http://www.d1ev.com'
                        $(".alert--position").addClass("am-alert-successes").html(msg).show().hide("fast", arguments.callee );
                        return validity;
                    }, function() {
                        $(".alert--position").addClass("am-alert-dangeres").html(msg).show().hide("fast", arguments.callee );
                        return validity;
                    });
                }
            })



        }
    });
});
