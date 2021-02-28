'use strict';

const express = require('express');

const app = express();

/// middlewares

const fiveHundredErr = require('./error-handlers/500.js');
const fourHundredErr = require('./error-handlers/404.js');
const foodRouter = require('./routes/food.js');
const clothesRouter = require('./routes/clothes.js');

app.use(express.json());
// app.use(validator);
app.use(foodRouter);
app.use(clothesRouter);
app.use(fourHundredErr);
app.use(fiveHundredErr);

module.exports = {
  app : app,
  start : (port) => {
    app.listen(port, () => console.log('app is listening on port ::' + port));
  },
};


