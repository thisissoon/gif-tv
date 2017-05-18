const fs = require('fs');

function getFilenames() {
  return new Promise((resolve, reject) => {
    fs.readdir('./src/assets/PARTY_GIFS/', (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
}

function handleFilenames(filenameArray) {
  return filterGifs(filenameArray);
}

function filterGifs(filenameArray){
  const gifsArray = filenameArray.filter((filename) => filename.endsWith('.gif'));
  return gifsArray;
}

getFilenames()
  .then(handleFilenames);

module.exports = {
  getFilenames: getFilenames
};

