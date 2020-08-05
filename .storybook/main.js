// module.exports = {
//   stories: ['../stories/**/*.stories.js'],
//   addons: ['@storybook/addon-actions', '@storybook/addon-links'],
//   webpackFinal: async config => {
//     // do mutation to the config

//     return config;
//   },
// };

// https://storybook.js.org/docs/configurations/typescript-config/
module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  webpackFinal: async config => {
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
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
