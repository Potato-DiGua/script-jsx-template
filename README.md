# script-jsx-template

在脚本中使用jsx的工程模板，jsx框架可以一键切换，支持如下框架

| 框架     | 说明                           | 推荐使用范围                                                 |构建命令|
| -------- | ------------------------------ | ------------------------------------------------------------ |---|
| [dom-chef](https://github.com/vadimdemedes/dom-chef) | 仅实现了jsx的createElement方法,不支持UI自动更新 | 只需要简单的UI控制脚本逻辑，不需要进行复杂的状态管理和UI更新 |`pnpm run build:domchef`|
| [preact](https://github.com/preactjs/preact)   | react的极小实现, 只有3KB       | 需要复杂的UI控制脚本逻辑                                 |`pnpm run build:preact`|

### 本项目的实例代码构建产物大小对比
|框架|大小|
|--|--|
|dom-chef|4KB|
|preact|22KB|