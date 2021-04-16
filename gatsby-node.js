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
        '@templates': path.resolve(__dirname, 'src/templates'),
      },
      extensions: [ '.js', '.jsx', ],
    },
  });
};

exports.createPages = async ({ actions, graphql, }) => {
  const { createPage, } = actions;

  const BlogPostTemplate = path.resolve('src/templates/BlogPostTemplate.jsx');
  const BlogTagsTemplate = path.resolve('src/templates/BlogTagsTemplate.jsx');
  const BlogCategoriesTemplate = path.resolve('src/templates/BlogCategoriesTemplate.jsx');
  const BlogPostsTemplate = path.resolve('src/templates/BlogPostsTemplate.jsx');

  const SingleTagTemplate = path.resolve('src/templates/SingleTagTemplate.jsx');
  const SingleCategoryTemplate = path.resolve('src/templates/SingleCategoryTemplate.jsx');

  const BlogNoticeTemplate = path.resolve('src/templates/BlogNoticeTemplate.jsx');
  const BlogNoticeListTemplate = path.resolve('src/templates/BlogNoticeListTemplate.jsx');

  const result = await graphql(`
    {
      allMdx(
        sort: {fields: frontmatter___createdAt, order: DESC}
        filter: {frontmatter: {notice: {nin: true}, display: {eq: true}}}
      ) {
        nodes {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  `);
  
  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach((post, index) => {
    const prev = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];

    createPage({
      path: post.slug,
      component: BlogPostTemplate,
      context: {
        slug: post.slug,
        prev,
        next,
      },
    });
  });

  createPage({
    path: '/tags',
    component: BlogTagsTemplate,
  });

  createPage({
    path: '/categories',
    component: BlogCategoriesTemplate,
  });

  const { data, error, } = await graphql(`
    {
      allMdx(
        sort: {fields: frontmatter___createdAt, order: DESC}
      ) {
        totalCount
      }
    }
  `);

  if (error) {
    throw error;
  }

  const { totalCount, } = data.allMdx;
  const postPerPage = 5;
  const numPages = Math.ceil(totalCount / postPerPage);

  Array.from({ length: numPages, }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/page/1` : `/page/${index + 1}`,
      component: BlogPostsTemplate,
      context: {
        limit: postPerPage,
        skip: index * postPerPage,
        numPages,
        currentPage: index + 1,
      },
    });
  });

  const TagAndCategoryData = await graphql(`
    {
      tags: allMdx {
        group(field: frontmatter___tag) {
          fieldValue
        }
      }

      categories: allMdx {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `);

  if (TagAndCategoryData.error) {
    throw TagAndCategoryData.error;
  }

  const tags = TagAndCategoryData.data.tags.group;
  const categories = TagAndCategoryData.data.categories.group;

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${tag.fieldValue}`,
      component: SingleTagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  categories.forEach((category) => {
    createPage({
      path: `/categories/${category.fieldValue}`,
      component: SingleCategoryTemplate,
      context: {
        category: category.fieldValue,
      },
    });
  });

  const noticeQuery = await graphql(`
    {
      allMdx(
        filter: {frontmatter: {notice: {nin: false, in: true}}}
        sort: {fields: frontmatter___createdAt, order: DESC}
      ) {
        nodes {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  `);

  if (noticeQuery.error) {
    throw noticeQuery.error;
  }

  const noticeList = noticeQuery.data.allMdx.nodes;
  
  noticeList.forEach((post, index) => {
    const prev = index === noticeList.length - 1 ? null : noticeList[index + 1];
    const next = index === 0 ? null : noticeList[index - 1];

    createPage({
      path: post.slug,
      component: BlogNoticeTemplate,
      context: {
        slug: post.slug,
        prev,
        next,
      },
    });
  });

  const { data: noticeData, error: noticeError, } = await graphql(`
    {
      allMdx(
        sort: {fields: frontmatter___createdAt, order: DESC}
        filter: {frontmatter: {notice: {nin: false}}}
      ) {
        totalCount
      }
    }
  `);

  if (noticeError) {
    throw noticeError;
  }

  const { totalCount: noticeTotalCount, } = noticeData.allMdx;
  const noticePerPage = 5;
  const noticeNumPages = Math.ceil(noticeTotalCount / noticePerPage);

  Array.from({ length: noticeNumPages, }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/notice/page/1` : `/notice/page/${index + 1}`,
      component: BlogNoticeListTemplate,
      context: {
        limit: noticePerPage,
        skip: index * noticePerPage,
        numPages: noticeNumPages,
        currentPage: index + 1,
      },
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