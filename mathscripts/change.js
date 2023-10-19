
let changeIncents = 99

let quarters = 0
let dimes = 0
let nickels = 0
let pennies = 0

quarters = Math.trunc(changeIncents / 25)
changeIncents %= 25

dimes = Math.trunc(changeIncents / 10)
changeIncents %= 10

nickels = Math.trunc(changeIncents / 5)
changeIncents %= 5

pennies = changeIncents

console.log("quarters " + quarters)
console.log("dimes " + dimes)
console.log("nickels " + nickels)
console.log("pennies " + pennies)
