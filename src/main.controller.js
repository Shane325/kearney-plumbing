'use strict'

/**
 * Module dependencies
 *
 */
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
    common: commonConfig,
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
    common: commonConfig,
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
    common: commonConfig,
    state: servicesConfig.state,
    subheader: servicesConfig.subheader
  })
}

/**
 * Return projects page
 *
 * @returns - renders projects page
 */
module.exports.getProjects = (req, res) => {
  res.render('../views/pages/projects', {
    common: commonConfig,
    state: projectsConfig.state,
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
    common: commonConfig,
    state: contactConfig.state,
    subheader: contactConfig.subheader
  })
}
