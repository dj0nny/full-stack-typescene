const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie');

router.get('/', (req, res) => {
  Movie.find((err, movies) => {
    if (err) {
      throw new Error(err)
    } else {
      res.status(200).json(movies);
    }
  });
});

router.post('/add', (req, res) => {
  const movie = new Movie();
  movie.title = req.body.title;
  movie.director = req.body.director;
  movie.releaseYear = req.body.releaseYear;
  movie.playbillUrl = req.body.playbillUrl;

  movie.save((err) => {
    if (err) {
      throw new Error(err);
    } else {
      res.status(200).json(movie);
    }
  });
});

router.delete('/:id', (req, res) => {
  if (!req.params.id) {
    res.status(500).json({ message: "No ID found" })
  }
  const movieId = { _id: req.params.id };

  Movie.remove(movieId, (errDelete) => {
    if (errDelete) {
      res.status(500).json(errDelete);
    } else {
      res.status(200).json({ success: "True" });
    }
  });
});

module.exports = router;