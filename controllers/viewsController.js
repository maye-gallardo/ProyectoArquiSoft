

// GET route for reading data
exports.registerPage = (req, res, next) =>  {
    return res.render('register.ejs');
  };
  
// GET route for reading data
exports.home = (req, res, next) =>  {
    return res.render('index.ejs');
};
// GET route for reading data
exports.profile = (req, res, next) =>  {
    return res.render('profileForm.ejs');
};
// GET route for reading data
exports.perfil = (req, res, next) =>  {
    return res.render('perfil.ejs');
};
  