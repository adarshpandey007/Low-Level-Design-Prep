const express = require("express");
const expenseController = require("../controllers/expenseController");
const router = express.Router();

router.post("/", expenseController.addExpense);
router.get("/", expenseController.getAllExpenses);
router.get("/:id", expenseController.getExpenseById);

module.exports = router;
