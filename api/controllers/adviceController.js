'use strict';

const axios = require('axios');

exports.getAdvice = async (req, res) => {
  try {
    const externalApiResponse = await axios.get('https://api.adviceslip.com/advice');
    const advice = externalApiResponse.data.slip.advice;
    
    res.json(advice);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.search = async (req, res) => {
  try {
    const searcTerm = req.params.searchTerm;
    const externalApiResponse = await axios.get(`https://api.adviceslip.com/advice/search/${searcTerm}`);
    const advices = externalApiResponse.data.slips.map(slip => slip.advice);
  
    res.json(advices); 
  } catch (error) {
    res.status(500).json(error);
  }
};