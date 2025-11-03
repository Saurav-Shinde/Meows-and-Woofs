import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  id: Number,
  name: String,
  category: String,
  imageUrl: String,
}, { timestamps: true });

export default mongoose.model('Pet', petSchema); 