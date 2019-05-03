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
        .get(views.registerPage);

    app.route('/')
        .get(views.home);

    app.route('/profileForm')
        .get(views.profile);

    app.route('/perfil')
        .get(views.perfil);

    app.route('/email')
        .get(views.email)
        .post(email.sendEmail);
    
    app.route('/boleta')
        .get(views.boleta)
};