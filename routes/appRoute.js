const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
	res.render("index", { title: "Bintrest" });
});
router.route("/about").get((req, res) => {
	res.render("about", { title: "About - Bintrest" });
	// res.redirect("/")
});
router.route("/contact-us").get((req, res) => {
	res.render("contact", { title: "Contact us - Bintrest" });
});

module.exports = router;
