const extend = require('zhf.extend');
const fs = require('fs');

// 创建文件
class CreateFile {
    constructor(json) {
        this.opts = extend({
            callback: {
                writeFile: function () {
                },
            },
            config: {
                isCover: false, // 是否覆盖已有文件
            },
            data: {
                path: '', // 路径
                fileName: '', // 文件名
                extendName: '', // 扩展名
                content: '', // 文件的内容
            },
        }, json);
        this.init();
    }

    init() {
        this.errorHandle();
    }

    errorHandle() {
        const data = this.opts.data;
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

    writeFile() {
        const self = this;
        const data = this.opts.data;
        const file = data.path + data.fileName + data.extendName;
        fs.writeFile(file, data.content, function (error) {
            if (error) {
                console.log(`错误信息:${error}`);
            } else {
                console.log(`文件创建成功,文件路径:${file}`);
            }
            self.opts.callback.writeFile(error);
        });
    }

    power() {
        const self = this;
        const data = this.opts.data;
        const file = data.path + data.fileName + data.extendName;
        fs.readFile(file, function (error, response) {
            if (self.opts.config.isCover) {
                self.writeFile();
            } else if (error) {
                self.writeFile();
            } else {
                console.log(`文件已经存在,文件路径:${file}`);
            }
        });
    }
}

module.exports = CreateFile;
