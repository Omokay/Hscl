const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const routes = require('./server/routes/routes.js');

let app = express();


app.use(cors());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

//Routes
app.use('/', routes);
// All non-existent routes
app.all('*', (req, res) => res.status(404)
    .send({
        status: 404,
        error: 'Page not found',
    }));

app.listen(5000, () => console.log('Listening on 5000.....'));