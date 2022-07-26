const express = require('express')
const PORT = process.env.PORT || 3001
const cors = require('cors');
const logger = require('morgan');
const app = express()
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('Root route!');
});
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})