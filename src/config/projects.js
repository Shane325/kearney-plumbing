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
        src: assets + "/projects/denslowe_1.jpg",
        alt: "Denslowe img 1"
      },
      type: "Residential",
      address: "San Francisco, CA",
      contractor: "Carroll Construction",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/projects/denslowe_1.jpg",
          alt: "Denslowe img 1"
        },
        {
          src: assets + "/projects/denslowe_2.jpg",
          alt: "Denslowe img 2"
        },
        {
          src: assets + "/projects/denslowe_3.jpg",
          alt: "Denslowe img 3"
        },
        {
          src: assets + "/projects/denslowe_4.jpg",
          alt: "Denslowe img 4"
        },
        {
          src: assets + "/projects/denslowe_5.jpg",
          alt: "Denslowe img 5"
        },
        {
          src: assets + "/projects/denslowe_6.jpg",
          alt: "Denslowe img 6"
        },
        {
          src: assets + "/projects/denslowe_7.jpg",
          alt: "Denslowe img 7"
        },
        {
          src: assets + "/projects/denslowe_8.jpg",
          alt: "Denslowe img 8"
        },
      ]
    },
    {
      id: 8,
      name: "Hotel San Francisco",
      categories: "project-commercial",
      portfolioImg: {
        src: assets + "/projects/hotel-san-francisco_1.jpg",
        alt: "Hotel San Francisco img 1"
      },
      type: "Commercial",
      address: "San Francisco, CA",
      contractor: "CDR Construction",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/projects/hotel-san-francisco_1.jpg",
          alt: "Hotel San Francisco img 1"
        },
        {
          src: assets + "/projects/hotel-san-francisco_2.jpg",
          alt: "Hotel San Francisco img 2"
        },
        {
          src: assets + "/projects/hotel-san-francisco_3.jpg",
          alt: "Hotel San Francisco img 3"
        },
        {
          src: assets + "/projects/hotel-san-francisco_4.jpg",
          alt: "Hotel San Francisco img 4"
        },
      ]
    },
    {
      id: 9,
      name: "St. Germaine Ave.",
      categories: "project-radiant-heat",
      portfolioImg: {
        src: assets + "/projects/germaine_1.jpg",
        alt: "Germaine img 1"
      },
      type: "Radiant Heat",
      address: "San Francisco, CA",
      contractor: "Dream Castle Construction",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/projects/germaine_1.jpg",
          alt: "Germaine img 1"
        },
        {
          src: assets + "/projects/germaine_2.jpg",
          alt: "Germaine img 2"
        },
        {
          src: assets + "/projects/germaine_3.jpg",
          alt: "Germaine img 3"
        },
        {
          src: assets + "/projects/germaine_4.jpg",
          alt: "Germaine img 4"
        },
        {
          src: assets + "/projects/germaine_5.jpg",
          alt: "Germaine img 5"
        },
        {
          src: assets + "/projects/germaine_6.jpg",
          alt: "Germaine img 6"
        },
        {
          src: assets + "/projects/germaine_7.jpg",
          alt: "Germaine img 7"
        }
      ]
    },
    {
      id: 10,
      name: "Loma Vista",
      categories: "project-residential",
      portfolioImg: {
        src: assets + "/projects/loma_vista_1.jpg",
        alt: "Loma Vista img 1"
      },
      type: "Residential",
      address: "San Francisco, CA",
      contractor: "Home Owner",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/projects/loma_vista_1.jpg",
          alt: "Loma Vista img 1"
        },
        {
          src: assets + "/projects/loma_vista_2.jpg",
          alt: "Loma Vista img 2"
        },
        {
          src: assets + "/projects/loma_vista_3.jpg",
          alt: "Loma Vista img 3"
        },
        {
          src: assets + "/projects/loma_vista_4.jpg",
          alt: "Loma Vista img 4"
        },
        {
          src: assets + "/projects/loma_vista_5.jpg",
          alt: "Loma Vista img 5"
        },
        {
          src: assets + "/projects/loma_vista_6.jpg",
          alt: "Loma Vista img 6"
        },
        {
          src: assets + "/projects/loma_vista_7.jpg",
          alt: "Loma Vista img 7"
        },
        {
          src: assets + "/projects/loma_vista_8.jpg",
          alt: "Loma Vista img 8"
        }
      ]
    },
    {
      id: 11,
      name: "Pacific Ave.",
      categories: "project-residential",
      portfolioImg: {
        src: assets + "/projects/pacific_1.jpg",
        alt: "Pacific img 1"
      },
      type: "Residential",
      address: "San Francisco, CA",
      contractor: "Larksbur Builders",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/projects/pacific_1.jpg",
          alt: "Pacific img 1"
        },
        {
          src: assets + "/projects/pacific_2.jpg",
          alt: "Pacific img 2"
        },
        {
          src: assets + "/projects/pacific_3.jpg",
          alt: "Pacific img 3"
        },
        {
          src: assets + "/projects/pacific_4.jpg",
          alt: "Pacific img 4"
        },
        {
          src: assets + "/projects/pacific_5.jpg",
          alt: "Pacific img 5"
        },
        {
          src: assets + "/projects/pacific_6.jpg",
          alt: "Pacific img 6"
        }
      ]
    },
    {
      id: 12,
      name: "Pier 23",
      categories: "project-commercial",
      portfolioImg: {
        src: assets + "/projects/pier_23_1.jpg",
        alt: "Pier 23 img 1"
      },
      type: "Commercial",
      address: "San Francisco, CA",
      contractor: "Trinet Construction",
      info: "More info about this project coming soon.",
      imgs: [
        {
          src: assets + "/projects/pier_23_1.jpg",
          alt: "Pier 23 img 1"
        },
        {
          src: assets + "/projects/pier_23_2.jpg",
          alt: "Pier 23 img 2"
        },
        {
          src: assets + "/projects/pier_23_3.jpg",
          alt: "Pier 23 img 3"
        },
        {
          src: assets + "/projects/pier_23_4.jpg",
          alt: "Pier 23 img 4"
        },
        {
          src: assets + "/projects/pier_23_5.jpg",
          alt: "Pier 23 img 5"
        },
        {
          src: assets + "/projects/pier_23_6.jpg",
          alt: "Pier 23 img 6"
        },
        {
          src: assets + "/projects/pier_23_7.jpg",
          alt: "Pier 23 img 7"
        },
        {
          src: assets + "/projects/pier_23_8.jpg",
          alt: "Pier 23 img 8"
        },
        {
          src: assets + "/projects/pier_23_9.jpg",
          alt: "Pier 23 img 9"
        },
        {
          src: assets + "/projects/pier_23_10.jpg",
          alt: "Pier 23 img 10"
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
