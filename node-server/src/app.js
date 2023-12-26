const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()

// Setting up the directory paths
const publicDirectorypath = path.join(__dirname, "../public")
const templatesDirectorypath = path.join(__dirname, "../templates/views")
const partialDirectorypath = path.join(__dirname, "../templates/partials")

// Config
app.set('view engine', 'hbs')
app.set('views', templatesDirectorypath)
hbs.registerPartials(partialDirectorypath)

// Static Directory setup
app.use(express.static(publicDirectorypath))

// app.com
// app.com/help
// app.com/about
// app.com/weather

app.get('', (req, res) => {
    console.log("Logging the logs of home page")
    res.render("index", {
        title: "Weather APP hbs",
        name: "Narendra",
    })
})


app.get('/weather', (req, res) => {
    res.send({
        location: "Bangalore",
        forecast: 23.7,
        name: "Narendra",
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        helpParagraph : "Hey, we are here to help you. Don't worry!",
        name: "Narendra",
    })
})


app.get('/help/*', (req, res) => {
    res.render("error",{
        errorMessage: "No Article Found",
        name: "Narendra",
    })
})


app.get('/about', (req, res) => {
    res.render("about", {
        title: "About using hbs",
        name: "Naren",
    })
})


app.get('*', (req, res) => {
    res.render("error", {
        errorMessage: "404 Not Found",
        name: "Narendra",
    })
})


app.listen(3001, () => {
    console.log("Server is up on port 3001")
})
