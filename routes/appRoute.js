const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
	res.render("index", { title: "Etoro trade" });
});
router.route("/about").get((req, res) => {
	res.render("about", { title: "About - Etoro trade" });
	// res.redirect("/")
});
router.route("/contact-us").get((req, res) => {
	res.render("contact", { title: "Contact us - Etoro trade" });
});

module.exports = router;
