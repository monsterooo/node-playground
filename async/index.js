// https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/event-async.md

setTimeout(() => {
  console.log(1);
}, 0);
new Promise((resolve) => {
  console.log(2);
  for(var i = 0; i < 10000; i++) {
    i == 9999 && resolve();
  }
  console.log(3);
}).then(() => {
  console.log(4);
});
console.log(5);

// 5 1 2 3 4
// 2 3 5 4 1

// let doSth =  new Promise((resolve, reject) => {
//   console.log('hello');
//   resolve();
// });

// setTimeout(() => {
//   doSth.then(() => {
//     console.log('over');
//   })
// }, 3000);


// doSth.then(() => {
//   console.log('over');
// })