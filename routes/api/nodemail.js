const router = require("express").Router();
const submitController = require("../../controllers/submit");

router.route("/").post(submitController.test);

module.exports = router;
