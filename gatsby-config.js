const unwrapImages = require('remark-unwrap-images');

module.exports = {
  siteMetadata: {
    title: '니힐 블로그',
    description: '프로그래밍과 일본어, 그리고 게임 관련된 컨텐츠를 다루는 블로그입니다. 자유롭게 손보고 싶어서 GatsbyJS로 구축했고 앞서 언급한 주제들 말고도 더욱 다양한 주제를 다뤄볼 예정입니다.',
    author: 'NIHILncunia',
    generator: 'Visual Studio Code',
    url: 'https://nihilncunia-blog.github.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [ '.mdx', ],
        remarkPlugins: [
          unwrapImages,
        ],
      },
    },
  ],
};