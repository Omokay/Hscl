const express = require('express');
const parser = require('body-parser');
const routes = require('./server/routes/routes');
const ejs = require('ejs');


let app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// allows access to body of the request
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

//Routes
app.use('/', routes);

// All non-existent routes
app.all('*', (req, res) => res.status(404)
    .send({
        status: 404,
        error: 'Page not found',
    }));

app.listen(5000, () => console.log('Listening on 5000.....'));