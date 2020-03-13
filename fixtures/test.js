const sify = require("..")

const testFunction = (value) => Promise.resolve(value)
const syncTestFunction = sify(testFunction)

const returnValue = syncTestFunction("a")

console.log(returnValue)
