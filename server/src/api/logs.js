/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint linebreak-style: ["error", "windows"] */
const { Router } = require('express');

const PlantEntry = require('../models/PlantEntry');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const entries = await PlantEntry.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const plantEntry = new PlantEntry(req.body);
    const createdEntry = await plantEntry.save();
    res.json(createdEntry);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;
