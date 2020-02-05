const request = require('request')

url = "https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/42.3601,-71.0589"

const forecast = (longitude, latitude, callback) =>{

    const url = "https://api.darksky.net/forecast/8625ea1250a6cf363afd95b600a3fb7a/" + latitude + "," + longitude
    request({"url" : url, "json": true}, (error, response) => {
        if(error){
            callback("Unable to connect to internet", undefined)
        }
        else if(response.body.error){
            console.log(response.body)
            callback("Unable to retrieve location", undefined)
        }
        else{
            callback(undefined, response.body.daily.data[0].summary + "with details "+ response.body.latitude + response.body.longitude)
        }
    })
}

module.exports = forecast
