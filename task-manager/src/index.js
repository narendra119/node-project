const express = require("express")
require("./db/mongoosee")
const User = require("./models/user")
const Task = require("./models/task")

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())


app.post('/users', async (req, res) => {
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


app.get('/users', async (req, res) => {

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


app.get('/users/:id', (req, res) => {
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


app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }

    // task.save().then(() => {
    //     res.status(201).send(result)
    // }).catch((error) => {
    //     res.status(500).send(error)
    // })
})


app.get('/tasks', async (req, res) => {

    try {
        const tasks = await Task.find({})
        res.status(200).send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }

    // Task.find({}).then((result) => {
    //     return res.status(200).send(result)
    // }).catch((error) => {
    //     return res.status(500).send(error)
    // })
})


app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)
        if (!task) {
            res.status(404).send()
        }
        console.log(task)
        res.status(200).send(task)
    } catch (e) {
        res.status(500).send()
    }

    // Task.findById(_id).then((task) => {
    //     if (!task) {
    //         return res.status(404).send()
    //     }
    //     return res.status(200).send(task)
    // }).catch((error) => {
    //     return res.status(500).send(error)
    // })

})


app.listen(port, () => {
    console.log(`Application running on port ${port}`)
})
