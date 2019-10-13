'use strict';

const express = require('express');
const axios = require('axios');
const app = express();

app.route('/advice').get(async (req, res) => {
  try {
    const externalApiResponse = await axios.get('https://api.adviceslip.com/advice');
    const advice = externalApiResponse.data.slip.advice;
    
    res.json(advice);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.route('/advice/search').get((req, res) => {
  res.status(200).send();
});

module.exports = app;