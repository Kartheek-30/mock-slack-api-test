const express = require('express');
const usersRoute = require('./routes/users');
const licenseRoute = require('./routes/license');

const app = express();

app.use(express.json());

app.use('/users', usersRoute);
app.use('/license', licenseRoute);

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Mock Slack API is running"
    });
});

module.exports = app;