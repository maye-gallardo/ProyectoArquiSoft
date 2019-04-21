import user from '../controllers/userController';
import login from '../controllers/loginController';

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
};