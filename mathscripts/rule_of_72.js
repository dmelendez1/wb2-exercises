"use strict"

const initialAmount = 15000
const annualIR = 0.03

const yearstoDouble = 72 / (annualIR * 100)

console.log("It will take approximately " + yearstoDouble.toFixed(1) + " years for a savings account with $" + initialAmount + " to double at an annual interest rate of " + (annualIR * 100) + "%.");
