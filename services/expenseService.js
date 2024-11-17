const Expense = require("../models/expensemodel");
const Group = require("./groupService");
const User = require("./userService");

const expenses = {}; // In-memory expense storage

const addExpense = (id, groupId, paidBy, amount, splitType, splitDetails) => {
  const newExpense = new Expense(id, groupId, paidBy, amount, splitType, splitDetails);
  expenses[id] = newExpense;

  const paidByUser = User.getUserById(paidBy);
  // Add the amount to every user
  splitDetails.forEach(element => {
    if(paidBy != element.userId){
        let userObj = User.getUserById(element.userId);
        // Update the balance for both the payer and the current user
        paidByUser.updateBalance(element.userId, element.amount);
        userObj.updateBalance(paidBy, -element.amount);
        // userObj.balance.push({payTo : paidBy,amtToPay:element.amount});
    };
  });

  // Add expense to the group
  console.log("expenses service reached now ",Object.values(expenses));
  const currentGroup = Group.getGroupById(groupId);
  console.log("All groups",currentGroup);
  
  if (currentGroup) {
    console.log("match found");
    currentGroup.expenses.push(id);
  }

  return newExpense;
};

const getAllExpenses = () => {
  return Object.values(expenses);
};

const getExpenseById = (id) => {
  return expenses[id];
};

module.exports = {
  addExpense,
  getAllExpenses,
  getExpenseById,
};
