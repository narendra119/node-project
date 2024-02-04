const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
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


userSchema.statics.findByCredentials = async (email, password) => {

    const user = User.findOne( { email })

    if (!user) {
        throw new Error("Unable to login")
    }

    const isMatch = bcrypt.match(password, user.password)

    if (!isMatch) {
        throw new Error("Unable to login")
    }

    return user
}


userSchema.pre('save', async function (next) {
    const user = this

    // Hashing the password before saving
    user.password = await bcrypt.hash(user.password, 8)
    console.log("Just before savingg!!")
    next()
})

const User = mongoose.model('User', userSchema)


module.exports = User
