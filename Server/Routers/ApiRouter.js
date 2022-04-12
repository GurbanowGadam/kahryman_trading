const express = require('express')
const router = express.Router()
const ApiCTRL = require('./../Controllers/ApiCTRL')


router.get('/7659/sections', ApiCTRL.topic_s)
router.get('/7659/sections/33834/articles',ApiCTRL.topic_33834)
router.get('/7659/sections/46292/articles',ApiCTRL.topic_46292)
router.get('/7659/sections/49617/articles',ApiCTRL.topic_49617)




router.get('/:lang',ApiCTRL.home)
router.get('/:lang/home',ApiCTRL.home)
router.get('/:lang/about-us',ApiCTRL.about)
router.get('/:lang/gallery',ApiCTRL.gallery)
router.get('/:lang/product',ApiCTRL.contact)
router.get('/:lang/contact',ApiCTRL.contact)
router.get('/:lang/footer',ApiCTRL.contact)





module.exports = router