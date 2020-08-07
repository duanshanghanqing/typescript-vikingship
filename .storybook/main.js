// module.exports = {
//   stories: ['../stories/**/*.stories.js'],
//   addons: ['@storybook/addon-actions', '@storybook/addon-links'],
//   webpackFinal: async config => {
//     // do mutation to the config

//     return config;
//   },
// };

// https://storybook.js.org/docs/configurations/typescript-config/
const webpack_dev_config = require('../build/webpack.dev.config');

module.exports = {
  stories: ['../stories/**/*.stories.tsx', '../src/**/*.scss'],// 配置入口
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],// 配置使用的插件
  webpackFinal: async config => {
    config.module.rules = [
      ...config.module.rules,
      ...webpack_dev_config.module.rules,
    ];
    config.resolve.extensions = webpack_dev_config.resolve.extensions;
    return config;
  },
};
