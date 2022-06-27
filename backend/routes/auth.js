const express = require('express')
const router = express.Router();
const User = require('../models/Users')
const { body, validationResult} = require('express-validator')

router.post('/',[
    body('name', 'Enter valid name').isLength({min : 2}),
    body('email', 'Enter valid email').isEmail(),
    body('password', 'Enter valid password').isLength({min : 5})
] ,(req, res)=>{
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }).then(user => res.json(user));

})



module.exports = router;