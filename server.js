import express from 'express';
const app = express();

app.use('/', express.static('PARTY_GIFS'));

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/public/html/index.html`);
});

app.listen(3000, () => console.log('example app listening at port 3000'));