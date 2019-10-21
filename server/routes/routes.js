'use strict';
const express = require('express');
const router = express.Router();
const ejs = require('ejs');
const app = express();


// GET ROUTES
router.get('/', (req, res, next) => {
    res.render('index');
});
router.get('/home', (req, res, next) => {
    res.render('index');
});

router.get('/about', (req, res, next) => {
    res.render('about');
});

router.get('/projects', (req, res, next) => {
    res.render('projects');
});

router.get('/careers', (req, res, next) => {
    res.render('careers');
});


// POST ROUTES
router.post('/contact', (req, res, next) => {

    async function main() {
        let email = `
        <p>req.body.name<p/>
        // <h3>Contact Details</h3>
        // <ul>
        //     <li>
        //         <%= req.body.name %>
        //     </li>
        //     <li>
        //         <%= req.body.email %>
        //     </li>
        //     <li>
        //         <%= req.body.subject %>
        //     </li>
        //     <li>
        //         <%= telephone %>
        //     </li>
        // </ul>
        // <h3>Message</h3>
        // <p><%= message %></p>
    `;

        console.log(req.body.email);

        const nodemailer = require('nodemailer');
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtpout.secureserver.net',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'dchukwu@hscgroup.org',
                pass: 'Deltaforce12'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Contact Form (HSCL)" <dchukwu@hscgroup.org>', // sender address
            to: 'chuku.omoke@gmail.com', // list of receivers
            subject: 'ENQUIRY', // Subject line
            text: '', // plain text body
            html: email
        });
        console.log('Message sent: %s', info.messageId);

    }
    main().catch(console.error);


});

// all non-existent routes
router.all('*', (req, res, next) => res.status(404)
    .send({
        status: 404,
        error: 'Page not found',
    }));




module.exports = router;