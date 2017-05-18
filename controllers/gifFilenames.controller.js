function gifFilenamesIndex(req, res) {
  return res.status(200).json({message: 'gifFilenames endpoint'});
}

module.exports = {
  index: gifFilenamesIndex
};