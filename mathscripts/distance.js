const x1 = 3
const y1 = 6

const x2 = 4
const y2 = 5

const dX = x2 - x1
const dY = y2 - y1

const distance = Math.sqrt(dX ** 2 + dY ** 2)

console.log("the distance between (" + x1 + ", " + y1 + ") and (" + x2 + ", " + y2 + ") is " + distance.toFixed(2))