// 错误理解示例

function a () {
  // 定义this的地方
  console.log('我现在指向的是谁', this)
}

a.name = '我是a'

function b () {
  // 调用this的地方
  a()
}

b.name = '我是b'

b() // '我现在指向的是谁' Window

