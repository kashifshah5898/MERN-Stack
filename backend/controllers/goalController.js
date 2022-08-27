const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals", success: true });
});

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    // res.status(400).json({ message: "Please add text field" });
    res.status(400);
    throw new Error("Please add text field");
  }
  res.status(200).json({ message: "Set Goals", success: true });
});

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}`, success: true });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete  Goal ${req.params.id}`, success: true });
});

module.exports = { getGoals, setGoal, deleteGoal, updateGoal };
