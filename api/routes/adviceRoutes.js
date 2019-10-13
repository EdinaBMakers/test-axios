'use strict';

const adviceController = require('../controllers/adviceController');

module.exports = (app) => {
  app.route('/advice').get(adviceController.getAdvice);
  app.route('/advice/search/:searchTerm').get(adviceController.search);
}