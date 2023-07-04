const { body, validationResult } = require('express-validator');

const createUserValidationRules = () => {
    return [
        body('name').notEmpty().withMessage('Name is Required'),
        body('email').isEmail().withMessage('Invalid Email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ]
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            eerors: errors.array()
        })
    }
    next();
}

module.exports = {
    createUserValidationRules,
    validate
}