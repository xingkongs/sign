
!(function(){
    function replaceClass(classname,remove,add){
        var $name=$(classname);
        $name.removeClass(remove).addClass(add);
    }
    function replaceAttr(classname,attrname,value){
        var $name=$(classname);
        $name.attr(attrname,value);
    }
    if(navigator.userAgent.toLowerCase().indexOf("micromessenger") > -1){
        replaceClass(".ev-other-logo a.ev-weix","am-hide-sm","am-u-sm-4");
        replaceClass(".ev-other-logo a.ev-qq","am-u-sm-6","am-u-sm-4");
        replaceClass(".ev-other-logo a.ev-weib","am-u-sm-6","am-u-sm-4");
        replaceAttr(".ev-other-logo a.ev-weix","href","http://www.d1ev.com/member/weixin/wxlogin");
    }
})();