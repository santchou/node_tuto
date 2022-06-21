const express = require("express");

const router = express.Router();
const { getUsersInfos } = require("../controllers/users");

router.get("/", getUsersInfos);

module.exports = router;
