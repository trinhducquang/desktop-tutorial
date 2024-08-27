import express from 'express';
import cors from 'cors';
import paymentRoutes from './routes/payment.js';
import successRoutes from './routes/success.js';
import failedRoutes from './routes/failed.js';

const app = express();

app.use(cors());
app.use(express.json());



app.use('/payment', paymentRoutes);
app.use('/success', successRoutes);
app.use('/failed', failedRoutes);

app.listen(8000, () => {
    console.log('Máy chủ đang chạy trên cổng 8000');
});
