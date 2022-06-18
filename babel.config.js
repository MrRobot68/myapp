module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.json', '.svg'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@variables': ['src/variables'],
          '@assets': './src/assets',
          '@http': './src/http',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@helpers': './src/helpers',
          '@types': './src/types',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
