// module.exports = {
//   stories: ['../stories/**/*.stories.js'],
//   addons: ['@storybook/addon-actions', '@storybook/addon-links'],
//   webpackFinal: async config => {
//     // do mutation to the config

//     return config;
//   },
// };

// https://storybook.js.org/docs/configurations/typescript-config/
const dev_webpack = require('../build/webpack.dev.config');

module.exports = {
  stories: ['../stories/**/*.stories.tsx', '../src/**/*.scss'],
  webpackFinal: async config => {
    config.module.rules = [
      ...config.module.rules,
      ...dev_webpack.module.rules,
    ];
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
