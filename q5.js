var fs = require("fs");
var zlib = require('zlib');
// Compress the file input.txt to input.txt.gz
fs.createReadStream('./txt1.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('./txt1.txt.gz'));
console.log("File Compressed.");