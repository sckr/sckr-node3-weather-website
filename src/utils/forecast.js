const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7397c0c16e4cc89a823b5d885da54ce2&query=' + latitude + ',' + longitude + '&units=m'


    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + (body.current.temperature) + 
                 ' degress out. It feels like ' + (body.current.feelslike) + ' degress out.')
        }
    })
}

module.exports = forecast