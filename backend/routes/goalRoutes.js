const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get Goals", success: true });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Set Goals", success: true });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}`, success: true });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}`, success: true });
});

module.exports = router;

// start From Controller 20:34
