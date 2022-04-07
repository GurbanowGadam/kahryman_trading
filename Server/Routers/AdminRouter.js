const express = require('express')
const router = express.Router()
const AdminCRTL = require('./../Controllers/AdminCTRL')


router.get('/get-gallery',AdminCRTL.get_gallery)



router.post('/upload-image',AdminCRTL.upload_image)

module.exports = router