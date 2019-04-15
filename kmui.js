(function (window) {
    var
    __mask,
    __loading,
    __dialog,
    __dialogTitle,
    __dialogContent,
    __dialogButtons,
    __selecter,

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
        messageBox: function (content, callback) {
            kmui.dialog({
                title: "提醒",
                content: content,
                buttons: [
                    {
                        text: "确定",
                        click: function () {
			    if(callbakc){
				    callback();
			    }
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
        showSelecter: function (options) {
            $('html,body').addClass('no-scroll')
            //create elements
            if (!__selecter) {
                var html = '<div class="kmui-select-dialog">';
                    html += '<div class="title-bar">请选择</div>';
                    html += '<ul class="select-box">';
                    html += '</ul>';
                    html += '<div class="form">';
                        html += '<div class="form-submit-line">';
                            html += '<button class="btn-confirm btn-primary">确定</button>';
                            html += '<button class="btn-cancel">取消</button>';
                        html += '</div>';
                    html += '</div>';
                html += '</div>';
                __selecter = $(html).appendTo(window.document.body);
                //when click CANCEL
                __selecter.find('.btn-cancel').click(function () {
                    __selecter.hide();
                    $('html,body').removeClass('no-scroll')
                });                
            }
            //clear list
            var box = __selecter.find('.select-box');
            box.html('');
            //insert items
            for (var i = 0; i < options.data.length; i++) {
                var dataItem = options.data[i];
                var item, itemValue;
                if (options.valueMember && options.textMember) {
                    itemValue = dataItem[options.valueMember] + '';//change to string type
                    item = $('<li class="select-item" data-value="' + itemValue + '">' + dataItem[options.textMember] + '</li>').appendTo(box);
                }
                else {
                    itemValue = dataItem + '';//change to string type
                    item = $('<li class="select-item" data-value="' + dataItem + '">' + dataItem + '</li>').appendTo(box);
                }
                //default checked if exist options.selected
                if (options.selected && options.selected.indexOf(itemValue) >= 0) {
                    item.addClass('checked');
                }
            }
            //bind click event of items
            __selecter.find('.select-item').click(function () {
                if (!options.multiple) {
                    __selecter.find('.select-item').removeClass('checked');
                }
                $(this).toggleClass('checked');
            });
            //rebind click event of OK button
			__selecter.find('.btn-confirm').unbind('click').bind('click', function () {
				var result = [];
				__selecter.find('li.checked').each(function () {
					if (options.valueMember && options.textMember) {
						var o = {};
						o[options.valueMember] = $(this).attr('data-value');
						o[options.textMember] = $(this).text();
						result.push(o);
					}
					else {
						result.push($(this).attr('data-value'));
					}
				});
				__selecter.hide();
				$('html,body').removeClass('no-scroll')
				options.callback(result);//return selected value
			});          
            //show dialog
            __selecter.show();
        }
    };

    window.kmui = kmui;
})(this)
