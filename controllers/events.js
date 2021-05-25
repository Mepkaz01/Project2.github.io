const Events = require('../models').Events

//show (needs to show events by uuid)
const show = (req, res) => {
    Events.findByPk(req.params.id)
    .then(event => {
        res.render('events/show.ejs', { event: event })
    })

}

//new
const renderNew = (req, res) => {
    res.render('events/new.ejs')
}

const createEvent = (req, res) => {
    Events.create(req.body)
    .then(newEvent => {
        res.redirect('/events/show.ejs')
    })
}

//edit
const renderEdit = (req, res) => {
    Events.findByPk(req.params.index)
    .then(foundEvent => {
        res.render('/events/show.ejs', {
            event: foundEvent
        })
    })
}

const editEvent = (req, res) => {
    Events.update(req.body, {
        where: {id:req.params.index},
        returning: true
    })
    .then(editEvent => {
        res.redirect('/events/show.ejs');
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