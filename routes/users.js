const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.get('/', userController.users)

router.get('/profile',userController.authenticate, userController.profile)

//example.com/users/profifle
module.exports = router