const GifFilename = require('../models/gifFilename.model');

function gifFilenamesIndex(req, res) {
  GifFilename.getGifFilenames('./src/assets/PARTY_GIFS/')
    .then((gifFilenames) => {
      return res.status(200).json({message: 'gifFilenames endpoint', gifFilenames });
    });
}

module.exports = {
  index: gifFilenamesIndex
};