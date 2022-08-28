const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json({ success: true, goals: goals });
});

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    // res.status(400).json({ message: "Please add text field" });
    res.status(400);
    throw new Error("Please add text field");
  }

  const settingGoal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json({ success: true, goal: settingGoal });
});

const updateGoal = asyncHandler(async (req, res) => {
  const findId = await Goal.findById(req.params.id);
  if (!findId) {
    res.status(400);
    throw new Error("Goal not Found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).json({ success: true, goal: updatedGoal });
});

const deleteGoal = asyncHandler(async (req, res) => {
  const findingId = await Goal.findById(req.params.id);
  if (!findingId) {
    res.status(400);
    throw new Error(`Couldn't find Goal with id ${req.params.id}`);
  }
  const deletedGoal = await Goal.deleteOne(findingId);
  res.status(200).json({ success: true, goal: deletedGoal });
});

module.exports = { getGoals, setGoal, deleteGoal, updateGoal };
