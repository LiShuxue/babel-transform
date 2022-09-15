module.exports = {
  sourceType: 'unambiguous',
  plugins: ['@babel/plugin-transform-runtime'],
  presets: [
    [
      '@babel/preset-env', 
      {
        useBuiltIns: 'usage',
        corejs: '3.25',
      }
    ]
  ],
};
