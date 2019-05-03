const servirEmail = require('../src/EmailSender');

const Email = new servirEmail();

function crearEmail(correo, mensaje){
    return email ={
        from:"GeneradorDeBoletas@enterprise.com",
        to: correo,
        text: mensaje
    };
}

exports.enviarEmail = (req, res, next) => {
    let email = crearEmail(req.body.correo, req.body.mensaje);
    Email.enviarCorreo(email);
    res.send("ok");
};
