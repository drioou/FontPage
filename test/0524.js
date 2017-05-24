'use strict';
function foo() {
    console.log(this.a);
}
// var a = 2;
// foo();
var obj2 = {
    a: 42,
    foo: foo
}
var obj1 = {
    a: 2,
    obj2: obj2
}
// obj1.obj2.foo()
// console.log(this);
function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo
};
var bar = obj.foo;
var a = "oops,global";
// bar();
function foo() {
    console.log(this.a)
}
function doFoo(fn) {
    // debugger
    fn();

}
var obj = {
    a: 2,
    foo: foo
};
var a = "oops,global";
// doFoo(obj.foo)
function foo() {
    console.log(this.a);
}
var obj = {
    a: 2
}
// foo.call(obj);
function foo() {
    console.log(this.a);
}
var obj = {
    a: 2
};
var bar = function () {
    foo.call(obj);
}
// bar();
// setTimeout(bar,100);
// bar.call(window);

function foo(something) {
    console.log(this.a, something);
    return this.a + something;
}
var obj = {
    a: 2
}
var bar = function () {
    // debugger
    return foo.apply(obj, arguments);
}
// var b = bar(3,2,3,2);
// console.log(b)
function bind(fn, obj) {
    return function () {
        // debugger
        return fn.apply(obj, arguments);
    };
}
var obj = {
    a: 2
};
// var bar = bind(foo, obj);
// var b = bar(3);
//

function foo(el){
    console.log(el,this.id);
}
var obj = {
    id:'awesome'
};
[1,2,3].forEach(foo,obj);

var node = document.createElement('div');
node.classList.add('class1');
node.classList.add('class2');
node.classList.add('class3');
// document.node
function foo(p1,p2){
    this.val = p1+p2;
}