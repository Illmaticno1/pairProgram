const express = require('express');
const router = express.Router();
const Journal = require('../models/journal.js');

// API endpoints

router.get('/', async (req, res) => {
  const allJournal = await Journal.find();
  res.status(200).json(allJournal);
});

router.post('/', async (req, res) => {
    try {
    const newJournal = await Journal.create(req.body);
    res.status(200).json(newJournal);
  } catch (err) {
    res.status(400).json({err: err.message});
  }
});

module.exports = router;
