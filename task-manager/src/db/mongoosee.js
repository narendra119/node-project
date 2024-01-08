const mongoose = require("mongoose")
const validator = require("validator")


mongoose.connect('mongodb://127.0.01:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value <=6) {
                throw new Error("Password should be greater than 6")
            }
            if (validator.contains(value.toLowerCase(), 'password')) {
                throw new Error("Password should not contain the word 'password'")
            }
        }
    },
    email: {
        type: String,
        required: false,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error("Age must be a Positive Number")
            }
        }
    }
})

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

// const user = new user({
//     name: "narendra",
//     email: "abc@def.com",
//     password: "     @spacesone.com",
//     age: 1
// })

// user.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

// Creating a Task Object(mongoose model type) and inserting it into DB
const task = new Task({
    title: "Finish Node Course",
    description: "    Put a daily, consistent and systematic effort to finish off the course. Be patient in the process! ",
})

task.save().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

// Creating a User Object(mongoose model type) and inserting it into DB
// const me = User({
//     name: "Naren",
//     age: 10,
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })
