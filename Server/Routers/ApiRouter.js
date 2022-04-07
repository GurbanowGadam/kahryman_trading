const express = require('express')
const router = express.Router()
const ApiCTRL = require('./../Controllers/ApiCTRL')

router.get('/:lang',ApiCTRL.home)
router.get('/:lang/:menu_id',ApiCTRL.home)

module.exports = router