const annualSalary = 50000

const monthlyfedTaxes = .23

const monthlyTaxwithheld = (annualSalary / 12) * monthlyfedTaxes

console.log("The monthly tax withheld is: $" + monthlyTaxwithheld.toFixed(0));
