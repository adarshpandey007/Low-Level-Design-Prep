const groupService = require("../services/groupService");

const createGroup = (req, res) => {
  const { name, members } = req.body;
  const id = `group-${Date.now()}`;
  const group = groupService.createGroup(id, name, members);
  res.status(201).json({ message: "Group created successfully", group });
};

const getAllGroups = (req, res) => {
  const groups = groupService.getAllGroups();
  res.status(200).json({ groups });
};

const getGroupById = (req, res) => {
  const group = groupService.getGroupById(req.params.id);
  if (!group) return res.status(404).json({ message: "Group not found" });
  res.status(200).json({ group });
};

module.exports = {
  createGroup,
  getAllGroups,
  getGroupById,
};
