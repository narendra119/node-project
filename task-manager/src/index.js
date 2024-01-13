const express = require("express")
require("./db/mongoosee")
const User = require("./models/user")
const Task = require("./models/task")

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())


app.post('/users', (req, res) => {
    const user = new User(req.body)

    // TODO: Check the password validation
    user.save().then((result) => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(500).send(error)
    })
})


app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(result)
    }).catch((error) => {
        res.status(500).send(error)
    })
})


app.listen(port, () => {
    console.log(`Application running on port ${port}`)
})
