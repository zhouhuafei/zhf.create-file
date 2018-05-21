# 创建文件
* 如果路径不存在，会自动创建路径。
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
        fileName: 'test-create-file', // 文件名
        extendName: '.log', // 扩展名
        content: '测试创建文件', // 文件的内容
    },
});
```
