class User {
    constructor(id, name) {
      this.id = id;
      this.name = name;
      this.balance = {}; // Keeps track of balances with other users
    }

    // Update balance with another user
    updateBalance(otherUserId, amount) {
        if (!this.balance[otherUserId]) {
            this.balance[otherUserId] = 0; // Initialize balance if not set
        }
        this.balance[otherUserId] += amount;
    }

    getBalance(otherUserId) {
        return this.balance[otherUserId] || 0; // Return 0 if no balance exists
    }
  }
  module.exports = User;
  