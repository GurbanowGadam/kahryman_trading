const express = require('express')
const router = express.Router()
const loginCTRL = require('./../Controllers/LoginCTRL')



router.post('/admin', loginCTRL.login_admin)

module.exports = router