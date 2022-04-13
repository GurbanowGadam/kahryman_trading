const express = require('express')
const router = express.Router()
const AdminCRTL = require('./../Controllers/AdminCTRL')

//-------------phone----------------------//
router.get('/get-phone',AdminCRTL.get_phone)
router.get('/get-phone/:id',AdminCRTL.get_phone_id)
router.post('/add-phone',AdminCRTL.add_phone)
router.post('/save-phone',AdminCRTL.save_phone)
router.post('/delete-phone',AdminCRTL.delete_phone)

//-------------mail----------------------//
router.get('/get-mail',AdminCRTL.get_mail)
router.get('/get-mail/:id',AdminCRTL.get_mail_id)
router.post('/add-mail',AdminCRTL.add_mail)
router.post('/save-mail',AdminCRTL.save_mail)
router.post('/delete-mail',AdminCRTL.delete_mail)

//-------------gallery----------------------//
router.get('/get-gallery',AdminCRTL.get_gallery)
router.get('/get-gallery/:id',AdminCRTL.get_gallery_id)
router.post('/add-gallery',AdminCRTL.add_gallery)
router.post('/save-gallery',AdminCRTL.save_gallery)
router.post('/delete-gallery',AdminCRTL.delete_gallery)

//-------------language----------------------//
router.get('/get-language',AdminCRTL.get_language)
router.get('/get-language/:id',AdminCRTL.get_language_id)
router.post('/add-language',AdminCRTL.add_language)
router.post('/save-language',AdminCRTL.save_language)
router.post('/delete-language',AdminCRTL.delete_language)

//-------------footer----------------------//
router.get('/get-footer',AdminCRTL.get_footer)
router.get('/get-footer/:id',AdminCRTL.get_footer_id)
router.post('/save-footer',AdminCRTL.save_footer)

//-------------home----------------------//
router.get('/get-home',AdminCRTL.get_home)
router.get('/get-home/:id',AdminCRTL.get_home_id)
router.post('/save-home',AdminCRTL.save_home)

//-------------contact----------------------//
router.get('/get-contact',AdminCRTL.get_contact)
router.get('/get-contact/:id',AdminCRTL.get_contact_id)
router.post('/save-contact',AdminCRTL.save_contact)

//-------------about----------------------//
router.get('/get-about',AdminCRTL.get_about)
router.get('/get-about/:id',AdminCRTL.get_about_id)
router.post('/save-about',AdminCRTL.save_about)

//-------------product----------------------//
router.get('/get-product',AdminCRTL.get_product)
router.get('/get-product/:id',AdminCRTL.get_product_id)
router.post('/add-product',AdminCRTL.add_product)
router.post('/save-product',AdminCRTL.save_product)
router.post('/delete-product',AdminCRTL.delete_product)

//-------------header----------------------//
router.get('/get-header',AdminCRTL.get_header)
router.get('/get-header/:id',AdminCRTL.get_header_id)
router.post('/add-header',AdminCRTL.add_header)
router.post('/save-header',AdminCRTL.save_header)
router.post('/delete-header',AdminCRTL.delete_header)

//-------------menu----------------------//
router.get('/get-menu',AdminCRTL.get_menu)
router.get('/get-menu/:id',AdminCRTL.get_menu_id)
router.post('/add-menu',AdminCRTL.add_menu)
router.post('/save-menu',AdminCRTL.save_menu)
router.post('/delete-menu',AdminCRTL.delete_menu)

//-------------address----------------------//
router.get('/get-address',AdminCRTL.get_address)
router.get('/get-address/:id',AdminCRTL.get_address_id)
router.post('/add-address',AdminCRTL.add_address)
router.post('/save-address',AdminCRTL.save_address)
router.post('/delete-address',AdminCRTL.delete_address)

//-------------statistics----------------------//
router.get('/get-statistics',AdminCRTL.get_statistics)
router.get('/get-statistics/:id',AdminCRTL.get_statistics_id)
router.post('/add-statistics',AdminCRTL.add_statistics)
router.post('/save-statistics',AdminCRTL.save_statistics)
router.post('/delete-statistics',AdminCRTL.delete_statistics)

//-------------topic----------------------//
router.get('/get-topic',AdminCRTL.get_topic)
router.get('/get-topic/:id',AdminCRTL.get_topic_id)
router.post('/add-topic',AdminCRTL.add_topic)
router.post('/save-topic',AdminCRTL.save_topic)
router.post('/delete-topic',AdminCRTL.delete_topic)





module.exports = router