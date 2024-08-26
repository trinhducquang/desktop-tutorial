import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'quang.td.2430@aptechlearning.edu.vn',
        pass: 'f b a a u k s w s b t y j u f a'
    }
});

export default transporter
