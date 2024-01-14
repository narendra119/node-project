
require('../src/db/mongoosee')
const User = require('../src/models/user')


User.findByIdAndUpdate("659cceda995b212ec598af56", { age : 7}).then((user) => {
    console.log(user)
    return User.countDocuments({ age : 7})
}).then((result) => {
    console.log("count of documents:", result)
}).catch((error) => {
    console.log(error)
})
