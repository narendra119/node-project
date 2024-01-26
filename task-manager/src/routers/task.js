const express = require("express")

const router = express.Router()


router.post('/tasks', async (req, res) => {
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


router.get('/tasks', async (req, res) => {

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


router.get('/tasks/:id', async (req, res) => {
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


router.get('/tasks/:id', async (req, res) => {

    try {
        const _id = req.params.id

        const task = await Task.findByIdAndDelete(_id)
        if (!task) {
            res.status(404).send()
        }
        console.log(task)
        res.status(204).send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
