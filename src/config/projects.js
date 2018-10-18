"use strict";

/*
 * Module dependencies
 */
let assets = require("./config").assets;

module.exports = {
  pageTitle: "Projects",
  state: "projects",
  header: {
    class: "header-img-about"
  },
  subheader: {
    title: "Projects",
    menu: [
      {
        name: "Home",
        url: "/"
      },
      {
        name: "Projects",
        url: null
      }
    ]
  },
  projects: [
    {
      id: 1,
      name: "11th Avenue",
      categories: "project-radiant-heat",
      portfolioImg: {
        src: assets + "/projects/11th-ave_1.jpg",
        alt: "11th ave img"
      },
      type: "Radiant Heat",
      address: "San Francisco, CA",
      contractor: "P3 Construction",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/projects/11th-ave_1.jpg",
          alt: "11th ave img 1"
        },
        {
          src: assets + "/projects/11th-ave_2.jpg",
          alt: "11th ave img 2"
        },
        {
          src: assets + "/projects/11th-ave_3.jpg",
          alt: "11th ave img 3"
        },
        {
          src: assets + "/projects/11th-ave_4.jpg",
          alt: "11th ave img 4"
        }
      ]
    },
    {
      id: 2,
      name: "20th Avenue",
      categories: "project-radiant-heat",
      portfolioImg: {
        src: assets + "/projects/20th-ave_1.jpg",
        alt: "20th ave img"
      },
      type: "Radiant Heat",
      address: "San Francisco, CA",
      contractor: "Home Owner",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/projects/20th-ave_1.jpg",
          alt: "20th ave img 1"
        },
        {
          src: assets + "/projects/20th-ave_2.jpg",
          alt: "20th ave img 2"
        },
        {
          src: assets + "/projects/20th-ave_3.jpg",
          alt: "20th ave img 3"
        },
        {
          src: assets + "/projects/20th-ave_4.jpg",
          alt: "20th ave img 4"
        },
        {
          src: assets + "/projects/20th-ave_5.jpg",
          alt: "20th ave img 5"
        },
        {
          src: assets + "/projects/20th-ave_6.jpg",
          alt: "20th ave img 6"
        },
        {
          src: assets + "/projects/20th-ave_7.jpg",
          alt: "20th ave img 7"
        },
        {
          src: assets + "/projects/20th-ave_8.jpg",
          alt: "20th ave img 8"
        }
      ]
    },
    {
      id: 3,
      name: "Hartford Street",
      categories: "project-radiant-heat",
      portfolioImg: {
        src: assets + "/projects/hartford_1.jpg",
        alt: "Hartford img 1"
      },
      type: "Radiant Heat",
      address: "San Francisco, CA",
      contractor: "Bannon Construction",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/projects/hartford_1.jpg",
          alt: "Hartford img 1"
        },
        {
          src: assets + "/projects/hartford_2.jpg",
          alt: "Hartford img 2"
        },
        {
          src: assets + "/projects/hartford_3.jpg",
          alt: "Hartford img 3"
        },
        {
          src: assets + "/projects/hartford_4.jpg",
          alt: "Hartford img 4"
        },
        {
          src: assets + "/projects/hartford_5.jpg",
          alt: "Hartford img 5"
        },
        {
          src: assets + "/projects/hartford_6.jpg",
          alt: "Hartford img 6"
        },
        {
          src: assets + "/projects/hartford_7.jpg",
          alt: "Hartford img 7"
        }
      ]
    },
    {
      id: 4,
      name: "26th Avenue",
      categories: "project-residential",
      portfolioImg: {
        src: assets + "/projects/26th-ave_1.jpg",
        alt: "26th Ave img 1"
      },
      type: "Residential",
      address: "San Francisco, CA",
      contractor: "Stonebridge Construction",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/projects/26th-ave_1.jpg",
          alt: "26th ave img 1"
        },
        {
          src: assets + "/projects/26th-ave_2.jpg",
          alt: "26th ave img 2"
        },
        {
          src: assets + "/projects/26th-ave_3.jpg",
          alt: "26th ave img 3"
        },
        {
          src: assets + "/projects/26th-ave_4.jpg",
          alt: "26th ave img 4"
        },
        {
          src: assets + "/projects/26th-ave_5.jpg",
          alt: "26th ave img 5"
        },
        {
          src: assets + "/projects/26th-ave_6.jpg",
          alt: "26th ave img 6"
        },
        {
          src: assets + "/projects/26th-ave_7.jpg",
          alt: "26th ave img 7"
        },
        {
          src: assets + "/projects/26th-ave_8.jpg",
          alt: "26th ave img 8"
        }
      ]
    },
    {
      id: 5,
      name: "35th Avenue",
      categories: "project-radiant-heat",
      portfolioImg: {
        src: assets + "/projects/35th-ave_1.jpg",
        alt: "35th ave img 1"
      },
      type: "Radiant Heat",
      address: "San Francisco, CA",
      contractor: "Home Owner",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/projects/35th-ave_1.jpg",
          alt: "35th ave img 1"
        },
        {
          src: assets + "/projects/35th-ave_2.jpg",
          alt: "35th ave img 2"
        },
        {
          src: assets + "/projects/35th-ave_3.jpg",
          alt: "35th ave img 3"
        },
        {
          src: assets + "/projects/35th-ave_4.jpg",
          alt: "35th ave img 4"
        }
      ]
    },
    {
      id: 6,
      name: "Aquavista Way",
      categories: "project-residential",
      portfolioImg: {
        src: assets + "/projects/aquavista-way_1.jpg",
        alt: "Aquavista way img 1"
      },
      type: "Residential",
      address: "San Francisco, CA",
      contractor: "Home Owner",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/projects/aquavista-way_1.jpg",
          alt: "Aquavista way img 1"
        },
        {
          src: assets + "/projects/aquavista-way_2.jpg",
          alt: "Aquavista way img 2"
        },
        {
          src: assets + "/projects/aquavista-way_3.jpg",
          alt: "Aquavista way img 3"
        },
        {
          src: assets + "/projects/aquavista-way_4.jpg",
          alt: "Aquavista way img 4"
        },
        {
          src: assets + "/projects/aquavista-way_5.jpg",
          alt: "Aquavista way img 5"
        },
        {
          src: assets + "/projects/aquavista-way_6.jpg",
          alt: "Aquavista way img 6"
        }
      ]
    },
    {
      id: 7,
      name: "Denslowe",
      categories: "project-residential",
      portfolioImg: {
        src: assets + "/placeholder.png",
        alt: "img 1"
      },
      type: "Residential",
      address: "San Francisco, CA",
      contractor: "Carroll Construction",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/placeholder.png",
          alt: "img 1"
        }
      ]
    },
    {
      id: 8,
      name: "Hotel San Francisco",
      categories: "project-commercial",
      portfolioImg: {
        src: assets + "/placeholder.png",
        alt: "img 1"
      },
      type: "Commercial",
      address: "San Francisco, CA",
      contractor: "CDR Construction",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/placeholder.png",
          alt: "img 1"
        }
      ]
    },
    {
      id: 9,
      name: "St. Germaine Ave.",
      categories: "project-radiant-heat",
      portfolioImg: {
        src: assets + "/placeholder.png",
        alt: "img 1"
      },
      type: "Radiant Heat",
      address: "San Francisco, CA",
      contractor: "Dream Castle Construction",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/placeholder.png",
          alt: "img 1"
        }
      ]
    },
    {
      id: 10,
      name: "Loma Vista",
      categories: "project-residential",
      portfolioImg: {
        src: assets + "/placeholder.png",
        alt: "img 1"
      },
      type: "Residential",
      address: "San Francisco, CA",
      contractor: "Home Owner",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/placeholder.png",
          alt: "img 1"
        }
      ]
    },
    {
      id: 11,
      name: "Pacific Ave.",
      categories: "project-residential",
      portfolioImg: {
        src: assets + "/placeholder.png",
        alt: "img 1"
      },
      type: "Residential",
      address: "San Francisco, CA",
      contractor: "Larksbur Builders",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/placeholder.png",
          alt: "img 1"
        }
      ]
    },
    {
      id: 12,
      name: "Pier 23",
      categories: "project-commercial",
      portfolioImg: {
        src: assets + "/placeholder.png",
        alt: "img 1"
      },
      type: "Commercial",
      address: "San Francisco, CA",
      contractor: "Trinet Construction",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/placeholder.png",
          alt: "img 1"
        }
      ]
    },
    {
      id: 13,
      name: "Pier 33",
      categories: "project-commercial",
      portfolioImg: {
        src: assets + "/placeholder.png",
        alt: "img 1"
      },
      type: "Commercial",
      address: "San Francisco, CA",
      contractor: "Restaurant Owner",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/placeholder.png",
          alt: "img 1"
        }
      ]
    },
    {
      id: 14,
      name: "Sanchez St.",
      categories: "project-residential",
      portfolioImg: {
        src: assets + "/placeholder.png",
        alt: "img 1"
      },
      type: "Residential",
      address: "San Francisco, CA",
      contractor: "Sting Ray Construction",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/placeholder.png",
          alt: "img 1"
        }
      ]
    },
    {
      id: 15,
      name: "Santa Ysabel Ave.",
      categories: "project-residential",
      portfolioImg: {
        src: assets + "/placeholder.png",
        alt: "img 1"
      },
      type: "Residential",
      address: "San Francisco, CA",
      contractor: "Right Angle Construction",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/placeholder.png",
          alt: "img 1"
        }
      ]
    }
  ]
};
