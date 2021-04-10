const path = require('path');

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