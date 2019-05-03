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
        .post(user.createUser)
        .put(user.upfechaUser)
        .delete(user.deleteUser);

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