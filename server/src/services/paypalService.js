import paypal from '../config/paypal.js';

export function executePayment(paymentId, payerId, execute_payment_json) {
    return new Promise((resolve, reject) => {
        paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
            if (error) {
                reject(error);
            } else {
                resolve(payment);
            }
        });
    });
}
