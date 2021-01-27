const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post('/', [
    check('name', 'Namn krävs').not().isEmpty(),
    check('email', 'Vänligen skriv in en giltig email').isEmail(),
    check('password', 'Lösenord måste vara minst 6 tecken').isLength({ min: 6 })
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        // Status 200 = ok, 400 = bad request
        return res.status(400).json({ errors: errors.array() });
    };
    res.send('User route');
});

module.exports = router;
