const express = require("express");
const router = express.Router();
const AdminCRTL = require("./../Controllers/AdminCTRL");

//-------------phone----------------------//
router.get("/get-phone", AdminCRTL.get_func);
router.post("/add-phone", AdminCRTL.add_phone);
router.post("/save-phone", AdminCRTL.save_phone);
router.post("/delete-phone", AdminCRTL.delete_phone);

//-------------mail----------------------//
router.get("/get-mail", AdminCRTL.get_func);
router.post("/add-mail", AdminCRTL.add_mail);
router.post("/save-mail", AdminCRTL.save_mail);
router.post("/delete-mail", AdminCRTL.delete_mail);

//-------------gallery----------------------//
router.get("/get-gallery/:type", AdminCRTL.get_func);
router.post("/add-gallery", AdminCRTL.add_gallery);
router.post("/save-gallery", AdminCRTL.save_gallery);
router.post("/delete-gallery", AdminCRTL.delete_gallery);

//-------------language----------------------//
router.get("/get-language", AdminCRTL.get_func);
router.post("/add-language", AdminCRTL.add_language);
router.post("/save-language", AdminCRTL.save_language);
router.post("/delete-language", AdminCRTL.delete_language);

//-------------footer----------------------//
router.get("/get-footer/:section", AdminCRTL.get_func);
router.post("/add-footer/:section", AdminCRTL.add_footer);
router.post("/save-footer/:section", AdminCRTL.save_footer);
router.post("/delete-footer/:section", AdminCRTL.delete_footer);

//-------------home----------------------//
router.get("/get-home/:section", AdminCRTL.get_func);
router.post("/add-home/:section", AdminCRTL.add_home);
router.post("/save-home/:section", AdminCRTL.save_home);
router.post("/delete-home/:section", AdminCRTL.delete_home);

//-------------contact----------------------//
router.get("/get-contact", AdminCRTL.get_func);
router.post("/save-contact", AdminCRTL.save_contact);

//-------------about----------------------//
router.get("/get-about", AdminCRTL.get_func);
router.post("/add-about", AdminCRTL.add_about);
router.post("/save-about", AdminCRTL.save_about);

//-------------about_image----------------------//
router.get("/get-about-image", AdminCRTL.get_func);
router.post("/add-about-image", AdminCRTL.add_about_image);
router.post("/save-about-image", AdminCRTL.save_about_image);

//-------------product----------------------//
router.get("/get-product", AdminCRTL.get_func);
router.post("/add-product", AdminCRTL.add_product);
router.post("/save-product", AdminCRTL.save_product);
router.post("/delete-product", AdminCRTL.delete_product);

//-------------header----------------------//
router.get("/get-header/:menu", AdminCRTL.get_func);
router.post("/add-header/:menu", AdminCRTL.add_header);
router.post("/save-header/:menu", AdminCRTL.save_header);
router.post("/delete-header/:menu", AdminCRTL.delete_header);

//-------------address----------------------//
router.get("/get-address", AdminCRTL.get_func);
router.post("/add-address", AdminCRTL.add_address);
router.post("/save-address", AdminCRTL.save_address);
router.post("/delete-address", AdminCRTL.delete_address);

//-------------statistics----------------------//
router.post("/add-statistics", AdminCRTL.add_statistics);
router.post("/save-statistics", AdminCRTL.save_statistics);
router.post("/delete-statistics", AdminCRTL.delete_statistics);

//-------------topic----------------------//
// router.post("/save-topic", AdminCRTL.save_topic);

//-------------slider----------------------//
router.post("/add-slider", AdminCRTL.add_slider);
// router.post("/save-slider", AdminCRTL.save_slider);
router.post("/delete-slider", AdminCRTL.delete_slider);

//-------------faciliti_image----------------------//
router.post("/add-faciliti-image", AdminCRTL.add_faciliti_image);
// router.post("/save-faciliti-image", AdminCRTL.save_faciliti_image);
router.post("/delete-faciliti-image", AdminCRTL.delete_faciliti_image);

module.exports = router;
