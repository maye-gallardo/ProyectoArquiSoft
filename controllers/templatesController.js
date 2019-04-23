

// GET route for reading data
exports.registerPage = (req, res, next) =>  {
    return res.sendFile('register.html' , { root : './templates'});
  };
  
// GET route for reading data
exports.home = (req, res, next) =>  {
    return res.sendFile('index.html' , { root : './templates'});
};
// GET route for reading data
exports.profile = (req, res, next) =>  {
    return res.sendFile('profileForm.html' , { root : './templates'});
};
// GET route for reading data
exports.perfil = (req, res, next) =>  {
    return res.sendFile('perfil.html' , { root : './templates'});
};
  