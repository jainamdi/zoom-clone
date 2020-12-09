const express = require('express');
const app = express();
const server = require('http').Server(app);
const {v4: uuid4} = require('uuid');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.status(200).send("Hi JD");
    // res.render('room');
    res.redirect(`/${uuid4()}`);
})

app.get('/:room', (req, res) => {
    res.render('room', {roomId: req.params.room});
})





server.listen(3030);
