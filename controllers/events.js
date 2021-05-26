const Events = require('../models').Events;
const Users = require('../models').Users;

//show (needs to show events by id)
const show = (req, res) => {
    Users.findByPk(req.params.userId, { 
        include: [Events]
    })
    .then(foundUser => {
            console.log(foundUser)
            res.render('events/show.ejs', {
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
        console.log("eventCreated")
        res.redirect(`/events/show/${req.body.userId}`);
    })
    // Users.findByPk(req.body.userId).then(user => {
    //     Events.create(req.body.id).then(event => {
    //         user.createEvent(event)
    //         res.redirect(`/events/show/${req.body.userId}`);
    // })
    
}

//edit
const renderEdit = (req, res) => {
    console.log(req.params.userId)
    Users.findByPk(req.params.userId, { 
        include: [Events]
    })
    .then(foundUser => {
            console.log(foundUser)
            res.render('events/show.ejs', {
                user: foundUser,
        })
    })
}

const editEvent = (req, res) => {
    console.log(req.body)
    Events.update(req.body, {
        where: {id:req.params.index},
        returning: true,
        plain: true
    })
    .then(editEvent => {
        console.log(editEvent)
        res.redirect(`/events/show/${req.body.userId}`);
    }).catch(err => console.log(err))    
}

//delete
const deleteEvent = (req, res) => {
    Events.destroy({
        where: {
            id: req.params.index
        }
    })
    .then(() => {
        res.redirect('/events/show.ejs');
    })
}


module.exports = {
    show,
    renderNew,
    createEvent,
    renderEdit,
    editEvent,
    deleteEvent
}