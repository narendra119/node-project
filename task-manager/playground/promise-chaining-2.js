require('../src/db/mongoosee')
const Task = require('../src/models/task')


Task.findByIdAndDelete('659b8743ed72275adb6b68f2').then((task) => {
    console.log(task)
    console.log('Task Deleted Successfully!')
    return Task.countDocuments({})
}).then((result) => {
    console.log("Document Count is", result)
}).catch((e) => {
    console.log(e)
})
