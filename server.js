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

app.get('/destinations', async (req, res) => {
  const destinations
 = await destinations
.find({});
  res.json(destinations
  );
});

app.get('/destinations/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const destination = await destinations
  .findById(id);
    if (!destination) throw Error('destination not found!');
    res.json(destination);
  } catch (e) {
    console.log(e);
    res.send('destination not found!');
  }
});

app.get('/wishlists', async (req, res) => {
  const wishlists = await wishlists.find({});
  res.json(wishlists);
});

app.get('/wishlists/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const Wishlist = await wishlists.findById(id);
    if (!wishlist) throw Error('wishlist not found!');
    res.json(wishlist);
  } catch (e) {
    console.log(e);
    res.send('wishlist not found!');
  }
});



app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})