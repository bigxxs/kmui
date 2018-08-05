(function (window) {
    var
    __mask,
    __dialog,
    __dialog-title,
    __dialog-content,

    kmui = {
        showMask: function () {
            if (!__mask) {
                __mask = $("<div class='kmui-mask'></div>").appendTo(window.document.body);
            }
            console.log(__mask);
            __mask.show();
        },
        hideMask: function () {
            __mask.hide();
        },
        dialog: function (options) {
            this.showMask();
            if (!__dialog) {
                var html = "<div class='kmui-dialog'>";
                html += "<div class='kmui-dialog-title'>标题</div>";
                html += "<div class='kmui-dialog-content'>内容</div>";
                html += "</div>";
                __dialog = $(html).appendTo(window.document.body);
            }
            __dialog.show();
        }
    };

    window.kmui = kmui;
})(this)
