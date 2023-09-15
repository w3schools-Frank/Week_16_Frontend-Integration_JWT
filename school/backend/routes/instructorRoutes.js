const express = require("express");
const router = express.Router();
const instructorController = require("../controllers/instructorController");
const { idIsNotNumber, nameNotGiven } = require("../middleware/safetyChecks");


//localhost:3001/instructors
router.get("/", instructorController.getAllInstructors);
//localhost:3001/instructors/1
router.get("/:id", idIsNotNumber, instructorController.getSingleInstructor);
router.post("/", nameNotGiven,instructorController.addNewInstructor);
router.put("/:id", [idIsNotNumber, nameNotGiven], instructorController.editInstructor);
router.delete("/:id", instructorController.deleteInstructor);

module.exports = router;