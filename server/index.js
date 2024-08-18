const express = require('express');
const paypal = require('paypal-rest-sdk');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

paypal.configure({
    "mode": 'sandbox',
    "client_id": 'AYVNbi1hTeWzzz7vXv2P39G8rEt0cPRdIjhLjjk5uodpYUMdfUmlM-cOQXaBg2sTH8XX4YoVhKI3jFya',
    "client_secret": 'EO0R5IeDVzLBZ_6yQufcRdW5Lt82EPBrR2yfAioHDY3RQDeWyd8qMuxvJeVZzxuid3CRm4nkQFec9VNw',
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project1_luggage'
});

connection.connect(err => {
    if (err) {
        console.error('Lỗi kết nối cơ sở dữ liệu: ' + err.stack);
        return;
    }
    console.log('Kết nối cơ sở dữ liệu thành công');
});

let currentTotalPrice = "0.00";
let currentOrderId = null;

app.post('/payment', async (req, res) => {
    try {
        const { cartItems, orderId } = req.body;
        currentOrderId = orderId;

        const totalPrice = cartItems.reduce((sum, item) => {
            const itemPrice = parseFloat(item.price) || 0;
            return sum + itemPrice * item.quantity;
        }, 0).toFixed(2);

        currentTotalPrice = totalPrice;

        let create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:8000/success",
                "cancel_url": "http://localhost:8000/failed"
            },
            "transactions": [{
                "item_list": {
                    "items": cartItems.map(item => ({
                        "name": item.name,
                        "sku": item.sku || 'item',
                        "price": parseFloat(item.price).toFixed(2),
                        "currency": "USD",
                        "quantity": item.quantity
                    }))
                },
                "amount": {
                    "currency": "USD",
                    "total": totalPrice
                },
                "description": "This is the payment description."
            }]
        };

        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                console.log(error);
                throw error;
            } else {
                console.log(payment);
                res.json(payment);
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Tạo thanh toán không thành công' });
    }
});

app.get('/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": currentTotalPrice
            }
        }]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            res.redirect('http://localhost:5173/failed');
        } else {
            console.log(JSON.stringify(payment));

            const updateOrderStatus = 'UPDATE orders SET status = ? WHERE id = ?';
            connection.query(updateOrderStatus, ['completed', currentOrderId], (err, results) => {
                if (err) {
                    console.error('Lỗi khi cập nhật trạng thái đơn hàng: ' + err.stack);
                } else {
                    console.log('Trạng thái đơn hàng đã được cập nhật');
                    res.redirect('http://localhost:5173/Success');
                }
            });
        }
    });
});

app.get('/failed', (req, res) => {
    res.redirect('http://localhost:5173/failed');
});

app.listen(8000, () => {
    console.log('Máy chủ đang chạy trên cổng 8000');
});
