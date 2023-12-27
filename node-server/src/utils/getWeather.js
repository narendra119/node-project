const request = require('request')


const getWeather = (lat, lon, callback) => {

    url = `http://api.weatherstack.com/current?access_key=3a6f4b720d3b441ba0712af7930846a5&query=${lat},${lon}`

    request({ url, "json":true}, (error, response) => {
        if (error) {
            callback("Something went wrong!", undefined)
        } else {
            current = response.body.current
            const {temperature, feelslike} = current
            out = current.weather_descriptions[0] + `. It is currently ${temperature} degrees out, But it feels like ${feelslike} degrees out`
            callback(undefined, out)
        }

    })
}

module.exports = getWeather
