var fs = require("fs");
var zlib = require('zlib');
fs.createReadStream('./txt1.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('./txt1.txt','utf-8'));

console.log("File Decompressed.");