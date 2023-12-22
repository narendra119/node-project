const request = require("request")


const geocode = (address, callback) => {

    url = `https://api.geoapify.com/v1/geocode/search?text=${address}&apiKey=98102b01b1224d1f9c3ddf5145a56650`
    console.log(url)

    request({ url, json: true}, (error, response) => {
        if (error) {
            callback(error, undefined)
        } else {
            console.log("In Response")
            const response_body = {
                "latitude": response.body.features[0].properties.lat,
                "longitude": response.body.features[0].properties.lon,
                "city": response.body.features[0].properties.city
            }
            callback(undefined, response_body)
        }

    })
}

module.exports = geocode


