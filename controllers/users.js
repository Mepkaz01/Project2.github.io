const users = require('../models/users');

//index
const index = (req, res) => {
    res.render('users/index.ejs', { users: users }); 
}

//signup
const renderSignup = (req, res) => {
    res.render('users/signup.ejs');
}

const signup = (req, res) => {
    const uuid = new Date().valueOf();
    req.body.uuid = uuid;
    users.push(req.body);
    res.redirect('/profile/:id')
    
}

//login
const renderLogin = (req, res) => {
    res.render('users/login.ejs')
}

const login = (req, res) => {
    let index = users.findIndex(
        user => (user.email === req.body.email && 
                    user.password === req.body.password)
    )

    res.redirect(`/users/profile/${index}`);
}



module.exports = {
    index,
    renderSignup,
    signup,
    renderLogin,
    login
    
}