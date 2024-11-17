const expenseService = require("../services/expenseService");

const addExpense = (req, res) => {
  const { groupId, paidBy, amount, splitType, splitDetails } = req.body;
  const id = `expense-${Date.now()}`;
  const expense = expenseService.addExpense(id, groupId, paidBy, amount, splitType, splitDetails);
  res.status(201).json({ message: "Expense added successfully", expense });
};

const getAllExpenses = (req, res) => {
  const expenses = expenseService.getAllExpenses();
  res.status(200).json({ expenses });
};

const getExpenseById = (req, res) => {
  const expense = expenseService.getExpenseById(req.params.id);
  if (!expense) return res.status(404).json({ message: "Expense not found" });
  res.status(200).json({ expense });
};

module.exports = {
  addExpense,
  getAllExpenses,
  getExpenseById,
};
