const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const config = require('./utils/config');
const middleware = require('./utils/middleware');

const primeRouter = require('./controllers/primeRoute');

const app = express();

const morganOutput = ':date[iso] :method :url :status :req[header]';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan(morganOutput));

app.use('/myapi', primeRouter);

app.get('/ping', (req,res) => {
  res.send('<strong>Someone pinged here...</strong>');
});

app.use(middleware.unknownEndpoint);

const PORT = config.PORT || 3002;

const server = app.listen(PORT, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Now listening at http://%s:%s', host, port);
});
