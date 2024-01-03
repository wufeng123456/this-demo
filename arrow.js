function foo() {
  setTimeout(() => {
    console.log(this.a);
  }, 100);
}
var obj = {
  a: 2,
};
foo.call(obj); // 2

// 等价于下面的写法

function foo() {
  const that = this
  setTimeout(function () {
    console.log(that.a);
  }, 100);
}
var obj = {
  a: 2,
};
foo.call(obj); // 2
