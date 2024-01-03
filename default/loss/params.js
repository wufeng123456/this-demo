// 隐式丢失示例 - 传参
var obj = {
  a: 1,
  fn: function () {
    console.log('我是谁', this)
  }
}

// 隐式绑定
obj.fn() // {a: 1, fn: ƒ}

function cb (fn) {
  fn()
}
// 隐式丢失 - 传参(传参进行的也是赋值操作)
cb(obj.fn) // Window {0: Window, window: Window, self: Window, document: document, name: '我是a', location: Location, …}