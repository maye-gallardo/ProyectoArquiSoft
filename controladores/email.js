const servirEmail = require('../src/EmailSender');

const Email = new servirEmail();

exports.enviarEmail = (req, res, next) => {
    let email ={
        from:"GeneradorDeBoletas@enterprise.com",
        to: req.body.correo,
        text: req.body.mensaje
    };

    Email.enviarCorreo(email);
    res.send("ok");
};
