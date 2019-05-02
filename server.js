import app from './app';
var badyParser = require("body-parser");
const port = process.env.PORT || '3040'; app.listen(port); 

app.use(badyParser.json());
app.use(badyParser.urlencoded({ extended: true }))


const email = require("./templates/servidor/email");

const oEmail = new email({
    "host":"tu-host",
    "port":"el-puerto",
    "secure":false,
    "auth":{
        "type":"login",
        "user":"maye.gallardoger@gmail.com",
        "pass":"123"
    }
});

app.post('/api/contacto', function (req, res, next) {
    let email ={
        from:"maye.gallardoger@gmail.com",
        subject:"Nuevo mensaje de usuario",
        html:`
            <div>
            <p>Correo: ${req.body.c}</p>
            <p>Mensaje: ${req.body.m}</p>
            </div>
        `
    };

    oContacto.agregarUsuario(req.body.n,req.body.c);

    oEmail.enviarCorreo(email);
    res.send("ok");
});

console.log(`Listening on port ${port}`);