import express from 'express';
import paypal from '../config/paypal.js';
import connection from '../config/mysql.js';
import transporter from '../config/nodemailer.js';
import { getStore } from '../config/store.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', (req, res) => {
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

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {

        const query = `
                        SELECT u.email 
                        FROM users u
                        JOIN orders o ON u.id = o.user_id
                        WHERE o.id = ?
                      `;

        if (error) {
            console.log(error.response);
            res.redirect('http://localhost:5173/failed');
        } else {
            console.log(JSON.stringify(payment));
            console.log('currentOrderId:', currentOrderId);

            if (currentOrderId && currentOrderId.orderId) {
                const orderIdValue = currentOrderId.orderId;
                const updateOrderStatus = 'UPDATE orders SET status = ? WHERE id = ?';
                connection.query(updateOrderStatus, ['Success', orderIdValue], (err, results) => {
                    if (err) {
                        console.error('Lỗi khi cập nhật trạng thái đơn hàng: ' + err.stack);
                        res.redirect('http://localhost:5173/failed');
                    } else {
                        console.log('Trạng thái đơn hàng đã được cập nhật');
                        connection.query(query, [orderIdValue], (err, results) => {
                            if (err) {
                                console.error('Lỗi khi lấy email: ' + err.stack);
                                res.redirect('http://localhost:5173/failed');
                                return;
                            }
                            const userEmail = results[0]?.email;

                            if (userEmail) {
                                fs.readFile(path.join(__dirname, '../views/orderConfirmation.html'), 'utf8', (err, html) => {
                                    if (err) {
                                        console.error('Lỗi khi đọc file HTML: ' + err.message);
                                        res.redirect('http://localhost:5173/failed');
                                        return;
                                    }
                                    const personalizedHtml = html.replace('{{orderId}}', orderIdValue);

                                    const mailOptions = {
                                        from: 'quang.td.2430@aptechlearning.edu.vn',
                                        to: userEmail,
                                        subject: 'Đơn hàng đang được xử lý',
                                        html: personalizedHtml,
                                        attachments: [{
                                            filename: 'rimowa-logo.png',
                                            path: './public/rimowa-logo.png',
                                            cid: 'rimowa-logo'
                                        }]
                                    };

                                    transporter.sendMail(mailOptions, (error, info) => {
                                        if (error) {
                                            console.error('Lỗi khi gửi email: ' + error.message);
                                        } else {
                                            console.log('Email đã được gửi: ' + info.response);
                                        }
                                        res.redirect('http://localhost:5173/Success');
                                    });
                                });
                            } else {
                                console.error('Không tìm thấy email của người dùng');
                                res.redirect('http://localhost:5173/failed');
                            }
                        });
                    }
                });
            } else {
                console.error('currentOrderId không hợp lệ');
                res.redirect('http://localhost:5173/failed');
            }
        }
    });
});

export default router;
