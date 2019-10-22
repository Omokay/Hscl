const { check, validationResult } = require('express-validator');

const validator = [

    check('name')
    .not().isEmpty()
    .withMessage('Your name is required')
    .trim()
    .isLength({ min: 3, max: 30 }).withMessage('Name should be between 3 to 30 characters')
    .isAlpha()
    .withMessage('Name should contain alphabets only'),

    check('email')
    .not().isEmpty()
    .withMessage('Email is required')
    .trim()
    .isEmail().withMessage('Invalid Email Address')
    .customSanitizer(email => email.toLowerCase()),

    check('subject')
    .not().isEmpty()
    .withMessage('Message Subject is required')
    .trim()
    .isLength({ min: 3, max: 50 })
    .isAlphanumeric()
    .withMessage('Message body should be between 3 to 50 characters'),

    check('telephone')
    .isEmpty()
    .isNumeric()
    .matches(/^(?:\d{8}(?:\d{2}(?:\d{2})?)?|\(\+?\d{2,3}\)\s?(?:\d{4}[\s*.-]?\d{4}|\d{3}[\s*.-]?\d{3}|\d{2}([\s*.-]?)\d{2}\1\d{2}(?:\1\d{2})?))$/),

    check('message')
    .not().isEmpty()
    .withMessage('Message cannot be empty')
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage('Message body should be between 20 to 500 characters')
    .isAlphanumeric(),

];

module.exports = validator;