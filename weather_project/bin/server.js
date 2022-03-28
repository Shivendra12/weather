const app = require('../app/index');
const http = require('http');


const portConstant = process.env.PORT || 3001;


app.listen(portConstant, () => {
    console.log(`Listening on port ${portConstant}`);
})
