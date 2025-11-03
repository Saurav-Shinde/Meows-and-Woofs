import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    id:        { type: Number, required: true },
    name:      { type: String, required: true },
    category:  { type: String, required: true },
    price:     { type: Number, required: true }, 
    imageUrl:  { type: String } , // served by GridFS route
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
