'use strict';

const express = require('express');
const app = express();

app.route('/advice').get((req, res) => {
  res.status(200).send();
});

module.exports = app;