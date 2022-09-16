module.exports = {
  sourceType: 'unambiguous',
  plugins: ['@babel/plugin-transform-runtime'],
  presets: [
    [
      '@babel/preset-env', 
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: '3.25',
      }
    ],
    [
      '@babel/preset-typescript'
    ],
  ],
};
