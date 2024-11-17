class Expense {
    constructor(id, groupId, paidBy, amount, splitType, splitDetails) {
      this.id = id;
      this.groupId = groupId;
      this.paidBy = paidBy; // User ID of the payer
      this.amount = amount;
      this.splitType = splitType; // "equal" or "exact"
      this.splitDetails = splitDetails; // [{ userId, amount }]
    }
  }
  
  module.exports = Expense;
  