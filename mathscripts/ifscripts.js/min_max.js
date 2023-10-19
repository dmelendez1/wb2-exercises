let a = 5
let b = 15
let c = 10

let smallest, largest


if (a < b) {
    smallest = a
} else {
    smallest = b
}

if (c < smallest) {
    smallest = c
}

if (a > b) {
    largest = a 
} else {
    largest = b
}

if (c > largest) {
    largest = c
}


console.log("smallest: " + smallest)
console.log("largest: " + largest)
