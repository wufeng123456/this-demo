// 开启严格模式
// 'use strict'

// 函数直接调用示例
function a () {
  console.log('我是谁', this)
}

a() // Window {0: Window, window: Window, self: Window, document: document, name: '我是a', location: Location, …}