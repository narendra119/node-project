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


router.post("/user/login", async (req, res) => {

    try {
        const user = User.findByCredentials(req.body.email, req.body.password)
        res.send(user)
    } catch {
        res.status(400).send()
    }
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


router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        console.log("id is", _id)

        const user = await User.findById(_id)
        console.log("user", user.email)

        if (!user) {
            return res.status(404).send()
        }

        return res.status(200).send(user)
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

    const updates = Object.keys(req.body)
    allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidUpdate) {
        return res.status(400).send("Please send valid fields for update")
    }

    try {
        const _id = req.params.id

        const user = await User.findById(_id)

        if (!user) {
            res.status(404).send("User not found")
        }

        updates.forEach((update) => user[update] = req.body[update])

        await user.save()

        res.status(200).send(user)
    } catch (e) {
        res.status(500).send(e)
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
