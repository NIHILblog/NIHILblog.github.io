const unwrapImages = require('remark-unwrap-images');

module.exports = {
  flags: {
    DEV_SSR: false,
    FAST_DEV: true,
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  pathPrefix: `/blog`,
  siteMetadata: {
    title: '니힐 블로그',
    description: '블로그를 운영할 필요를 느꼈으나 네이버나 티스토리에 질려서 직접 GatsbyJS로 개발한 블로그이고, HTML, CSS, JavaScript 기술을 이용한 웹 개발 위주의 프로그래밍과 일본어 학습자료, 그리고 게임 관련된 컨텐츠를 다루는 블로그입니다.',
    author: 'NIHILncunia',
    generator: 'Visual Studio Code',
    url: 'https://nihilblog.github.io',
    keywords: '블로그, 코딩, 프로그래밍, 웹 프로그래밍, Blog, Coding, Programing, Web programing, 일본어, 일본어 공부, 게임, 게임 정보, Japanese, Japanese learning, Game, Game play',
    siteImage: 'https://i.postimg.cc/15HkZBnf/blog-image.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'nihil-beulrogeu',
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
      resolve: 'gatsby-plugin-emotion',
      options: {
        sourceMap: true,
        autoLabel: 'always',
        cssPropOptimization: true,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              aliases: {
                js: 'javascript',
              },
              showLineNumbers: true,
            },
          },
        ],
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
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
        exclude: [
          '/dev-404-page',
          '/404',
        ],
        query: `
          {
            site {
              siteMetadata {
                siteUrl: url
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                siteUrl: url
                description
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx, }, }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.createdAt,
                  url: site.siteMetadata.siteUrl + node.slug,
                  guid: site.siteMetadata.siteUrl + node.slug,
                  custom_elements: [ { 'content:encoded': node.body, }, ],
                });
              });
            },
            query: `
              {
                allMdx(
                  sort: {fields: frontmatter___createdAt, order: DESC}
                  limit: 1000
                  filter: {frontmatter: {display: {eq: true}}}
                ) {
                  nodes {
                    frontmatter {
                      title
                      createdAt
                    }
                    excerpt(pruneLength: 250, truncate: true)
                    slug
                    body
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: `RSS - 니힐 블로그`,
          },
        ],
      },
    },
  ],
};