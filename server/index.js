const express = require('express');
const paypal = require('paypal-rest-sdk');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

paypal.configure({
    "mode": 'sandbox',
    "client_id": 'AYVNbi1hTeWzzz7vXv2P39G8rEt0cPRdIjhLjjk5uodpYUMdfUmlM-cOQXaBg2sTH8XX4YoVhKI3jFya',
    "client_secret": 'EO0R5IeDVzLBZ_6yQufcRdW5Lt82EPBrR2yfAioHDY3RQDeWyd8qMuxvJeVZzxuid3CRm4nkQFec9VNw',
});

let currentTotalPrice = "0.00";

app.post('/payment', async (req, res) => {
    try {
        const { cartItems } = req.body;

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
                "return_url": "http://localhost:8000/Success",
                "cancel_url": "http://localhost:8000/Failed"
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
        res.status(500).json({ error: 'Payment creation failed' });
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
            res.redirect('http://localhost:5173/success');
        }
    });
});

app.get('/failed', (req, res) => {
    res.redirect('http://localhost:5173/failed');
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
