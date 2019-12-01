const express = require('express');
const app = express();


app.use(require('./user'));
app.use(require('./login'));
console.log('index.js');

module.exports = app;