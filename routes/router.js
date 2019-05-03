import user from '../controllers/userController';
import login from '../controllers/loginController';
import views from '../controllers/viewsController';
import email from '../controllers/emailController';

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
        .post(email.sendEmail);
    
    app.route('/boleta')
        .get(views.boleta);

    app.route('/nuevoEmpleado')
        .get(views.nuevoEmpleado);
};