'use strict'

/**
 * Module dependencies
 *
 */
let config = require('./config/config')
let commonConfig = require('./config/common')
let homeConfig = require('./config/home')
let aboutConfig = require('./config/about')
let servicesConfig = require('./config/services')
let projectsConfig = require('./config/projects')
let contactConfig = require('./config/contact')

/**
 * Return home page
 *
 * @returns - renders home page
 */
module.exports.getHome = (req, res) => {
  res.render('../views/pages/index', {
    js: config.lib.js,
    css: config.lib.css,
    common: commonConfig,
    pageTitle: homeConfig.pageTitle,
    state: homeConfig.state
  })
}

/**
 * Return about page
 *
 * @returns - renders about page
 */
module.exports.getAbout = (req, res) => {
  res.render('../views/pages/about', {
    js: config.lib.js,
    css: config.lib.css,
    common: commonConfig,
    pageTitle: aboutConfig.pageTitle,
    state: aboutConfig.state,
    header: aboutConfig.header,
    subheader: aboutConfig.subheader,
    body: aboutConfig.body
  })
}

/**
 * Return services page
 *
 * @returns - renders services page
 */
module.exports.getServices = (req, res) => {
  res.render('../views/pages/services', {
    js: config.lib.js,
    css: config.lib.css,
    common: commonConfig,
    pageTitle: servicesConfig.pageTitle,
    state: servicesConfig.state,
    header: servicesConfig.header,
    subheader: servicesConfig.subheader,
    body: servicesConfig.body
  })
}

/**
 * Return projects page
 *
 * @returns - renders projects page
 */
module.exports.getProjects = (req, res) => {
  res.render('../views/pages/projects', {
    js: config.lib.js,
    css: config.lib.css,
    common: commonConfig,
    pageTitle: projectsConfig.pageTitle,
    state: projectsConfig.state,
    header: projectsConfig.header,
    subheader: projectsConfig.subheader
  })
}

/**
 * Returns contact page
 *
 * @returns - renders contact page
 */
module.exports.getContact = (req, res) => {
  res.render('../views/pages/contact', {
    js: config.lib.js,
    css: config.lib.css,
    common: commonConfig,
    pageTitle: contactConfig.pageTitle,
    state: contactConfig.state,
    header: contactConfig.header,
    subheader: contactConfig.subheader
  })
}
