const express = require('express')
const app = express()
const port = 3000

function logger(req, res, next) {
    console.log(' i am logger');
    next();
}

function logger2(req, res, next) {
    console.log(' i am logger2');
    next();
}



app.use(logger);
app.use(logger2);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))