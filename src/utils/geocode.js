const request = require('request')

const geocode = (location, callback) => {

    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURI(location) + ".json?access_token=pk.eyJ1IjoiZGFua3N0YSIsImEiOiJjazV6NjVnNDMwYnNoM2VtbGlkdGI3c2kzIn0.BewzXp-O0qFElQDUSvhuxA"

    request({"url": url, "json": true}, (error, response)=>{
        if(error)
        {
            callback("Unable to connect", undefined)
        }
        else if(response.body.error)
        {
            callback("Unable to retrieve location details", undefined)
        }
        else{
            callback(undefined, {"place_name": response.body.features[0].place_name, "latitude": response.body.features[0].center[0], "longitude": response.body.features[0].center[1], "response": response})
        }
    })
}

module.exports = geocode