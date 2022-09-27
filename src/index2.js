const babel = require('@babel/core');

const jscode = `
function add(a, b) {
    console.log('1')
    throw new Error('Error')
    return a + b;
}
`
// 使用自定义plugin添加 try catch 语句
const options = {
    configFile: '/Users/lishuxue/Documents/study/babel-transform/babel.config.self-plugin.js',
}
const { code } = babel.transformSync(jscode, options);

console.log(code)