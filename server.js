const express = require('express');

const gifInfoRouter = require('./config/gifInfo.router.js');

const app = express();

app.use('/', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/html/index.html`);
});

app.use('/gifInfo', gifInfoRouter);

app.listen(3000, () => console.log('example app listening at port 3000'));