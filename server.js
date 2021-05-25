const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


app.use('/users', routes.users);
app.use('/events', routes.events);

app.get('/', (req, res) => {
    res.render('index.ejs');
        
})

app.listen(3000, ()=>{
    console.log("I am listening");
});