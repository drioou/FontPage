var obj = {a: 1, b: undefined, c: null, d: 'adc'}
let c = JSON.stringify(obj)
console.log(c, typeof c, typeof obj)
let a = JSON.parse(JSON.stringify(obj));
console.log(a, typeof a)