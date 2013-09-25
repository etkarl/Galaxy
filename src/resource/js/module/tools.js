/**
* HTML特殊字符转换
* @author : huangjianhua
* @createTime : 2013-9-24
*/
(function ($, window) {
    window.htmlTransfer = {
        encode: function (str) {
            var s = str;
            if (s.length == 0) {
                return s;
            }
            s = s.replace(/&/g, "&amp;");
            s = s.replace(/</g, "&lt;");
            s = s.replace(/>/g, "&gt;");
            s = s.replace(/ /g, "&nbsp;");
            s = s.replace(/\'/g, "&#39;");
            s = s.replace(/\"/g, "&quot;");
            s = s.replace(/\n/g, "<br />");
            return s;
        },
        decode:function(){
            var s = str;
            if (s.length == 0) {
                return s;
            }
            s = s.replace(/&amp;/g, "&");
            s = s.replace(/&lt;/g, "<");
            s = s.replace(/&gt;/g, ">");
            s = s.replace(/&nbsp;/g, " ");
            s = s.replace(/&#39;/g, "\'");
            s = s.replace(/&quot;/g, "\"");
            s = s.replace(/<br>/g, "\n");
            return s;
        }
    };
    $(function () {
        $('.e-btn').click(function () {
            if ($(this).is('#J_BtnEncode')) {
                $('#J_Result').val(htmlTransfer.encode($('#J_Primary').val()));
            }
            else if ($(this).is('#J_BtnDecode')) {
                $('#J_Result').val(htmlTransfer.decode($('#J_Primary').val()));
            }
        });
    });
})(jQuery, window);