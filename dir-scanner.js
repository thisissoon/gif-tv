import fs from 'fs';

fs.readdir('./PARTY_GIFS/', (err, files) => {
  if (err) throw err;
  files.forEach( file => console.log(file));
});
// because trying to do something with files here won't work because
// the callback hasn't fired yet.