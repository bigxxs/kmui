(function (window) {
    var
    __mask,
    __loading,
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
        showLoading: function(title){
            if (!__loading) {
                var html = "<div class='kmui-loading'>";
                html += "<i class='fa fa-spinner fa-spin'></i>";
                html += "<div class='kmui-loading-title'>标题</div>";
                html += "</div>";
                __loading = $(html).appendTo(window.document.body);
            }
            if (title) {
                __loading.find('.kmui-loading-title').text(title).show();
            }
            else {
                __loading.find('.kmui-loading-title').hide();
            }
            __loading.show();
        },
        hideLoading: function(){
            __loading.hide();
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
                btn.bind('click', btnDefine.click)
                    .bind('click', function () {
                        __dialog.hide();
                        kmui.hideMask();
                    });
            }
            __dialog.show();
        },
        messageBox: function (content) {
            kmui.dialog({
                title: "提醒",
                content: content,
                buttons: [
                    {
                        text: "确定",
                        click: function () {
                            return true;
                        }
                    }
                ]
            });
        },
        confirm: function (content, callback) {
            kmui.dialog({
                title: "请确认",
                content: content,
                buttons: [
                    {
                        text: "取消",
                        click: function () {
                            callback(false);
                            return true;
                        }
                    },
                    {
                        text: "确定",
                        click: function () {
                            callback(true);
                            return true;
                        }
                    }
                ]
            });
        },
    };

    window.kmui = kmui;
})(this)
