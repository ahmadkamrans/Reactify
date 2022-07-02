let jwt = require('jsonwebtoken')
// JWT SECRET KEY
const JWT_SECRET = 'MultipleReactApps'

const fetchUser = (req, res, next)=>{
    // Get user from the jwt token and id to req object
    const token = req.header('auth-token')
    if(!token)
    {
        res.status(401).send({"error": "Please authenticate using valid token"})
    }
    const data = jwt.verify(token, JWT_SECRET)
    req.user = data.user
    next()
}

module.exports = fetchUser