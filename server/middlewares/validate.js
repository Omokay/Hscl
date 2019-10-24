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
    .isMobilePhone(),

    check('message')
    .not().isEmpty()
    .withMessage('Message cannot be empty')
    .trim()
    .escape()
    .isLength({ min: 10, max: 300 })
    .withMessage('Message body should be between 20 to 300 characters')
    .isAlphanumeric(),

];

module.exports = validator;