const router = require("express").Router();
const nodeMail = require("./nodeMail");

router.use("/email", nodeMail);

module.exports = router;
