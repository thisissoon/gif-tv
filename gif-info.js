var fs = require('fs');
var gifyParse = require('gify-parse');

var buffer = fs.readFileSync('./src/assets/PARTY_GIFS/8F5to.gif');
var gifInfo = gifyParse.getInfo(buffer);

console.log(gifInfo);


