const Events = require('../models').Events;
const Users = require('../models').Users;

//index
const index = (req, res) => {
    Users.findByPk(req.params.userId, { 
        include: [Events]
    })
    .then(foundUser => {
            res.render('events/index.ejs', {
                user: foundUser,
        })
    })
}

//new
const renderNew = (req, res) => {
    
    res.render('events/new.ejs', { index: req.params.userId })
}

const createEvent = (req, res) => {
    req.body.userId=req.params.userId;
    Events.create(req.body).then(newEvent => {
        res.redirect(`/events/index/${req.body.userId}`);
    })
}

//edit
const renderEdit = (req, res) => {
    Users.findByPk(req.params.userId, { 
        include: [Events]
    })
    .then(foundUser => {
            res.render('events/index.ejs', {
                user: foundUser,
        })
    })
}

const editEvent = (req, res) => {
    Events.update(req.body, {
        where: {id:req.params.index},
        returning: true,
        plain: true
    })
    .then(editEvent => {
        res.redirect(`/events/index/${req.body.userId}`);
    })    
}

//delete
const deleteEvent = (req, res) => {
    Events.destroy({
        where: {
            id: req.params.index
        }
    })
    .then(() => {
        res.redirect(`/events/index/${req.params.userId}`);
    })    
}


module.exports = {
    index,
    renderNew,
    createEvent,
    renderEdit,
    editEvent,
    deleteEvent
}