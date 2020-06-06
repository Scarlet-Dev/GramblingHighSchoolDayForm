import expMailer from 'express-nodemailer';
const env = require('dotenv');

export default class BaseEmailService{
    constructor(){
        this.options = {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: "true",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
}
        this.defaults = {
    from: ""
}
    }

    SendMail(app){
        expMailer(app, this.options, this.defaults)
    }
}
