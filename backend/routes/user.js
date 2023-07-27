const express = require('express')

//controller functions
const { signupUser , loginUser } = require('../controllers/userControllers')

const router = express.Router()

//login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

module.exports = router