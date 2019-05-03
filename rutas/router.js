import user from '../controladores/usuario';
import login from '../controladores/login';
import views from '../controladores/vistas';
import email from '../controladores/email';

export default (app) => {
    app.route('/login')
        .post(login.login);

    app.route('/logout')
        .get(login.logout); 

    app.route('/user')
        .get(user.obtenerUsuario)
        .post(user.crearUsuario)
        .put(user.actualizarUsuario)
        .delete(user.eliminarUsuario);

    app.route('/registration')
        .get(views.resgistar);

    app.route('/')
        .get(views.login);

    app.route('/profileForm')
        .get(views.editarPerfil);

    app.route('/perfil')
        .get(views.perfil);

    app.route('/email')
        .get(views.email)
        .post(email.enviarEmail);
    
    app.route('/boleta')
        .get(views.boleta);

    app.route('/nuevoEmpleado')
        .get(views.nuevoEmpleado);
};