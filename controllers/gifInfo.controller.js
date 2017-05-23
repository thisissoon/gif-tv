const GifInfo = require('../models/gifInfo.model');
var fs = require('fs');
var regularGifsInfo = JSON.parse(fs.readFileSync(`${__dirname}/../config/regularGifsInfo.JSON`, 'utf8'));

function gifInfoIndex(req, res) {
  GifInfo.getGifInfo('./public/assets/GIFS/')
    .then((gifInfo) => {
      console.log(regularGifsInfo);
      return res.status(200).json({message: 'gifInfo endpoint', gifInfo, regularGifsInfo });
    });
}

module.exports = {
  index: gifInfoIndex
};