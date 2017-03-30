
/*
  # 作用域
*/

// 1. 考察局部作用域和全局作用域
  function demo(a) {
    console.log(a);
  }    
  obj = {
    b: '123',
    fn: function(){demo.call(this, b)}  //this指向fn函数作用域
  }
  var b = '321';
  obj.fn();  //输出 321 ，this指向全局作用域(window)

// 2. 函数内为申明 var 的变量为全局变量，b = window.b
  (function(){
    var a = b = 1;
  })(this);

  console.log(a);  //undefined 
  console.log(b);  //1
  console.log(window.b);  //1
     
/*
  # 变量、函数提升
*/

//1. 变量与函数的提升
  (function(a) {
    console.log(a);  //function a() {}
    function a() {};
    var a = 10;
  })(100)

//2. 变量提升与函数提升的优先级，可知函数的优先级高于变量，但是给变量赋值会覆盖函数
  function a() {}
  var a = 1;
  console.log(typeof a);  //number

  var a;
  function a() {}
  console.log(typeof a);  //function

  function a() {};
  var a;
  console.log(typeof a);  //function

//3. 函数声明式与函数字面量(匿名函数)的区别
  (function(){
    console.log(f1);  //function f1() {}
    console.log(f2);  //undefined
    function f1() {};
    var f2 = function() {};
  })(this)
  //这里考察比较全面，涉及了全局匿名函数、函数提升、闭包概念
  function demo() {
    var n = 999;
    a = function() {
      n += 1;
    }
    function b() {
      alert(n);
    }
    return b;
  }
  var c = demo();  
  c();  //999
  a();
  c();  //1000

/*
  # 闭包
*/

//1. 将会输出十个10，原因是因为setTimeout延迟执行
  for(var i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }
//使用闭包解决问题
  for(var i = 0; i < 10; i++) {
    (function(a){
      setTimeout(function() {
        console.log(a);
      }, 1000)
    })(i)
  } 

/*
  setTimeout
*/
//1. 输出1、 4、 2、 3。这里会设置一个定时，也就是产生一个任务队列，即使时间设为 0 ，也会排队。
  (function() {
    console.log(1);
    setTimeout('console.log(2)', 0);
    setTimeout('console.log(3)', 1000);
    console.log(4);
  })(this)
  
/*
  原型链
*/
//1. 基础的原型

/*
  变量类型
*/
//1. 基础的类型 
  console.log(typeof null);  //object
  console.log(typeof String);  //function
  console.log(typeof Number());  //number
  console.log(typeof undefined);  //undefined

/*
  this作用域
*/