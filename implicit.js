// 隐式绑定示例
var obj = {
  a: 1,
  fn: function () {
    console.log('我是谁', this)
  }
}

// 隐式绑定
obj.fn() // {a: 1, fn: ƒ}