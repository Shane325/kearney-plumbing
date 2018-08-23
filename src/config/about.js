'use strict'

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
      description: 'Kearney Plumbing Inc was founded in November of 2015 by owner Brian Kearney. Before starting up the company Brian had previously worked in the industry for 12 years. His 15 years of experience covers apartment buildings, condominiums and commercial buildings. He has continued to grow his business into a company with a reputation for quality tradesmanship, reliable service and quality practices.'
    },
    section_team: {
      members: [{
        img: {
          src: 'http://via.placeholder.com/380x300',
          alt: 'Brian Kearney'
        },
        displayName: 'Brian Kearney',
        title: 'Owner',
        description: {
          primary: 'Before starting up the company Brian had previously worked in the industry for 12 years. His 15 years of experience covers apartment buildings, condominiums and commercial buildings.',
          secondary: 'Continually initiate wireless architectures before virtual niches. Seamlessly leverage other\'s competitive systems with user friendly e - tailers.Globally benchmark installed base customer service after granular methods of empowerment.Synergistically maximize orthogonal portals without compelling e - commerce.Monotonectally fabricate exceptional sources with enabled opportunities.'
        }
      }]
    }
  }
}
