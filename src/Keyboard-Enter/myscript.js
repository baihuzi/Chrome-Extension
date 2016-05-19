/**
 * Created by Baihuzi on 2016/5/18.
 */
function setFocus(obj) {
    if (obj.setSelectionRange) {
        setTimeout(function () {
            obj.setSelectionRange(0, 0);
            obj.focus();
        }, 100);
    } else {
        if (obj.createTextRange) {
            var range = obj.createTextRange();
            range.collapse(true);
            range.moveEnd("character", 0);
            range.moveStart("character", 0);
            range.select();
        }
        try {
            obj.focus();
        } catch (e) {
        }
    }
}

$(function () {
    setFocus($("#reply_frame"));
    //$("#reply_frame").attr("autofocus","true");
    document.onkeydown = function (e) {
        var ev = document.all ? window.event : e;
        if (ev.keyCode == 13) {

            var btn_parent = $("#reply_frame").parent();
            var btn = btn_parent.find(".btn_reply");
            $("#reply_frame").val($.trim($("#reply_frame").val()));
            btn.click();

        }
    };


});

