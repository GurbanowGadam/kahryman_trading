const express = require("express");
const router = express.Router();
const AdminCRTL = require("./../Controllers/AdminCTRL");

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

//-------------topic-title----------------------//
router.get("/get-topic-title", AdminCRTL.get_topic_title);
router.post("/save-topic-title", AdminCRTL.save_topic_title);

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
router.post("/save-about-image", AdminCRTL.save_about_image);

// //-------------product----------------------//
// router.get("/get-product", AdminCRTL.get_func);
// router.post("/add-product", AdminCRTL.add_product);
// router.post("/save-product", AdminCRTL.save_product);
// router.post("/delete-product", AdminCRTL.delete_product);

//-------------header----------------------//
router.get("/get-header/:menu", AdminCRTL.get_func);
router.post("/add-header/:menu", AdminCRTL.add_header);
router.post("/save-header/:menu", AdminCRTL.save_header);
router.post("/delete-header/:menu", AdminCRTL.delete_header);

module.exports = router;
