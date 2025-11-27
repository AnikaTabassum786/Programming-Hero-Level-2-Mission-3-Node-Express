// const {add} = require('./add')
// const {subs} = require('./subs')

// module.exports = {add,subs}

import {add} from './add.mjs'
import biog from './subs.mjs'

console.log(biog(9,8))

export default {
    add,
    biog
}