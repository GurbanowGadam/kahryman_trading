const express = require('express')
const router = express.Router()
const AdminCRTL = require('./../Controllers/AdminCTRL')


//-------------images----------------------//
router.get('/get-image',AdminCRTL.get_image)
router.get('/get-image/:id',AdminCRTL.get_image_id)
router.post('/add-image',AdminCRTL.add_image)
router.post('/edit-image',AdminCRTL.edit_image)
router.post('/delete-image',AdminCRTL.delete_image)

//-------------phone----------------------//
router.get('/get-phone',AdminCRTL.get_phone)
router.get('/get-phone/:id',AdminCRTL.get_phone_id)
router.post('/add-phone',AdminCRTL.add_phone)
router.post('/edit-phone',AdminCRTL.edit_phone)
router.post('/delete-phone',AdminCRTL.delete_phone)

//-------------mail----------------------//
router.get('/get-mail',AdminCRTL.get_mail)
router.get('/get-mail/:id',AdminCRTL.get_mail_id)
router.post('/add-mail',AdminCRTL.add_mail)
router.post('/edit-mail',AdminCRTL.edit_mail)
router.post('/delete-mail',AdminCRTL.delete_mail)

//-------------gallery----------------------//
router.get('/get-gallery',AdminCRTL.get_gallery)
router.get('/get-gallery/:id',AdminCRTL.get_gallery_id)
router.post('/add-gallery',AdminCRTL.add_gallery)
router.post('/edit-gallery',AdminCRTL.edit_gallery)
router.post('/delete-gallery',AdminCRTL.delete_gallery)

//-------------footer----------------------//
router.get('/get-footer',AdminCRTL.get_footer)
router.get('/get-footer/:id',AdminCRTL.get_footer_id)
router.post('/add-footer',AdminCRTL.add_footer)
router.post('/edit-footer',AdminCRTL.edit_footer)
router.post('/delete-footer',AdminCRTL.delete_footer)

//-------------home----------------------//
router.get('/get-home',AdminCRTL.get_home)
router.get('/get-home/:id',AdminCRTL.get_home_id)
router.post('/add-home',AdminCRTL.add_home)
router.post('/edit-home',AdminCRTL.edit_home)
router.post('/delete-home',AdminCRTL.delete_home)

//-------------contact----------------------//
router.get('/get-contact',AdminCRTL.get_contact)
router.get('/get-contact/:id',AdminCRTL.get_contact_id)
router.post('/add-contact',AdminCRTL.add_contact)
router.post('/edit-contact',AdminCRTL.edit_contact)
router.post('/delete-contact',AdminCRTL.delete_contact)

//-------------about----------------------//
router.get('/get-about',AdminCRTL.get_about)
router.get('/get-about/:id',AdminCRTL.get_about_id)
router.post('/add-about',AdminCRTL.add_about)
router.post('/edit-about',AdminCRTL.edit_about)
router.post('/delete-about',AdminCRTL.delete_about)

//-------------product----------------------//
router.get('/get-product',AdminCRTL.get_product)
router.get('/get-product/:id',AdminCRTL.get_product_id)
router.post('/add-product',AdminCRTL.add_product)
router.post('/edit-product',AdminCRTL.edit_product)
router.post('/delete-product',AdminCRTL.delete_product)

//-------------header----------------------//
router.get('/get-header',AdminCRTL.get_header)
router.get('/get-header/:id',AdminCRTL.get_header_id)
router.post('/add-header',AdminCRTL.add_header)
router.post('/edit-header',AdminCRTL.edit_header)
router.post('/delete-header',AdminCRTL.delete_header)

//-------------menu----------------------//
router.get('/get-menu',AdminCRTL.get_menu)
router.get('/get-menu/:id',AdminCRTL.get_menu_id)
router.post('/add-menu',AdminCRTL.add_menu)
router.post('/edit-menu',AdminCRTL.edit_menu)
router.post('/delete-menu',AdminCRTL.delete_menu)

//-------------locasions----------------------//
router.get('/get-locasions',AdminCRTL.get_locasions)
router.get('/get-locasions/:id',AdminCRTL.get_locasions_id)
router.post('/add-locasions',AdminCRTL.add_locasions)
router.post('/edit-locasions',AdminCRTL.edit_locasions)
router.post('/delete-locasions',AdminCRTL.delete_locasions)

//-------------statistics----------------------//
router.get('/get-statistics',AdminCRTL.get_statistics)
router.get('/get-statistics/:id',AdminCRTL.get_statistics_id)
router.post('/add-statistics',AdminCRTL.add_statistics)
router.post('/edit-statistics',AdminCRTL.edit_statistics)
router.post('/delete-statistics',AdminCRTL.delete_statistics)

//-------------topic----------------------//
router.get('/get-topic',AdminCRTL.get_topic)
router.get('/get-topic/:id',AdminCRTL.get_topic_id)
router.post('/add-topic',AdminCRTL.add_topic)
router.post('/edit-topic',AdminCRTL.edit_topic)
router.post('/delete-topic',AdminCRTL.delete_topic)





module.exports = router