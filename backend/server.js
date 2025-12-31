import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import imageRoutes from './routes/imageRoutes.js';
import petRoutes from './routes/petRoutes.js';
import petImageRoute from './routes/petImageRoute.js';
import userRoute from './routes/userRoute.js';
// ... existing code ...


dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174','https://supreme-eureka-7q65wxp6vj92pv97-5173.app.github.dev'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));



app.use(express.json());
app.use('/api/users', userRoute);


app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Server is working ');
  });
  
// Test route
app.get('/', (req, res) => {
  res.json({ message: 'PetCare Backend API is running!' });
});

app.use('/api/products', productRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/pet-images', petImageRoute);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test the API at: http://localhost:${PORT}`);
});
