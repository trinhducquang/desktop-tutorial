import express from 'express';
import connection from '../config/mysql.js';

const router = express.Router();

router.get('/', (req, res) => {
    const orderId = req.query.orderId || currentOrderId?.orderId;

    if (orderId) {
        const updateOrderStatus = 'UPDATE orders SET status = ? WHERE id = ?';
        connection.query(updateOrderStatus, ['Failed', orderId], (err, results) => {
            if (err) {
                console.error('Lỗi khi cập nhật trạng thái đơn hàng: ' + err.stack);
                res.redirect('http://localhost:5173/failed');
            } else {
                console.log('Trạng thái đơn hàng đã được cập nhật thành "Failed"');
                res.redirect('http://localhost:5173/failed');
            }
        });
    } else {
        res.redirect('http://localhost:5173/failed');
    }
});

export default router;
