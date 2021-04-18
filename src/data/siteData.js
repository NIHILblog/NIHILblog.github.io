import packageJson from '../../package.json';

export default {
  version: packageJson.version,
  year: new Date().getFullYear(),
  siteURL: 'https://nihilblog.github.io/blog',
};