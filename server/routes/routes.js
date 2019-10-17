const express = require('express');

const router = express.Router();


// POST ROUTES
router.post('/contact', (req, res) => {
    res.send(req.body);
});
// GET ROUTES
router.get('/', (req, res) => {
    res.render('index');
});
router.get('/home', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/projects', (req, res) => {
    res.render('projects');
});

router.get('/careers', (req, res) => {
    res.render('careers');
});

// all non-existent routes
router.all('*', (req, res) => res.status(404)
    .send({
        status: 404,
        error: 'Page not found',
    }));




module.exports = router;