'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var extend = require('zhf.extend');
var fs = require('fs');

// 创建文件

var CreateFile = function () {
    function CreateFile(json) {
        _classCallCheck(this, CreateFile);

        this.opts = extend({
            callback: {
                writeFile: function writeFile() {}
            },
            config: {
                isCover: false // 是否覆盖已有文件
            },
            data: {
                path: '', // 路径
                fileName: '', // 文件名
                extendName: '', // 扩展名
                content: '' // 文件的内容
            }
        }, json);
        this.init();
    }

    _createClass(CreateFile, [{
        key: 'init',
        value: function init() {
            this.errorHandle();
        }
    }, {
        key: 'errorHandle',
        value: function errorHandle() {
            var data = this.opts.data;
            if (!data.path) {
                console.log('路径不存在');
                return;
            }
            if (!data.fileName) {
                console.log('文件名不存在');
                return;
            }
            if (!data.extendName) {
                console.log('扩展名不存在');
                return;
            }
            this.power();
        }
    }, {
        key: 'writeFile',
        value: function writeFile() {
            var self = this;
            var data = this.opts.data;
            var file = data.path + data.fileName + data.extendName;
            fs.writeFile(file, data.content, function (error) {
                if (error) {
                    console.log('\u9519\u8BEF\u4FE1\u606F:' + error);
                } else {
                    console.log('\u6587\u4EF6\u521B\u5EFA\u6210\u529F,\u6587\u4EF6\u8DEF\u5F84:' + file);
                }
                self.opts.callback.writeFile(error);
            });
        }
    }, {
        key: 'power',
        value: function power() {
            var self = this;
            var data = this.opts.data;
            var file = data.path + data.fileName + data.extendName;
            fs.readFile(file, function (error, response) {
                if (self.opts.config.isCover) {
                    self.writeFile();
                } else if (error) {
                    self.writeFile();
                } else {
                    console.log('\u6587\u4EF6\u5DF2\u7ECF\u5B58\u5728,\u6587\u4EF6\u8DEF\u5F84:' + file);
                }
            });
        }
    }]);

    return CreateFile;
}();

module.exports = CreateFile;