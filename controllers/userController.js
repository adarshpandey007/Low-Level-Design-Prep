const userService = require("../services/userService");

const createUser = (req, res) => {
  const { name } = req.body;
  const id = `user-${Date.now()}`;
  const user = userService.createUser(id, name);
  res.status(201).json({ message: "User created successfully", user });
};

const getAllUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.status(200).json({ users });
};

const getUserById = (req, res) => {
  const user = userService.getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json({ user });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
