const express = require('express')
const router = express.Router();
const User = require('../models/Users')

router.post('/', (req, res)=>{
    const newUser = User(req.body);
    newUser.save()
    res.send(req.body)
})



module.exports = router;