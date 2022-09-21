
const fs = require('fs')
const babel = require('@babel/core');
const traverse = require('@babel/traverse').default;
const esFilePath = '/Users/lishuxue/Documents/study/babel-transform/src/es6.js';
const esCode = fs.readFileSync(esFilePath, 'utf8');

const options = {
    ast: true,
    configFile: '/Users/lishuxue/Documents/study/babel-transform/babel.config.es6.js',
    filename: 'es6.js'
}
const { ast, code } = babel.transformSync(esCode, options);

traverse(ast, {
    // 遍历所有的导入语句
    ImportDeclaration(path) {
        console.log(path.node.source.value);
    },
    // 遍历所有的变量标识符
    Identifier(path) {
      console.log(path.node.name);
    },
});