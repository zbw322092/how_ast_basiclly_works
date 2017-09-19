const fs = require('fs');
const path = require('path');
const Walker = require('node-source-walk');

const src = fs.readFileSync(path.join(__dirname, './files/file-node-source-walk.js'), 'utf8');
const src2 = fs.readFileSync(path.join(__dirname, './files/file-node-source-walk-2.js'), 'utf8');
const walker = new Walker();

// walker.walk(src, (node) => {
//   if (node.type === 'FunctionDeclaration') {
//     walker.stopWalking();
//     console.log(`I got an object: ${node}`);
//   }
// });

walker.walk(src2, (node) => {
  console.log('node: ', node);
});

const parsed = walker.parse(src);
console.log('parsed: ', parsed);
