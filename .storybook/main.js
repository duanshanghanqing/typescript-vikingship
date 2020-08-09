// module.exports = {
//   stories: ['../stories/**/*.stories.js'],
//   addons: ['@storybook/addon-actions', '@storybook/addon-links'],
//   webpackFinal: async config => {
//     // do mutation to the config

//     return config;
//   },
// };


module.exports = {
  stories: ['../stories/**/*.stories.tsx', '../src/**/*.scss'],// 配置编译文件的入口
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],// 配置使用的官方提供的插件
  webpackFinal: async config => {
    // do mutation to the config
    // 支持ts，tsx语法
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    // 支持scss文件，其他样式文件，在加入
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
