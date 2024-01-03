// 显示绑定
var obj = {
  a: 1
}

function func () {
  console.log(this)
}

func.apply(obj) // {a: 1}
func.call(obj) // {a: 1}
