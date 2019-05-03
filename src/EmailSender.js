const nodemailer = require("nodemailer");

class EmailSender{

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'mauricioqb6@gmail.com',
                pass: 'maurilife-1'
            }
        });
        
    }

    enviarCorreo(mailOptions){
        this.transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
    }
}
module.exports = EmailSender;