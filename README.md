# frontendTest
node的版本是v8.10.0

前端测试总结，unit，e2e, 性能测试，ui测试

该项目包括，单元测试，e2e测试，性能测试和ui测试

运行步骤如下

1. npm install
2. npm run unit
这步会进行单元测试和覆盖率检测，单元测试的文件在unit文件夹下，运行后会在terminal中显示测试的结果，项目中会生成一个文件夹coverage，这个名字是在karma.conf.js里配置的，文件夹里的html文件查看测试覆盖率
3. npm run e2e
这里用的是Firefox浏览器，本地需要安装Firefox，并升级到最新版本，如果运行成功，则没有提示，运行失败才会有提示。
4. npm run performance
这个会测试代码的性能，使用的是benchmarkjs
5. ui测试，这个需要全局安装backstopjs
sudo npm install backstopjs -g
然后执行backstop init,  如果执行不成功，试试sudo backstop init
这时会生成一个backstop.json文件和backstop_data文件夹，json文件中是配置项，文件夹放置对比的ui图，和对比的结果，在backstop_data文件夹中需要自己创建一个文件夹，名字是bitmaps_reference，将ui原图放到这个文件夹内，文件夹命名要遵循一定的规则，可以放多张，具体参考官方文档。
然后执行 backstop test，如果执行不成功，试试sudo backstop test，这时就会自动生成一个对比后的html文档。
