import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
import Pet from '../models/Pet.js'

router.get('/:id', async (req, res) => {
  try {
    const _id = new mongoose.Types.ObjectId(req.params.id);
    const bucket = new mongoose.mongo.GridFSBucket(
      mongoose.connection.db,
      { bucketName: 'petImages' }
    );

    const files = await bucket.find({ _id }).toArray();
    if (!files.length) return res.status(404).json({ error: 'Image not found' });

    res.set('Content-Type', files[0].contentType || 'image/jpeg');
    bucket.openDownloadStream(_id).pipe(res);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;