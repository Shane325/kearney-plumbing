'use strict'

/*
 * Module dependencies
 */
let assets = require('./config').assets

module.exports = {
  pageTitle: 'Projects',
  state: 'projects',
  header: {
    class: 'header-img-about'
  },
  subheader: {
    title: 'Projects',
    menu: [{
        name: 'Home',
        url: '/'
    },
      {
        name: 'Projects',
        url: null
    }
    ]
  },
  projects: [{
      id: 1,
      name: '11th Avenue',
      categories: 'project-radiant-heat',
      portfolioImg: {
        src: assets + '/projects/11th-ave_1.jpg',
        alt: '11th ave img'
      },
      type: 'Radiant Heat',
      address: 'San Francisco, CA',
      client: '123 Builders',
      duration: '9 weeks',
      info: 'Progressively enhance prospective networks rather than leading-edge niches. Credibly transition cutting-edge solutions before user-centric process improvements. Synergistically embrace cross-media models vis-a-vis multidisciplinary mindshare. Interactively reintermediate cross-platform functionalities and plug-and-play e-tailers. Phosfluorescently promote magnetic niche markets whereas optimal services.',
      imgs: [
        {
          src: assets + '/projects/11th-ave_1.jpg',
          alt: '11th ave img 1'
        },
        {
          src: assets + '/projects/11th-ave_2.jpg',
          alt: '11th ave img 2'
        },
        {
          src: assets + '/projects/11th-ave_3.jpg',
          alt: '11th ave img 3'
        },
        {
          src: assets + '/projects/11th-ave_4.jpg',
          alt: '11th ave img 4'
        }
    ]
  },
    {
      id: 2,
      name: '20th Avenue',
      categories: 'project-residential',
      portfolioImg: {
        src: assets + '/projects/20th-ave_1.jpg',
        alt: '20th ave img'
      },
      type: 'Residential',
      address: 'San Francisco, CA',
      client: '123 Builders',
      duration: '9 weeks',
      info: 'Progressively enhance prospective networks rather than leading-edge niches. Credibly transition cutting-edge solutions before user-centric process improvements. Synergistically embrace cross-media models vis-a-vis multidisciplinary mindshare. Interactively reintermediate cross-platform functionalities and plug-and-play e-tailers. Phosfluorescently promote magnetic niche markets whereas optimal services.',
      imgs: [
        {
          src: assets + '/projects/20th-ave_1.jpg',
          alt: '20th ave img 1'
        },
        {
          src: assets + '/projects/20th-ave_2.jpg',
          alt: '20th ave img 2'
        },
        {
          src: assets + '/projects/20th-ave_3.jpg',
          alt: '20th ave img 3'
        },
        {
          src: assets + '/projects/20th-ave_4.jpg',
          alt: '20th ave img 4'
        },
        {
          src: assets + '/projects/20th-ave_5.jpg',
          alt: '20th ave img 5'
        },
        {
          src: assets + '/projects/20th-ave_6.jpg',
          alt: '20th ave img 6'
        },
        {
          src: assets + '/projects/20th-ave_7.jpg',
          alt: '20th ave img 7'
        },
        {
          src: assets + '/projects/20th-ave_8.jpg',
          alt: '20th ave img 8'
        },
        {
          src: assets + '/projects/20th-ave_9.jpg',
          alt: '20th ave img 9'
        }
            ]
},
    {
      id: 3,
      name: 'Hartfort Street',
      categories: 'project-commercial',
      portfolioImg: {
        src: 'https://via.placeholder.com/576x450',
        alt: 'image'
      },
      type: 'Commercial',
      address: 'San Francisco, CA',
      client: '123 Builders',
      duration: '9 weeks',
      info: 'Progressively enhance prospective networks rather than leading-edge niches. Credibly transition cutting-edge solutions before user-centric process improvements. Synergistically embrace cross-media models vis-a-vis multidisciplinary mindshare. Interactively reintermediate cross-platform functionalities and plug-and-play e-tailers. Phosfluorescently promote magnetic niche markets whereas optimal services.',
      imgs: [
        {
          small: {
            src: 'https://via.placeholder.com/300x300',
            alt: ''
          },
          large: {
            src: 'https://via.placeholder.com/1200x800',
            alt: ''
          }
                 },
        {
          small: {
            src: 'https://via.placeholder.com/300x300',
            alt: ''
          },
          large: {
            src: 'https://via.placeholder.com/1200x800',
            alt: ''
          }
                 },
        {
          small: {
            src: 'https://via.placeholder.com/300x300',
            alt: ''
          },
          large: {
            src: 'https://via.placeholder.com/1200x800',
            alt: ''
          }
                 },
        {
          small: {
            src: 'https://via.placeholder.com/300x300',
            alt: ''
          },
          large: {
            src: 'https://via.placeholder.com/1200x800',
            alt: ''
          }
                 },
        {
          small: {
            src: 'https://via.placeholder.com/300x300',
            alt: ''
          },
          large: {
            src: 'https://via.placeholder.com/1200x800',
            alt: ''
          }
                 },
        {
          small: {
            src: 'https://via.placeholder.com/300x300',
            alt: ''
          },
          large: {
            src: 'https://via.placeholder.com/1200x800',
            alt: ''
          }
                 }
               ]
             }]
}
