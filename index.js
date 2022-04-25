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
    req.query.limit = req.query.limit || 10;

    const limit = parseInt(req.query.limit, 10);

    if (Number.isNaN(limit)) {
        return res.status(400).end();
    };

    res.json(users.splice(0, limit));
})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id, 10)
    if (Number.isNaN(id)) {
        return res.status(400).end();
    }

    const user = users.filter((user) => { return user.id === id })[0];
    if (!user) {
        return res.status(404).end()
    };

    res.json(user);
})


app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
        return res.status(400).end();
    }
    users = users.filter(user => user.id !== id)[0];
    res.status(204).end();
})


app.listen(3000, function () {
    console.log('Example App Listening on port 3000!');
});

module.exports = app;