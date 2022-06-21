const express = require("express");

const router = express.Router();
const { getUsersInfos, register } = require("../controllers/users");

router.get("/", getUsersInfos);
router.post("/register", register);

module.exports = router;
