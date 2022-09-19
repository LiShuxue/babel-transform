module.exports = {
  sourceType: 'unambiguous', // 自动推测源文件的类型
  plugins: [
    [
      '@babel/plugin-transform-runtime', // 导入@babel/runtime中的辅助函数，避免corejs全局污染
      {
        corejs: { version: 3, proposals: true }
      }
    ]
  ], 
  presets: ['@babel/preset-env'],
};
