const express = require('express');

const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');

const app = express();
var cors = require('cors');
app.use(cors());

require('./db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.listen(3001, () => {
  app.get('/', (req, res) => {
    res.send('Hola munditosgo');
  });
  console.log('okey');
});
