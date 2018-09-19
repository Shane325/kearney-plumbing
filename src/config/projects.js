'use strict'

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
    name: 'Project 1',
    categories: 'project-residential',
    portfolioImg: {
      src: 'https://via.placeholder.com/576x450',
      alt: 'image'
    },
    type: 'Residential',
    info: 'Progressively enhance prospective networks rather than leading-edge niches. Credibly transition cutting-edge solutions before user-centric process improvements. Synergistically embrace cross-media models vis-a-vis multidisciplinary mindshare. Interactively reintermediate cross-platform functionalities and plug-and-play e-tailers. Phosfluorescently promote magnetic niche markets whereas optimal services.',
    imgs: [
      {
        src: 'https://via.placeholder.com/1200x1200',
        alt: ''
      },
      {
        src: 'https://via.placeholder.com/1200x1200',
        alt: ''
      },
      {
        src: 'https://via.placeholder.com/1200x1200',
        alt: ''
      }
    ]
  }
  ]
}
