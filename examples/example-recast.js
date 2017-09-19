const fs = require('fs');
const path = require('path');
const recast = require('recast');

const src = fs.readFileSync(path.join(__dirname, './files/file-recast.js'), 'utf8');

const ast = recast.parse(src);

const a = ast.program.body[0];

const n = recast.types.namedTypes;

const b = recast.types.builders;


console.log('ast: ', ast);

console.log('a: ', a);

console.log('n: ', n);

console.log('n.VariableDeclaration.assert(a): ', n.VariableDeclaration.assert(a));

console.log('b: ', b.variableDeclaration);

ast.program.body[0].kind = 'var';

console.log(ast.program.body[0]);

const output = recast.print(ast).code;

console.log('output: ', output);
