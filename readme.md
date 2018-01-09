# 创建文件
```
const CreateFile = require('zhf.create-file');
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
        fileName: 'testCreateFile', // 文件名
        extendName: '.js', // 扩展名
        content: 'testCreateFile', // 文件的内容
    },
});
```
