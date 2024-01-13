const mongoose = require('mongoose')


const Task = mongoose.model('Task', {
    title: {
        type: String,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        required: false,
    }
})

module.exports = Task
