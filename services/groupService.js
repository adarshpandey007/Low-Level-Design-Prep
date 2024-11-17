const Group = require("../models/groupModel");
const groups = {}; // In-memory group storage

const createGroup = (id, name, members) => {
  const newGroup = new Group(id, name, members);
  groups[id] = newGroup;
  return newGroup;
};

const getAllGroups = () => {
  return Object.values(groups);
};

const getGroupById = (id) => {
  return groups[id];
};

module.exports = {
  createGroup,
  getAllGroups,
  getGroupById,
};
