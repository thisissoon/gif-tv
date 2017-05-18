import fs from 'fs';

function getFilenames() {
  return new Promise((resolve, reject) => {
    fs.readdir('./src/assets/PARTY_GIFS/', (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
}

function handleFilenames(filenameArray) {
  const gifsArray = getGifs(filenameArray);
  console.log(gifsArray);
}

function getGifs(filenameArray){
  const gifsArray = filenameArray.filter((filename) => filename.endsWith('.gif'));
  return gifsArray;
}

getFilenames()
  .then(handleFilenames);