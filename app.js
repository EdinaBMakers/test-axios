'use strict';

const express = require('express');
const routes = require('./api/routes/adviceRoutes')
const app = express();

routes(app);

module.exports = app;