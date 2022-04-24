var express = require('express');
var morgan = require('morgan');
var app = express();

var users = [
    { id: 1, name: 'alice' },
    { id: 2, name: 'bek' },
    { id: 3, name: 'chris' }
];

app.use(morgan('dev'));

app.get('/users', (req, res) => {
    res.json(users)
})


app.listen(3000, function () {
    console.log('Example App Listening on port 3000!');
});