const fs = require('fs');
const path = require('path');
const types = require('ast-module-types');
const esprima = require('esprima');

const src = fs.readFileSync(path.join(__dirname, './files/file-node-detective.js'));
const src2 = fs.readFileSync(path.join(__dirname, './files/file-node-detective-2.js'));

const node = esprima.parseModule('require("./files/file-node-detective.js")');
console.log(node.body[0].expression);

console.log(types.isDefine(node.body[0].expression)); // false
console.log(types.isRequire(node.body[0].expression)); // true
