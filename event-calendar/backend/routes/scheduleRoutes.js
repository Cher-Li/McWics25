const express = require("express");
const {
  getSchedules,
  createSchedule,
  updateSchedule,
  deleteSchedule,
} = require("../controllers/scheduleController");

const router = express.Router();

router.get("/", getSchedules); // Fetch all schedules
router.post("/", createSchedule); // Create a new schedule
router.put("/:id", updateSchedule); // Update an existing schedule
router.delete("/:id", deleteSchedule); // Delete a schedule

module.exports = router;
