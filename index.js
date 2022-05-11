var express = require('express');
const res = require('express/lib/response');
var morgan = require('morgan');
var app = express();
var user = require('./api/user');

app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// User로 들어오는 모든 api를 담당함
app.use('/users', user); 

app.listen(3000, function () {
    console.log('Example App Listening on port 3000!');
});

module.exports = app;