module.exports = {
  siteMetadata: {
    title: '연습용 블로그',
    description: '연습용 블로그의 연습용 설명',
    author: 'NIHILncunia',
    generator: 'Visual Studio Code',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        sourceMap: true,
        cssPropOptimization: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [ '.mdx', ],
      },
    },
  ],
};