var fs = require('fs');
var gifyParse = require('gify-parse');

<<<<<<< HEAD
var buffer = fs.readFileSync('./src/assets/PARTY_GIFS/girldem.gif');
=======
var buffer = fs.readFileSync('./src/assets/GIFS/SOON_/Logo_v2.gif');
>>>>>>> release/2.1.0
var gifInfo = gifyParse.getInfo(buffer);

console.log(gifInfo);


