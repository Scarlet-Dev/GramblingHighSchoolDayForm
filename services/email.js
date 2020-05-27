import expMailer from 'express-nodemailer';
const env = require('dotenv');


const options = {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: "true",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
}

const defaults = {
    from: ""
}

export default function SendMail(app){
    expMailer(app, options, defaults);
}