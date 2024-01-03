// 显示绑定示例
var obj = {
  a: 1
}
var obj2 = {
  b: 2
}
function func () {
  console.log(this)
}

const newFun = func.bind(obj)
newFun() // {a: 1}
// 硬绑定后，新函数this不可更改（使用new操作符可以更改，要看bind函数的内部实现）
newFun.call(obj2) // {a: 1}

