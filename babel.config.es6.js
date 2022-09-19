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
  presets: [
    [
      '@babel/preset-env', 
      {
        modules: false, // 是否把ES6的模块化语法改成其它模块化语法，默认import都被转码成require，设置成false不转换
      }
    ]
  ],
};
