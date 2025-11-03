import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { GridFSBucket } from 'mongodb';
import Product from './models/Product.js';
import connectDB from './config/db.js';

dotenv.config();
await connectDB();

// ---- sample products (replace with your actual array) ----
const products = [
  { id: 1, image: "./images/Product1.jpeg", category: "Dog Food", name: "Galox size Dog Food", price: 20.99 },
  { id: 2, image: "./images/Product2.jpeg", category: "Dog Food", name: "DBT Feet Dog Food", price: 18.49 },
  { id: 3, image: "./images/Product3.jpeg", category: "Dog Food", name: "Dog Press", price: 15.99 },
  { id: 4, image: "./images/Product4.jpeg", category: "Dog Food", name: "Food Pldeo", price: 12.99 },
  { id: 5, image: "./images/Product5.jpeg", category: "Dog Food", name: "Finasita Food", price: 22.49 },
  { id: 6, image: "./images/Product6.jpeg", category: "Dog Food", name: "Docklet's", price: 10.99 },
  { id: 7, image: "./images/Product7.jpeg", category: "Dog Food", name: "Foot Sod Honksitay", price: 9.49 },
  { id: 8, image: "./images/Product8.jpeg", category: "Dog Food", name: "Splem Couce", price: 19.99 },
  { id: 9, image: "./images/Product9.jpeg", category: "Cat Food", name: "Cetrris Cat Food", price: 25.99 },
  { id: 10, image: "./images/Product10.jpeg", category: "Cat Food", name: "Gran Free Bites", price: 7.99 },
  { id: 11, image: "./images/Product11.jpeg", category: "Dog Toy", name: "Dino and Ball Toy", price: 20.99 },
  { id: 12, image: "./images/Product12.jpeg", category: "Dog Toy", name: "Teddy Toy", price: 14.99 },
  { id: 13, image: "./images/Product13.jpeg", category: "Dog Toy", name: "Dog toy", price: 16.49 },
  { id: 14, image: "./images/Product14.jpeg", category: "Dog Toy", name: "Bone Toys", price: 21.99 },
  { id: 15, image: "./images/Product15.jpeg", category: "Cat Toy", name: "Woolen ball", price: 8.49 },
  { id: 16, image: "./images/Product16.jpeg", category: "Cat Toy", name: "Feather & ball", price: 23.99 },
  { id: 17, image: "./images/Product17.jpeg", category: "Cat Toy", name: "Cat Mouse Toy", price: 13.99 },
  { id: 18, image: "./images/Product18.jpeg", category: "Cat Food", name: "Ciynis Cat Food", price: 11.49 },
  { id: 19, image: "./images/Product19.jpeg", category: "Dog Leash", name: "Dog belt", price: 17.99 },
  { id: 20, image: "./images/Product20.jpeg", category: "Dog Leash", name: "Leather Dog Belt", price: 18.99 },
  { id: 21, image: "./images/Product21.jpeg", category: "Dog Leash", name: "Leather Dog Belt", price: 8.49 },
  { id: 22, image: "./images/Product22.jpeg", category: "Cat Leash", name: "Leather Cat Belt", price: 23.99 },
  { id: 23, image: "./images/Product23.jpeg", category: "Cat Leash", name: "Rope Cat Belt", price: 13.99 }
];

const seedProducts = async () => {
  try {
    // 1️⃣ wipe old data
    await Product.deleteMany();

    // 2️⃣ set up GridFS bucket
    const bucket = new GridFSBucket(mongoose.connection.db, {
      bucketName: 'productImages'
    });

    // 3️⃣ push every local image into GridFS
    const root = path.resolve();   // absolute path to project root
    for (const p of products) {
      const localFile = path.join(root, 'images', 'Products', `Product${p.id}.jpeg`);

      // stream → GridFS
      const uploadStream = bucket.openUploadStream(`product-${p.id}.jpeg`, {
        contentType: 'image/jpeg'
      });
      await new Promise((resolve, reject) => {
        fs.createReadStream(localFile)
          .pipe(uploadStream)
          .on('error', reject)
          .on('finish', resolve);
      });

      // 4️⃣ save the public URL (absolute; handy for the browser)
      const base = process.env.BASE_SERVER_URL || 'http://localhost:5050';
      p.imageUrl = `${base}/api/images/${uploadStream.id.toString()}`;
    }

    // 5️⃣ insert the docs
    await Product.insertMany(products);
    console.log('✅ Products & images seeded!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding products:', err.message);
    process.exit(1);
  }
};

seedProducts(); 