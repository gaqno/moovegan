module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          alias: {
            '~': './src',
          },
          extensions: ['.js', '.ts', '.tsx'],
        },
      ],
    ]
  };
};
