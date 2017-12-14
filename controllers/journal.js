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

router.delete('/:id', async (req, res) => {
  try {
    const journal = await Journal.findByIdAndRemove(req.params.id);
    res.status(200).json(journal);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const journal = await Journal.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(journal);
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: err.message });
  }
});

module.exports = router;
