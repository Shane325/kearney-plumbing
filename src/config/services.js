'use strict'

module.exports = {
  pageTitle: 'Services',
  state: 'services',
  header: {
    class: 'header-img-about'
  },
  subheader: {
    title: 'Services',
    menu: [{
      name: 'Home',
      url: '/'
    },
    {
      name: 'Services',
      url: null
    }
    ]
  },
  body: {
    section_services: {
      title: 'Our Services',
      description: 'We provide an array of Plumbing services for all job types.'
    },
    section_services_info: {
      services_top: [{
        title: 'Commercial Plumbing',
        description: 'More information coming soon.'
      },
      {
        title: 'Residential Plumbing',
        description: 'More information coming soon.'
      },
      {
        title: 'Radiant Heating',
        description: 'More information coming soon.'
      }
      ],
      services_bottom: [{
        title: 'Piping Systems',
        description: 'More information coming soon.'
      },
      {
        title: 'Bathroom and Kitchen Remodels',
        description: 'More information coming soon.'
      },
      {
        title: 'Sewer and Drain Installations',
        description: 'More information coming soon.'
      }
      ]
    }
  }
}
