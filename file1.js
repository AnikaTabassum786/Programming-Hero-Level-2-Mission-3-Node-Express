const {a} = require('./file2')
const {a:x} = require('./file3')

// const {add} = require("./utils/add")
// const {subs} = require("./utils/subs")

const {add,subs} = require('./utils/index.mjs')

// console.log(a,x)
console.log(add(2,2))
console.log(subs(3,2))

