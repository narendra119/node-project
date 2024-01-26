const express = require("express")
const User = require("../models/user")


const router = express.Router()


router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send()
    } catch (e) {
        res.status(500).send(e)
    }

    // TODO: Check the password validation
    // user.save().then((result) => {
    //     res.status(201).send(user)
    // }).catch((error) => {
    //     res.status(500).send(error)
    // })
})


router.get('/users', async (req, res) => {

    try {
        const users = await User.find({})
        return res.status(200).send(users)
    } catch (e) {
        return res.status(500).send(e)
    }

    // User.find({}).then((result) => {
    //     return res.status(200).send(result)
    // }).catch((error) => {
    //     return res.status(500).send(error)
    // })

})


router.get('/users/:id', (req, res) => {
    const _id = req.params.id

    try {
        const user = User.findById(_id)
        console.log("user", user.email)
        if (!user) {
            return res.status(404).send()
        }
        return res.status(200).send(user.name)
    } catch (e) {
        console.log("error")
        return res.status(500).send(e)
    }

    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send()
    //     }
    //     return res.status(200).send(user)
    // }).catch((error) => {
    //     return res.status(500).send(error)
    // })

})


router.patch('/users/:id', async (req, res) => {

    try {
        const _id = req.params.id
        const updates = req.body

        const user = await User.findByIdAndUpdate(_id, updates, { new : true, runValidators: true})
        if (!user) {
            res.status(404).send("User not found")
        }

        res.status(200).send(user)
    } catch (e) {
        res.status(500).send()
    }

})


router.delete('/users/:id', async (req, res) => {

    try {
        const _id = req.params.id

        const user = await User.findByIdAndDelete(_id, )
        if (!user) {
            res.status(404).send("User not found")
        }

        res.status(200).send(user)
    } catch (e) {
        res.status(500).send()
    }

})

module.exports = router
