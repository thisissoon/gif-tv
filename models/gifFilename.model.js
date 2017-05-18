const fs = require('fs');
const gifyParse = require('gify-parse');

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

function addGifDurations(directoryPath, filenames) {
  return new Promise((resolve, reject) => {
    const gifInfoArray = filenames.map((filename) => {
      const buffer = fs.readFileSync(`${directoryPath}${filename}`);
      const gifInfo = gifyParse.getInfo(buffer);
      const gifDuration = gifInfo.durationChrome;
      return {
        filename,
        gifDuration
      };
    });
    if (!gifInfoArray) reject('something went wrong');
    resolve(gifInfoArray);
  });
}

function getGifFilenames(directoryPath){
  return getFilenames(directoryPath)
    .then(filenames => filterFilenames(filenames))
    .then(gifFilenames => addGifDurations(directoryPath, gifFilenames));
}

module.exports = {
  getGifFilenames: getGifFilenames
};

