'use strict'

/**
 * Module dependencies
 *
 */
let express = require('express')
let router = express.Router()
let controller = require('./main.controller')

// Define the application routes
router.get('/', controller.getHome)
router.get('/about', controller.getAbout)
router.get('/services', controller.getServices)
router.get('/projects', controller.getProjects)
router.get('/contact', controller.getContact)

module.exports = router
