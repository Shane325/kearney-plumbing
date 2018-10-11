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
let projectConfig = require('./config/project')
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
    assets: config.assets,
    common: commonConfig,
    pageTitle: homeConfig.pageTitle,
    state: homeConfig.state,
    projects: projectsConfig.projects
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
    body: aboutConfig.body,
    projects: projectsConfig.projects
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
    assets: config.assets,
    common: commonConfig,
    pageTitle: servicesConfig.pageTitle,
    state: servicesConfig.state,
    header: servicesConfig.header,
    subheader: servicesConfig.subheader,
    body: servicesConfig.body,
    projects: projectsConfig.projects
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
    subheader: projectsConfig.subheader,
    projects: projectsConfig.projects
  })
}

/**
 * Return project page
 *
 * @returns - renders project page
 */
module.exports.getProject = (req, res) => {
  res.render('../views/pages/project', {
    js: config.lib.js,
    css: config.lib.css,
    common: commonConfig,
    pageTitle: projectConfig.pageTitle,
    state: projectConfig.state,
    header: projectConfig.header,
    subheader: projectConfig.subheader,
    project: req.project,
    projects: projectsConfig.projects
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
    subheader: contactConfig.subheader,
    projects: projectsConfig.projects
  })
}
