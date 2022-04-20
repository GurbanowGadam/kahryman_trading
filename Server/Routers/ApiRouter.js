const express = require("express");
const router = express.Router();
const ApiCTRL = require("./../Controllers/ApiCTRL");

router.get("/:lang/7659/sections", ApiCTRL.topic_s);
router.get("/:lang/7659/sections/33834/articles", ApiCTRL.topic_33834);
router.get("/:lang/7659/sections/46292/articles", ApiCTRL.topic_46292);
router.get("/:lang/7659/sections/49617/articles", ApiCTRL.topic_49617);

router.get("/:lang", ApiCTRL.home);
router.get("/:lang/about-us", ApiCTRL.about);
router.get("/:lang/gallery", ApiCTRL.gallery);
router.get("/:lang/product", ApiCTRL.product);
router.get("/:lang/contact", ApiCTRL.contact);
router.get("/:lang/footer", ApiCTRL.footer);

router.get("/contact-send", ApiCTRL.send_email);

module.exports = router;
