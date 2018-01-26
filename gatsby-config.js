module.exports = {
  siteMetadata: {
    title: `Soul4Fit`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8,
      },
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};