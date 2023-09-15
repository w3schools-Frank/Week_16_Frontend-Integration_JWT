const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");
const { verifyJWT } = require("../middleware/verifyJWT");

router.get("/", verifyJWT, accountController.getAllAccounts);
router.post("/register", accountController.addNewAccount);
router.post("/login", accountController.login);

module.exports = router;