module.exports = {
  siteMetadata: {},
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        sourceMap: true,
        cssPropOptimization: true,
      },
    },
  ],
};