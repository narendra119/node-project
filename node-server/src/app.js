const path = require('path')
const express = require('express')


console.log(__dirname)
const publicDirectorypath = path.join(__dirname, "../public")

const app = express()

app.use(express.static(publicDirectorypath))

// app.com
// app.com/help
// app.com/about
// app.com/weather

app.get('/', (req, res) => {
    console.log("Logging the logs of home page")
    res.end("<h1> Welcome to the weather app!</h1>")
})


app.get('/weather', (req, res) => {
    res.send({
        "location": "Bangalore",
        "forecast": 23.7,
    })
})


app.get('/help', (req, res) => {
    res.send([
        {
            test: "this",
            abc: "cool",
        },
        {
            test: "example",
            abc: "right",
        },

    ]
    )
})


app.get('/about', (req, res) => {
    res.send("<h1>About Page</h1>")
})


app.listen(3001, () => {
    console.log("Server is up on port 3001")
})
