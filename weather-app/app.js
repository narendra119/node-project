const request = require("request")
const geocode = require("./utils/geocode")
const getWeather = require("./utils/getWeather")

const address = process.argv[2]

console.log(process.argv)

// Object Shorthand
// Destructuring


if (!address) {
    console.log("Please provide a location as input")
} else {
    geocode(address, (error, data) => {
        if (error) {
            console.log("In error")
            console.log("Error", error)
        } else {
            const {location, latitude, longitude} = data;
            console.log("Location:", location);
            getWeather(latitude, longitude, (error, weather_data) => {
                if(error) {
                    console.log(error)
                } else {
                    console.log(weather_data)
                }
            })
        }
    })
}
