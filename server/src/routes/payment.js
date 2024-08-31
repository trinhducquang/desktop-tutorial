        import express from 'express';
        import paypal from '../config/paypal.js';
        import connection from '../config/mysql.js';
        import { setStore } from '../config/store.js'; 

        const router = express.Router();

        router.post('/', async (req, res) => {
            try {
                const { cartItems, orderId } = req.body;

                const totalPrice = cartItems.reduce((sum, item) => {
                    const itemPrice = parseFloat(item.price) || 0;
                    return sum + itemPrice * item.quantity;
                }, 0).toFixed(2);

                setStore({
                    currentTotalPrice: totalPrice,
                    currentOrderId: orderId
                });

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

        export default router;
