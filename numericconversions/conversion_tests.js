// Description: This script tests various numeric
//              coversion techninques
//Author: Diana Melendez

var a = "  101.01  "
var b = "55"
var c = "402 Stevens"
var d = "Number 5  "

var intA = parseInt(a)
var intB = parseInt(b)
var intC = parseInt(c)
var intD = parseInt(d)

console.log("value of intA:", intA);
console.log("value of intB:", intB)
console.log("value of intC:", intC)
console.log("value of intD:", intD)


var FloatA = parseFloat(a)
var FloatB = parseFloat(b)
var FloatC = parseFloat(c)
var FloatD = parseFloat(d)

console.log("value of FloatA:", FloatA)
console.log("value of FloatB:", FloatB)
console.log("value of FloatC:", FloatC)
console.log("value of FloatD:", FloatD)


var NumberA = Number(a)
var NumberB = Number(b)
var NumberC = Number(c)
var NumberD = Number(d)

console.log("value of NumberA:", NumberA)
console.log("value of NumberB:", NumberB)
console.log("value of NumberC:", NumberC)
console.log("value of NumberD:", NumberD)