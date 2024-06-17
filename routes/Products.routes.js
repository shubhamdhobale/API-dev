import express from 'express';
import { ProductAPI } from '../controllers/Product.controllers.js';

const router = express.Router();

router.get('/product' , ProductAPI)

export default router;