const GifInfo = require('../models/gifInfo.model');

function gifInfoIndex(req, res) {
  GifInfo.getGifInfo('./public/assets/GIFS/')
    .then((gifInfo) => {
      return res.status(200).json({message: 'gifInfo endpoint', gifInfo });
    });
}

module.exports = {
  index: gifInfoIndex
};