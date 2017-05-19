var fs = require('fs');
var gifyParse = require('gify-parse');

var buffer = fs.readFileSync('./src/assets/PARTY_GIFS/Soon_3D_v1.gif');
var gifInfo = gifyParse.getInfo(buffer);

console.log(gifInfo);


