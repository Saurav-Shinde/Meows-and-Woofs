import express from 'express';
import upload from '../middleware/upload.js';
import Product from '../models/Product.js';
import mongoose from 'mongoose';
import Grid from 'gridfs-stream';

const router = express.Router();

// ---------- Mongo GridFS stream ----------
let gfs;
const conn = mongoose.connection;
conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('fs'); // default
});

// ---------- POST /api/products ----------
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, category, price } = req.body;

    const product = await Product.create({
      name,
      category,
      price,
      imageUrl: `/api/products/image/${req.file.filename}`,
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ---------- GET image ----------
router.get('/image/:filename', async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    if (!file) return res.status(404).json({ message: 'File not found' });

    const readstream = gfs.createReadStream(file.filename);
    res.set('Content-Type', file.contentType);
    readstream.pipe(res);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ---------- GET all products ----------
router.get('/', async (_, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
