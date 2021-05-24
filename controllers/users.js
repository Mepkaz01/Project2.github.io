const users = require('../users.js');

//index
const index = (req, res) => {
    res.render('users/index.ejs', { users: users });     
}

//signup
const renderSignup = (req, res) => {
    res.render('users/signup.ejs');
}

const signup = (req, res) => {
        users.push(req.body);
        res.redirect(`/users/profile/${users.length-1}`);  
}

//login
const renderLogin = (req, res) => {
    res.render('users/login.ejs')
}

const login = (req, res) => {
    console.log(req.body);
    let index = users.findIndex(
        user => (user.email === req.body.email && 
                    user.password === req.body.password)
    )

    res.redirect(`/users/profile/${index}`);
}

//profile
const renderProfile = (req, res) => {
    res.render('users/profile.ejs', {
        user: users[req.params.index],
        index: req.params.index
    })
}

//edit
const editProfile = (req, res) => {
    users[req.params.index] = req.body;
    res.redirect(`/users/profile/${req.params.index}`);
}

//delete
const deleteUser = (req, res) => {
    users.splice(req.params.index, 1);
    res.redirect('/')
}



module.exports = {
    index,
    renderSignup,
    signup,
    renderLogin,
    login,
    renderProfile,
    editProfile,
    deleteUser

}