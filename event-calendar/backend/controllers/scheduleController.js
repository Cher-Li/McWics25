const Schedule = require("../models/Schedule");

// Fetch all schedules
const getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new schedule
const createSchedule = async (req, res) => {
  const { title, date, time, description } = req.body;
  try {
    const newSchedule = new Schedule({ title, date, time, description });
    const savedSchedule = await newSchedule.save();
    res.status(201).json(savedSchedule);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a schedule
const updateSchedule = async (req, res) => {
  try {
    const updatedSchedule = await Schedule.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedSchedule);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a schedule
const deleteSchedule = async (req, res) => {
  try {
    await Schedule.findByIdAndDelete(req.params.id);
    res.json({ message: "Schedule deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getSchedules,
  createSchedule,
  updateSchedule,
  deleteSchedule,
};
