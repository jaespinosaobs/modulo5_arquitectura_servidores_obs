const express = require('express');
const apiRoute = require('./routes//api');

const app = express();

app.use('/api',apiRoute);


app.listen(8000, () => {
    console.log('Listen on port 8000');
});