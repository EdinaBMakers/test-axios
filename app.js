'use strict';

const express = require('express');
const axios = require('axios');
const app = express();

app.route('/advice').get(async (req, res) => {
  const externalApiResponse = await axios.get('https://api.adviceslip.com/advice');
  const advice = externalApiResponse.data.slip.advice;
  
  res.json(advice);
});

module.exports = app;