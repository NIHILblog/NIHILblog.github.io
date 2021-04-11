const path = require('path');
const { createFilePath, } = require('gatsby-source-filesystem');

exports.onCreateWebpackConfig = ({ actions, }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@reducers': path.resolve(__dirname, 'src/reducers'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@static': path.resolve(__dirname, 'static'),
        '@posts': path.resolve(__dirname, 'src/posts'),
      },
    },
  });
};

exports.createPages = ({ actions, graphql, }) => {
  const { createPage, } = actions;
  const BlogPostTemplate = path.resolve('src/templates/BlogPostTemplate.jsx');

  return graphql(`
    {
      allMdx {
        nodes {
          slug
          frontmatter {
            category
            createdAt
            description
            keywords
            tag
            title
            updatedAt
          }
        }
      }
    } 
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMdx.nodes;

    posts.forEach(post => {
      createPage({
        path: post.slug,
        component: BlogPostTemplate,
        context: {
          slug: post.slug,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode, }) => {
  const { createNodeField, } = actions;

  if (node.internal.type === 'mdx') {
    const value = createFilePath({ node, getNode, });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};