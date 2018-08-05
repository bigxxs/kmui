(function (window) {
    var
    __mask,
    __dialog,
    __dialogTitle,
    __dialogContent,
    __dialogButtons,

    kmui = {
        showMask: function () {
            if (!__mask) {
                __mask = $("<div class='kmui-mask'></div>").appendTo(window.document.body);
            }
            __mask.show();
        },
        hideMask: function () {
            __mask.hide();
        },
        dialog: function (options) {
            kmui.showMask();
            if (!__dialog) {
                var html = "<div class='kmui-dialog'>";
                html += "<div class='kmui-dialog-title'>标题</div>";
                html += "<div class='kmui-dialog-content'>内容</div>";
                html += "<div class='kmui-dialog-buttons'></div>";
                html += "</div>";
                __dialog = $(html).appendTo(window.document.body);
            }
            __dialog.find('.kmui-dialog-title').text(options.title);
            __dialog.find('.kmui-dialog-content').text(options.content);
            var buttons = __dialog.find('.kmui-dialog-buttons');
            buttons.html('');
            for (var i = 0; i < options.buttons.length; i++) {
                var btnDefine = options.buttons[i]
                var btn = $('<a href="javascript:void(0);"></a>').appendTo(buttons);
                btn.text(btnDefine.text);
                btn.click(function () {
                    btnDefine.click();
                    __dialog.hide();
                    kmui.hideMask();
                });
            }
            __dialog.show();
        }
    };

    window.kmui = kmui;
})(this)
