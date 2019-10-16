const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

let app = express();


app.use(cors());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

// ROUTES
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/home', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/careers', (req, res) => {
    res.render('careers');
});


app.listen(5000, () => console.log('Listening on 5000.....'));