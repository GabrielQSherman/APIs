const express = require('express');
const app = express();

//Routes

app.get('/', (request, response) => {
    response.send('We are on the home dir');
});

// //listen for server start

app.listen(3000);