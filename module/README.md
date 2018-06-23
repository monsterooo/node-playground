### CommonJS

主要参考学习资料源于http://javascript.ruanyifeng.com/nodejs/module.html

### CommonJS模块的特点如下

* 所有代码都运行在模块作用域，不会污染全局作用域。

* 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。

* 模块加载的顺序，按照其在代码中出现的顺序。

### module对象

Node内部提供一个Module构建函数。所有模块都是Module的实例。

```javascript
function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
  // ...
```

每个模块内部，都有一个module对象，代表当前模块。它有以下属性。

* module.id 模块的识别符，通常是带有绝对路径的模块文件名。

* module.filename 模块的文件名，带有绝对路径。

* module.loaded 返回一个布尔值，表示模块是否已经完成加载。

* module.parent 返回一个对象，表示调用该模块的模块。

* module.children 返回一个数组，表示该模块要用到的其他模块。

* module.exports 表示模块对外输出的值。

### require 流程

require命令是CommonJS规范之中，用来加载其他模块的命令。它其实不是一个全局命令，而是指向当前模块的module.require命令，而后者又调用Node的内部命令Module._load。

require函数及其辅助方法主要如下

* require(): 加载外部模块

* require.resolve()：将模块名解析到一个绝对路径

* require.main：指向主模块

* require.cache：指向所有缓存的模块

* require.extensions：根据文件的后缀名，调用不同的执行函数