

const payRate1 = 12.50
const hoursWorked1 = 20

const payRate2 = 25.00
const hoursWorked2 = 40

const payRate3 = 17.30
const hoursWorked3 = 45

const regularHours1 = Math.min(hoursWorked1, 40)

const overtimeHours1 = Math.max(hoursWorked1 - 40, 0)

const regularPay1 = regularHours1 * payRate1
const overtimePay1 = overtimeHours1 * (payRate1 * 1.5)
const grossPay1 = regularPay1 + overtimePay1



const regularHours2 = Math.min(hoursWorked2, 40)

const overtimeHours2 = Math.max(hoursWorked2 - 40, 0)

const regularPay2 = regularHours2 * payRate2
const overtimePay2 = overtimeHours2 * (payRate2 * 1.5)
const grossPay2 = regularPay2 + overtimePay2




const regularHours3 = Math.min(hoursWorked3, 40)

const overtimeHours3 = Math.max(hoursWorked3 - 40, 0)

const regularPay3 = regularHours3 * payRate3
const overtimePay3 = overtimeHours3 * (payRate3 * 1.5)
const grossPay3 = regularPay3 + overtimePay3


console.log("1st pay:")
console.log("Gross Pay: $" + grossPay1.toFixed(2))

console.log("2nd pay:")
console.log("Gross pay: $" + grossPay2.toFixed(2))

console.log("3rd pay:")
console.log("Gross pay: $" + grossPay3.toFixed(2))
