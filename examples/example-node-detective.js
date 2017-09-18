const detective = require('detective');
const fs = require('fs');
const path = require('path');

// example1
const src = fs.readFileSync(path.join(__dirname,'./files/file-node-detective.js'));
const requires = detective(src);
console.dir(requires);

// example2
const src2 = fs.readFileSync(path.join(__dirname,'./files/file-node-detective-2.js'));
const requires2 = detective(src2);
console.dir(requires2);

// example3
const src3 = fs.readFileSync(path.join(__dirname,'./files/file-node-detective-3.js'));
const requires3 = detective(src3);
console.dir(requires3); // [ 'a', 'b', 'c', 'd', 'f', 'g' ]

// example4
const found = detective.find(src3, {
  nodes: true
});
console.dir(found);