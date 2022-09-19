module.exports = {
  sourceType: 'unambiguous',
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: { version: 3, proposals: true }
      }
    ] 
  ],
  presets: [
    [
      '@babel/preset-env', 
      {
        modules: false,
      }
    ],
    [
      '@babel/preset-typescript'
    ],
  ],
};
