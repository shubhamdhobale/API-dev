import express from 'express';
import dotenv from 'dotenv';
import productroute from './routes/Products.routes.js'
import connectDB from './db/connect.js';

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.get("/" , (req,res) => {
  res.send("Hello World!");
})

app.use('/api' , productroute);

app.listen(port , ()=> {
  console.log("Server is running on port 3000")
})