const { check, validationResult } = require('express-validator');

const validator = [

    check('name')
    .matches(/^[a-zA-Z ]*$/)
    .withMessage('Must start with a letter and have no characters')
    .trim()
    .escape()
    .isLength({ min: 3, max: 50 })
    .withMessage('Name cannot be less than 3 alphabets'),

    check('email')
    .not().isEmpty()
    .trim()
    .isEmail()
    .withMessage('Must be a valid email address')
    .customSanitizer(email => email.toLowerCase()),

    check('subject')
    .matches(/^[a-zA-Z0-9 ]*$/)
    .not().isEmpty()
    .trim()
    .escape()
    .isLength({ min: 3, max: 50 }),

    check('telephone')
    .matches(/(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/g)
    .withMessage('Must be a valid phone number'),

    check('message')
    .not().isEmpty()
    .escape()
    .trim()
    .isLength({ min: 5, max: 500 }),

];

module.exports = validator;