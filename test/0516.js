// setTimeout(function timeoutHanlder() {
//     console.log('I waited 1 second!');
// }, 1000);
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);
// for (var i = 1; i <= 5; i++) {
//     let j = i;
//     setTimeout(function timer() {
//         console.log(j)
//     }, j * 1000);
// }
//
// for (let i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 1000)
// }
// var MyModules = (function Manager() {
//     var modules = {};
//
//     function define(name, deps, impl) {
//         for (var i = 0; i < deps.length; i++) {
//             deps[i] = modules[deps[i]];
//         }
//         modules[name] = impl.apply(impl, deps);
//     }
//
//     function get(name) {
//         return modules[name];
//     }
//
//     return {
//         define: define,
//         get: get
//     }
// })();
//
// MyModules.define('bar', [], function () {
//     function hello(who) {
//         return 'Let me introduce:' + who;
//     }
//
//     return {
//         hello: hello
//     };
// });
// MyModules.define('foo', ["bar"], function (bar) {
//     var hungry = "hippo";
//
//     function awesome() {
//         console.log(bar.hello(hungry).toUpperCase());
//     }
//
//     return {
//         awesome: awesome
//     }
// });
// var bar = MyModules.get("bar");
// var foo = MyModules.get("foo");
// console.log(bar.hello("hippo"));
// foo.awesome();
function foo() {
    console.log(a);
}
function bar() {
    const a = 3;
    foo();
}
var a = 2;
bar();