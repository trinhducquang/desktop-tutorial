import fs from 'fs';
import path from 'path';
import transporter from '../config/nodemailer.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function sendOrderConfirmationEmail(userEmail, orderIdValue) {
    const templatePath = path.join(__dirname, '../views/orderConfirmation.html');
    
    return new Promise((resolve, reject) => {
        fs.readFile(templatePath, 'utf8', (err, html) => {
            if (err) {
                return reject('Lỗi khi đọc file HTML: ' + err.message);
            }

            const personalizedHtml = html.replace('{{orderId}}', orderIdValue);

            const mailOptions = {
                from: 'quang.td.2430@aptechlearning.edu.vn',
                to: userEmail,
                subject: 'Đơn hàng đang được xử lý',
                html: personalizedHtml,
                attachments: [{
                    filename: 'rimowa-logo.png',
                    path: path.join(__dirname, '../../public/rimowa-logo.png'),
                    cid: 'rimowa-logo'
                }]
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return reject('Lỗi khi gửi email: ' + error.message);
                }
                resolve(info.response);
            });
        });
    });
}
