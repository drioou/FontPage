var obj = {a: 1, b: undefined, c: null, d: 'adc'}
let c = JSON.stringify(obj)
console.log(c, typeof c, typeof obj)
let a = JSON.parse(JSON.stringify(obj));
console.log(a, typeof a)

let num = [];
for (let i = 0; i < 1000000; i++) {
    num.push(i)
}
// console.log(num)

console.time('123')
let x = [];
num.forEach(function (value) {
    x.push(value)
})
console.timeEnd('123')

console.time('1234')
let y = [];
for (let i of num) {
    y.push(i)
}
console.timeEnd('1234')

console.time('12345')
let z = [];
for (let i = 0; i < num.length; i++) {
    z.push(i)
}
console.timeEnd('12345')