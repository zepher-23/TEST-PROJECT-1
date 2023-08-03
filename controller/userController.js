const jwt = require('jsonwebtoken')
const secret = 'secret_key';
const path = require('path')
const bcrypt = require('bcrypt')

const signup = (req, res) => {
    const { name, password } = req.body;

    const hashed = bcrypt.hash(password, 10)
    


}

const users = (req, res) => {

    const { name, password } = req.body;

    // const payload = {
    //     name: name,
    //     password:password
        
    // }
    // const token = jwt.sign(payload, secret)
    // req.headers.authorization = `Bearer ${token}`

    req.session.user = {
        name: 'username',
        role: 'admin',
        userId:'id'
    }
    res.send("user logged in")
}
const authenticate = (req, res, next) => {
    console.log('user authenticated')
    // const token = req.headers.authorization.replace("Bearer", '')

    if (req.session.user) {
        next()
    } else {
        res.send("user not logged in")
    }
    
    // const result = jwt.verify(token, secret)
    // if (result) {
    //     next()
    // } else {
    //     res.send('token is invalid')
    // }

}

const profile = (req, res) => {

    res.sendFile(path.join(__dirname,'profile.html'))
}
const logout = (req, res) => {
    req.session.destroy()
    res.send('user logged out')
}

module.exports = {users,authenticate,profile,signup,logout}