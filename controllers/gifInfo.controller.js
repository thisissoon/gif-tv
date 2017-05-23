const GifInfo = require('../models/gifInfo.model');
const regularGifsInfo = require('../config/regularGifsInfo');

function gifInfoIndex(req, res) {
  GifInfo.getGifInfo('./public/assets/GIFS/')
    .then((gifInfo) => {
      return res.status(200).json({message: 'gifInfo endpoint', gifInfo, regularGifsInfo });
    });
}

module.exports = {
  index: gifInfoIndex
};