// routes/paymentRoutes.ts
import express from 'express';
import { checkout } from '../controllers/PaymentControllers';

const router = express.Router();

// Define the checkout route
router.route('/checkout').post(checkout);

export default router;
