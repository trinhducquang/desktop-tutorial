import express from 'express';
import { executePayment } from '../services/paypalService.js';
import { sendOrderConfirmationEmail } from '../services/emailService.js';
import { updateOrderStatus, getUserEmail } from '../services/orderService.js';
import { getStore } from '../config/store.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const { currentTotalPrice, currentOrderId } = getStore();

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": currentTotalPrice
            }
        }]
    };

    console.log(currentTotalPrice);

    try {
        const payment = await executePayment(paymentId, payerId, execute_payment_json);
        console.log(JSON.stringify(payment));
        console.log('currentOrderId:', currentOrderId);

        if (currentOrderId && currentOrderId.orderId) {
            const orderIdValue = currentOrderId.orderId;

            await updateOrderStatus(orderIdValue);
            const userEmail = await getUserEmail(orderIdValue);

            if (userEmail) {
                await sendOrderConfirmationEmail(userEmail, orderIdValue);
                res.redirect('http://localhost:5173/Success');
            } else {
                console.error('Không tìm thấy email của người dùng');
                res.redirect('http://localhost:5173/failed');
            }
        } else {
            console.error('currentOrderId không hợp lệ');
            res.redirect('http://localhost:5173/failed');
        }
    } catch (error) {
        console.error('Lỗi xử lý: ' + error);
        res.redirect('http://localhost:5173/failed');
    }
});

export default router;
