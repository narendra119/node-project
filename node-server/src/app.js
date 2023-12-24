const path = require('path')
const express = require('express')


console.log(__dirname)
const publicDirectorypath = path.join(__dirname, "../public")

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(publicDirectorypath))

// app.com
// app.com/help
// app.com/about
// app.com/weather

app.get('', (req, res) => {
    console.log("Logging the logs of home page")
    res.render("index", {
        title: "Weather APP hbs",
        name: "Naren"
    })
})


app.get('/weather', (req, res) => {
    res.send({
        "location": "Bangalore",
        "forecast": 23.7,
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        helpParagraph : "Hey, we are here to help you. Don't worry!",
    })
})


app.get('/about', (req, res) => {
    res.render("about", {
        title: "About using hbs",
        name: "Narendra",
    })
})


app.listen(3001, () => {
    console.log("Server is up on port 3001")
})
