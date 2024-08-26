import express from 'express';
import cors from 'cors';
import connection from './config/mysql.js';
import paypal from './config/paypal.js';
import transporter from './config/nodemailer.js';

const app = express();
app.use(cors());
app.use(express.json());

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
        console.log(totalPrice);

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
                                const mailOptions = {
                                    from: 'quang.td.2430@aptechlearning.edu.vn',
                                    to: userEmail,
                                    subject: 'Đơn hàng đang được xử lý',
                                    html: `
                                <!DOCTYPE html>
                                <html lang="en">
                                <head>
                                    <meta charset="UTF-8">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <title>Order Confirmation</title>
                                    <style>
                                        .Send-Container {
                                            width: 400px;
                                            height: 400px;
                                            margin: 0 auto;
                                            padding: 20px; 
                                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                                            border-radius: 10px; 
                                            background-color: #ffffff; 
                                        }
                                
                                        .Send-header {
                                            border-bottom: 1px solid gray;
                                            padding-bottom: 10px;
                                        }
                                
                                        .Send-header img {
                                            width: 50px;
                                            margin-left: 165px
                                        }
                                
                                        .Send-middle h3, .Send-middle p {
                                            margin-top: 10px;
                                        }
                                
                                        .Send-middle p {
                                            line-height: 30px;
                                        }
                                
                                        .Send-Footer {
                                            text-align: center;
                                            margin-top: 30px;
                                        }
                                
                                        .Send-Footer button {
                                            background-color: #1877f2;
                                            border-radius: 5px;
                                            color: white;
                                            padding: 8px 20px;
                                            width: 100%;
                                            border: none;
                                            font-size: 20px;
                                            text-transform: uppercase;
                                            letter-spacing: 2px;
                                        }
                                    </style>
                                </head>
                                <body>
                                    <div class="Send-Container">
                                        <div class="Send-header">
                                            <img src="cid:rimowa-logo" alt="Rimowa Logo">
                                        </div>
                                        <div class="Send-middle">
                                            <h3>You have successfully made a purchase.</h3>
                                            <p>Congratulations! Your order with ID ${orderIdValue} has been successfully processed and confirmed.
                                                Thank you for choosing to shop with us. We hope you are pleased with your purchase and
                                                the service we provided. If you have any questions or need further information about your order,
                                                please do not hesitate to reach out. We appreciate your trust and support!
                                            </p>
                                        </div>
                                        <div class="Send-Footer">
                                            <a href="http://localhost:5173/Library">
                                                <button>
                                                    Continue shopping
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </body>
                                </html>
                                `,
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

app.get('/failed', (req, res) => {
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

app.listen(8000, () => {
    console.log('Máy chủ đang chạy trên cổng 8000');
});
