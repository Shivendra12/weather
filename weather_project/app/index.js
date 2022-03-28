var express = require('express');
const routerObject = require('./api/index');
const cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

var corsOption = {
    "origin": "*"
}

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use('/weather', routerObject.weatherRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        type: 'error',
        message: err.message
    })

})

module.exports = app;