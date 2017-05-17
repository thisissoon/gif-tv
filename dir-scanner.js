import fs from 'fs';

// fs.readdir('./PARTY_GIFS/', (err, files) => {
//   if (err) throw err;
//   files.forEach( file => console.log(file));
// });
// because trying to do something with files here won't work because
// the callback hasn't fired yet.

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