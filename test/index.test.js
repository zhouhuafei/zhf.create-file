const CreateFile = require('../dist/index.min');

test(
    `
    new CreateFile({
        callback: {
            // 文件创建完毕的回调
            writeFile: function () {
            },
        },
        config: {
            isCover: false, // 是否覆盖已有文件
        },
        data: {
            path: './', // 路径
            fileName: 'test-create-file', // 文件名
            extendName: '.txt', // 扩展名
            content: '测试创建文件', // 文件的内容
        },
    });
    `,
    () => {
        new CreateFile({
            callback: {
                // 文件创建完毕的回调
                writeFile: function () {
                },
            },
            config: {
                isCover: false, // 是否覆盖已有文件
            },
            data: {
                path: './', // 路径
                fileName: 'test-create-file', // 文件名
                extendName: '.txt', // 扩展名
                content: '测试创建文件', // 文件的内容
            },
        });
        const fs = require('fs');
        fs.stat('./test-create-file.txt', function (error, redult) {
            expect(!error).toBe(true);
        });
    }
);
