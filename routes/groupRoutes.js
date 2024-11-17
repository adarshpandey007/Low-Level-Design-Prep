const express = require("express");
const groupController = require("../controllers/groupController");
const router = express.Router();

router.post("/", groupController.createGroup);
router.get("/", groupController.getAllGroups);
router.get("/:id", groupController.getGroupById);

module.exports = router;
