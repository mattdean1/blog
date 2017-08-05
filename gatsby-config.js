module.exports = {
  siteMetadata: {
    author: 'Matt Dean',
    title: 'Some Posts by Matt Dean',
  },
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography-config.js',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
  ],
}
