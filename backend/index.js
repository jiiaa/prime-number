const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./utils/config');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/ping', (req,res) => {
  res.send('<strong>Someone pinged here...</strong>');
});

const PORT = config.PORT || 3002;

const server = app.listen(PORT, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Now listening at http://%s:%s', host, port);
});
