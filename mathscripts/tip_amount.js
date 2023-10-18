"use strict"

const billAmount = 150.21
const typicalTip = 20

const tipAmount = (billAmount * typicalTip) / 100

console.log("the tip amount: $" + tipAmount.toFixed(2))