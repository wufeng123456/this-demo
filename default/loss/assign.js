// 隐式丢失示例 - 赋值
var obj = {
  a: 1,
  fn: function () {
    console.log('我是谁', this)
  }
}

// 隐式绑定
obj.fn() // {a: 1, fn: ƒ}

// 隐式丢失 - 赋值操作
var newFn = obj.fn

newFn() // Window {0: Window, window: Window, self: Window, document: document, name: '我是a', location: Location, …}