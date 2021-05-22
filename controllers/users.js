const users = require('../models/users');

//index
const index = (req, res) => {
    res.render('users/index.ejs', { users: users }); 
}

//signup
const signup = (req, res) => {
    res.render('users/signup.ejs');
}

const createUser = (req, res) => {
    const uuid = new Date().valueOf();
    req.body.uuid = uuid;
    users.push(req.body);
    res.redirect('/profile/:id')
    
}

module.exports = {
    index,
    signup,
    createUser
    
}