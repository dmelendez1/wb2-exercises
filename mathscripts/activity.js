const totalStudents = 25
const totalPizzas = 4
const slicesperPizzas = 8


const totalSlices = totalPizzas * slicesperPizzas

const slicesperPerson = parseInt(totalSlices / (totalStudents + 1))

const leftoverPizzas = totalSlices % (totalStudents + 1)


