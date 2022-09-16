
const fs = require('fs')
const babel = require('@babel/core');
const esFilePath = '/Users/lishuxue/Documents/study/babel-transform/typescript.ts';
const esCode = fs.readFileSync(esFilePath, 'utf8');

const options = {
    ast: true,
    configFile: '/Users/lishuxue/Documents/study/babel-transform/babel.config.ts.js',
    filename: 'typescript.ts'
}
const { ast, code } = babel.transformSync(esCode, options);

console.log(ast);
console.log(code);