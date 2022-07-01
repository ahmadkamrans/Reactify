// NVM 12
const express = require('express')
const router = express.Router();
const User = require('../models/Users')
const { body, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');

const token = jwt.sign({ foo: 'bar' }, 'shhhhh');
// JWT SECRET KEY
const JWT_SECRET = 'MultipleReactApps'
const bcrypt = require('bcryptjs');



// This endpoint creates a user with hashed password and send response of a JWT Token
router.post('/createuser', [
  body('name', 'Enter valid name').isLength({ min: 2 }),
  body('email', 'Enter valid email').isEmail(),
  body('password', 'Enter valid password must be minimum of length 5').isLength({ min: 5 })
], async (req, res) => {
  // If there are errors, return bad request and the errors
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Check whether the user exists already
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ error: 'Sorry a user with this email already exists' })
  }
  const salt = await bcrypt.genSalt(10)
  const secPass = await bcrypt.hash(req.body.password, salt);

  user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: secPass,
  }).then((user) => {
    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_SECRET)
    res.json({ token: authToken })
  })
    .catch((err) => {
      res.status(400).json({ error: err })
    })


})


// Authenticate a user login 

router.post('/login', [
  body('name', 'Enter valid name').isLength({ min: 2 }),
  body('email', 'Enter valid email').isEmail(),
  body('password', 'Enter valid password must be minimum of length 5').isLength({ min: 5 })
], async (req, res) => {
  // If there are errors, return bad request and the errors
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


  const {email, password} = req.body;

  try
  {

  }catch{

  }

}
)


module.exports = router;