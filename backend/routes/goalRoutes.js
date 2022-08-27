const express = require("express");
const router = express.Router();
const { getGoals, setGoal, deleteGoal, updateGoal } = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

// Below 4 routes will be executed same as above

// router.get("/", getGoals);
// router.post("/", setGoal);
// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);

module.exports = router;
