const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const movie = require('./routes/movie');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds263127.mlab.com:63127/${process.env.DB_NAME}`);
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected...');
});

db.on('error', (err) => {
  throw new Error(err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ status: 200 });
});

app.use('/movie', movie);

app.listen(port, () => {
  console.log(`Server is up at http://localhost:${port}`);
});