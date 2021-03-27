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
        description: ''
      },
      {
        title: 'Residential Plumbing',
        description: ''
      },
      {
        title: 'Radiant Heating',
        description: ''
      }
      ],
      services_bottom: [{
        title: 'Air to Water Heat Pump',
        description: ''
      },
      {
        title: 'Sewer and Drain Installations',
        description: ''
      }
      ]
    }
  }
}
