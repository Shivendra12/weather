const { response } = require('express');
const pools = require('../../security/dataBasePool');

class WeatherDb {
    static storeWeatherRequestResponse(postData) {
        return new Promise((resolve, reject) => {
            pools.query(
                `INSERT INTO weather_table(weather_request, weather_response)
                VALUES ($1, $2) RETURNING weather_request,weather_response;`,
                [postData.apiURL, postData.data],
                (error, response) => {
                    if (error) {
                        return reject(error);
                    } else {
                        return resolve(response);
                    }
                }
            );
        });
    }
}

module.exports = WeatherDb;