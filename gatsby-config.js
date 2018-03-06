module.exports = {
  siteMetadata: {
    title: 'Floris S. Koch',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/projects`,
        name: "markdown-pages",
      },
    },
  ],
};
