const express = require('express')
const app = express()
const path = require('path')
const users = require('./routes/users')
const session = require("express-session")
const ejs = require('ejs')
const multer = require('multer')
const cookieParser = require('cookie-parser')

const uploads = multer({ dest: 'uploads/' })

app.use(cookieParser())


app.set('view engine','ejs')

app.use(express.urlencoded())

app.use(session({
    secret:'secret_key'
}))

app.get('/', (req, res) => {
    
    console.log("request has been made")
   
   res.render('index',{message:'this is ejs'})
})

app.get('/user-login', users)





app.post('/uploads', uploads.single('fileName'), (req, res) => {
    const data = req.file
    console.log(req.files)
    const cred = process.env.CREDENTIALS
    
    const cookies = req.cookies.cookie1
    res.cookie('cookie1','this is a cookie',{maxAge:90000})
    res.send("file uploaded")
})






app.listen(4000, () => {
    console.log("server is running on port 3000")
})