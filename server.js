const express = require('express')
const PORT = process.env.PORT || 3001
const cors = require('cors');
const logger = require('morgan');
const db = require('./db');

const { Destinations } = require('./models');
const routes = require('./routes/index');
const app = express()

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use('/api', routes);

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
 })
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})