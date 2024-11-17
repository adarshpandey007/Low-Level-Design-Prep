class Group {
    constructor(id, name, members) {
      this.id = id;
      this.name = name;
      this.members = members; // Array of user IDs
      this.expenses = []; // Array of expense IDs
    }
  }
  
  module.exports = Group;
  