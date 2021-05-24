const events = require('../events.js');

//show (needs to show events by uuid)
const show = (req, res) => {
    res.render('events/show.ejs', {
        events: events
    })
}

// //new
// const renderNew = (req, res) => {
//     res.render('events/new.ejs')
// }

// const createEvent = (req, res) => {
//     events.push(req.body);
//     res.redirect('/events/show.ejs')

// }






module.exports = {
    show


}