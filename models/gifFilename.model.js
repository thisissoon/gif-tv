const fs = require('fs');

function getFilenames(directoryPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, filesnames) => {
      if (err) reject(err);
      resolve(filesnames);
    });
  });
}

function filterFilenames(filenames) {
  return new Promise((resolve, reject) => {
    const gifFilenames = filenames.filter((filename) => filename.endsWith('.gif'));
    if (gifFilenames.length === 0) reject('no gifs in directory');
    resolve(gifFilenames);
  });
}

function getGifFilenames(directoryPath){
  return getFilenames(directoryPath)
    .then(filenames => filterFilenames(filenames));
}

module.exports = {
  getGifFilenames: getGifFilenames
};

