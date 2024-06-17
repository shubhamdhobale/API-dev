import dotenv from 'dotenv';
import fs from 'fs/promises';
import { Product } from './models/Product.models.js';
import connectDB from './db/connect.js';

dotenv.config();

const start = async () => {
  try {
    const productData = JSON.parse(await fs.readFile('./products.json', 'utf-8'));
    await connectDB(process.env.MONGO_URL);
    await Product.deleteMany();
    await Product.create(productData);
    console.log('success');
  } catch (error) {
    console.log('error in product json', error);
  }
}

start();
