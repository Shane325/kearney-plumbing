'use strict'

/*
 * Module dependencies
 */
let assets = require('./config').assets

module.exports = {
  pageTitle: 'About',
  state: 'about',
  header: {
    class: 'header-img-about'
  },
  subheader: {
    title: 'About us',
    menu: [{
      name: 'Home',
      url: '/'
    },
    {
      name: 'About us',
      url: null
    }
    ]
  },
  body: {
    section_history: {
      title: 'Our History',
      description: 'From design to finish, our experienced estimators, project managers and plumbers provide the expertise to ensure your plumbing project is completed on time, on budget and up to code. Kearney Plumbing Inc was founded in November of 2015 by owner Brian Kearney. Before starting up the company Brian had previously worked in the industry for 12 years. His 15 years of experience covers apartment buildings, condominiums and commercial buildings. He has continued to grow his business into a company with a reputation for quality tradesmanship, reliable service and quality practices.'
    },
    section_team: {
      members: [{
        img: {
          src: assets + '/about/brian.jpg',
          alt: 'Brian Kearney'
        },
        displayName: 'Brian Kearney',
        title: 'Owner',
        description: {
          primary: 'Kearney Plumbing Inc was founded in November of 2015 by owner Brian Kearney. Before starting up the company Brian had previously worked in the industry for 12 years. His 15 years of experience covers apartment buildings, condominiums and commercial buildings. He has continued to grow his business into a company with a reputation for quality tradesmanship, reliable service and quality practices.'
        }
      }]
    }
  }
}
