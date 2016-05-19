/**
 * Created by Baihuzi on 2016/5/18.
 */


var timestamp = (new Date()).valueOf();

function reloadPage() {
    var current_time = (new Date()).valueOf();

    if ($("#reply_frame").val() == false && current_time - timestamp > 30000) {
        window.location.reload();
    } else {
        alert(current_time);
        alert(timestamp);
    }
}

setInterval(reloadPage(), 20000);
