'use strict';

/**
 * Module dependencies
 *
 */
let path = require('path');

/**
 * Return home page
 *
 * @returns - renders home page
 */
module.exports.getHome = (req, res) => {
  res.render('../views/pages/index');
};

