'use strict';
const express = require('express');
let router = express.Router();
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const { check, validationResult } = require('express-validator');
const validate = require('../middlewares/validate');



require('dotenv').config();

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
router.post('/contact', validate, (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }
    async function main() {
        let name = req.body.name;
        let email = req.body.email;
        let subject = req.body.subject;
        let telephone = req.body.telephone;
        let message = req.body.message;


        let emailTemplate = `
                <h3>Contact Details</h3>
                <ul>
                <li><strong>NAME: ` + name + `</strong></li>
                <li><strong>EMAIL: ` + email + `</strong></li>
                <li><strong>TELEPHONE: ` + telephone + `</strong></li>
                <li><strong>SUBJECT: ` + subject + `</strong></li>
                </ul>
                    <h3>Message</h3>
                    <p>` + message + `</p>
                `;

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: process.env.HIDDEN_HOST,
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.HIDDEN_EMAIL,
                pass: process.env.HIDDEN_PASSWORD
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
            html: emailTemplate
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