var example = require('./example');

// log('example.x > ', example.x); // 5
// log('example.addx(2) > ', example.addx(2)) // 7
// log('输出example.js中的warning变量内容 > ', warning); // 可以正常输出内容
// log('输出example.js中的x私有变量内容 > ', x); // x is not defined
log('模块缓存 > ', require);


function log() {
  console.log.apply(this, arguments);
}