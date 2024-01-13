const mongoose = require('mongoose')
const validator = require('validator')


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


module.exports = User
