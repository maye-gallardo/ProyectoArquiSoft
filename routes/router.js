import user from '../controllers/userController';
import login from '../controllers/loginController';
import template from '../controllers/templatesController';

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
        .get(template.registerPage)

    app.route('/')
        .get(template.home)

    app.route('/profileForm')
        .get(template.profile)

    app.route('/perfil')
        .get(template.perfil)
};