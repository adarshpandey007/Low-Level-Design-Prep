const User = require("../models/userModel");
const users = {}; // In-memory user storage

const createUser = (id, name) => {
  const newUser = new User(id, name);
  users[id] = newUser;
  return newUser;
};

const getAllUsers = () => {
//   return users; returns the complete object with key and values whereas in below one only value is returned.
  return Object.values(users);
};

const getUserById = (id) => {
  return users[id];
};

const updateBalance = (userId, amount) => {
    const user = users[userId];
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }
  
    // Update balance
    if (!user.balance) {
      user.balance = 0; // Initialize balance if not set
    }
    user.balance += amount;
};
  
const getBalance = (userId) => {
    const user = users[userId];
    if (!user) {
        throw new Error(`User with ID ${userId} not found`);
    }
    return user.balance || 0; // Return balance or 0 if not set
}; 

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateBalance,
  getBalance
};
