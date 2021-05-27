const Users = require('../models').Users;
const Events = require('../models').Events;

//index
const index = (req, res) => {
    Users.findAll()
    .then(allUsers => {
        res.render('users/index.ejs', {
            users: allUsers
        });
    });
}

//signup
const renderSignup = (req, res) => {
    res.render('users/signup.ejs');
}

const signup = (req, res) => {
    Users.create(req.body)
    .then(newUser => {
        res.redirect(`/users/profile/${newUser.id}`);
    })
}

//login
const renderLogin = (req, res) => {
    res.render('users/login.ejs')
}

const login = (req, res) => {
    Users.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
    .then(foundUser => {
        res.redirect(`/users/profile/${foundUser.id}`);
    })
}

//profile
const renderProfile = (req, res) => {
    Users.findByPk(req.params.index, { 
        include: [Events]
    })
    .then(foundUser => {
            res.render('users/profile.ejs', {
                user: foundUser,
        })
    })
}

//edit
const editProfile = (req, res) => {
    Users.update(req.body, {
        where: {
            id: req.params.index
        },
        returning: true
    })
    .then(updatedUser => {
        res.redirect(`/users/profile/${req.params.index}`);
    })
}

//delete
const deleteUser = (req, res) => {
    Users.destroy({
        where: {
            id: req.params.index
        }
    })
    .then(() => {
        res.redirect('/');
    })
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