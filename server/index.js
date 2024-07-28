const express = require('express');
const paypal = require('paypal-rest-sdk');
const cors = require('cors');

const app = express();

app.use(cors());

paypal.configure({
    "mode": 'sandbox',
    "client_id": "AYVNbi1hTeWzzz7vXv2P39G8rEt0cPRdIjhLjjk5uodpYUMdfUmlM-cOQXaBg2sTH8XX4YoVhKI3jFya",
    "client_secret": 'EO0R5IeDVzLBZ_6yQufcRdW5Lt82EPBrR2yfAioHDY3RQDeWyd8qMuxvJeVZzxuid3CRm4nkQFec9VNw',
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/payment', async (req, res) => {
    try {
        let create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:8000/success",
                "cancel_url": "http://localhost:8000/cancel"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "item",
                        "sku": "item",
                        "price": "1.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                },
                "description": "This is the payment description."
            }]
        };

    await paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                console.log(error);
                throw error;
            } else {
                console.log(payment);
                let data = payment
                res.json(data)
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Something went wrong');
    }
});

app.listen(8000, () => {
    console.log("Example app listening on port 8000!");
});
