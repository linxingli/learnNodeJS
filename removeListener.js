var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器1
var listener1 = function listener1() {
  console.log('监听器 listener1执行');
}

// 监听器2
var listener2 = function listener2() {
  console.log('监听器 listener2执行');
}

// 绑定 connection 事件,处理函数是listener1
eventEmitter.addListener('connection', listener1)

// 绑定 connection 事件,处理函数是listener2
eventEmitter.on('connection', listener2)

// var eventListioners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
var eventListioners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListioners + " 个监听器监听连接事件。");

// 触发 connection 事件 
eventEmitter.emit('connection');

// 移除绑定的listener1函数
eventEmitter.removeListener('connection', listener1)

// 触发 connection 事件 
eventEmitter.emit('connection');

var eventListioners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListioners + " 个监听器监听连接事件。");

console.log('程序执行完毕!');
