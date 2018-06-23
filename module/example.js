var x = 5; // example.js文件私有
var addx = function(value) { // example.js文件私有
  return value + x;
};

module.exports.x = x;
module.exports.addx = addx;

global.warning = '这是一个警告️⚠'; // 可以被所有文件读取


// console.log('example.js中的module对象 > ', module);
// console.log('module.exports等于exports > ', module.exports === exports); // true

