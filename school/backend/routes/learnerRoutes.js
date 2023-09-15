const express = require("express");
const router = express.Router();
const learnerController = require("../controllers/learnerController");

router.get("/", learnerController.getAllLearners);
router.get("/:id", learnerController.getSingleLearner);
router.post("/", learnerController.addNewLearner);
router.put("/:id", learnerController.editLearnerName);
router.delete("/:id", learnerController.deleteLearner);

module.exports = router;