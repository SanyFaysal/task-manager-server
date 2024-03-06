const { verifyToken } = require("../../middleware/verifyToken");
const { findUserByEmail, signup, getAll, getMe } = require("./auth.controller");

const express = require("express");

const router = express.Router();

router.post("/register", signup);
router.post("/login", findUserByEmail);
router.get("/me", verifyToken, getMe);

router.get("/all/:role", getAll);
module.exports = router;
