import user from '../controllers/userController';
import login from '../controllers/loginController';
import views from '../controllers/viewsController';

export default (app) => {
    app.route('/login')
        .post(login.login);

    app.route('/logout')
        .get(login.logout); 

    app.route('/user')
        .get(user.getUser)
        .post(user.createUser)
        .put(user.updateUser)
        .delete(user.deleteUser);

    app.route('/registration')
        .get(views.registerPage)

    app.route('/')
        .get(views.home)

    app.route('/profileForm')
        .get(views.profile)

    app.route('/perfil')
        .get(views.perfil)
};