import express from 'express';
import Pet from '../models/Pet.js';

const router = express.Router();

// ---------- GET all pets ----------
router.get('/', async (_, res) => {
  try {
    const pets = await Pet.find().sort({ createdAt: -1 });
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router; 