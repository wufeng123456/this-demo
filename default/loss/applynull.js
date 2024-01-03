// 隐式丢失示例 - apply入参为null
var obj = {
  a: 1
}

function func () {
  console.log(this)
}

func.apply(obj) // {a: 1}

func.apply(null) // Window {0: Window, window: Window, self: Window, document: document, name: '我是a', location: Location, …}

