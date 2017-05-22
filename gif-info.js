var fs = require('fs');
var gifyParse = require('gify-parse');

var buffer = fs.readFileSync('./src/assets/GIFS/SOON_/Logo_v2.gif');
var gifInfo = gifyParse.getInfo(buffer);

console.log(gifInfo);


