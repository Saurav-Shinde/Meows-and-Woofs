import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { GridFSBucket } from 'mongodb';
import Pet from './models/Pet.js';
import connectDB from './config/db.js';

dotenv.config();
await connectDB();

const pets = [
    { id: 1, image:"./images/pets/Pet1.jpg", category:"Dog ", name: "Alex"},
    { id: 2, image:"./images/pets/Pet2.jpg", category:"Dog ", name: "Lilly"},
    { id: 3, image:"./images/pets/Pet3.jpg", category:"Dog ", name: "Bruzo"},
    { id: 4, image:"./images/pets/Pet4.jpg", category:"Dog ", name: "Freezebe"},
    { id: 5, image:"./images/pets/Pet5.jpg", category:"Dog ", name: "Ruby"},
    { id: 6, image:"./images/pets/Pet6.jpg", category:"Dog ", name: "Bruno"},
    { id: 7, image:"./images/pets/Pet7.jpg", category:"Cat ", name: "FElix"},
    { id: 8, image:"./images/pets/Pet8.jpg", category:"Cat ", name: "Oscar"},
    { id: 9, image:"./images/pets/Pet9.jpg", category:"Cat ", name: "Angel"},
    { id: 10, image:"./images/pets/Pet10.jpg", category:"Cat ", name: "Twinkle"},
    { id: 11, image:"./images/pets/Pet11.jpg", category:"Cat ", name: "Tom"},
  ]
  

const seedPets = async () => {
  try {
    await Pet.deleteMany();

    const bucket = new GridFSBucket(mongoose.connection.db, {
      bucketName: 'petImages'
    });

    const root = path.resolve();
    for (const p of pets) {
      const localFile = path.join(root, 'images', 'Pets', `Pet${p.id}.jpeg`);
      const uploadStream = bucket.openUploadStream(`pet-${p.id}.jpeg`, {
        contentType: 'image/jpeg'
      });
      await new Promise((resolve, reject) => {
        fs.createReadStream(localFile)
          .pipe(uploadStream)
          .on('error', reject)
          .on('finish', resolve);
      });

      const base = process.env.BASE_SERVER_URL || 'http://localhost:5050';
      p.imageUrl = `${base}/api/pet-images/${uploadStream.id.toString()}`;
    }

    await Pet.insertMany(pets);
    console.log('✅ Pets & images seeded!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding pets:', err.message);
    process.exit(1);
  }
};

seedPets();