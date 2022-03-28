const { Router } = require("express");
const WeatherDbOperation = require('../../model/weatherDB');
const router = new Router();

router.post('/weather', (req, res) => {
    const data = req.body;
    WeatherDbOperation.storeWeatherRequestResponse(data).then((response) => {
        if (response.rowCount > 0) {
            // console.log('postdata', response.rows[0].weather_response.list[0]);
            res.status(200).send({
                result: true,
                message: 'Request saved successfully',
                data: response.rows[0],
                weather_data: response.rows[0].weather_response.list
            });
        } else {
            res.status(400).send({
                result: false,
                message: 'Failed to insert data',
            });
        }
    }).catch((error) => {
        res.status(500).send({
            result: false,
            message: 'Internal server error' + error,
        });
    });
})

module.exports = router;