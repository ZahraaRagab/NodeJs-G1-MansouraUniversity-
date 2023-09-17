const todoModel = require("../models/todoModel");

module.exports = {
  getIndexPage: async (req, res) => {
    const tasks = await todoModel.find();
    res.render("index", { tasks });
  },

  addTask: async (req, res) => {
    const task = await todoModel.create({ task: req.body.task });
    res.redirect("/");
  },

  removeTask: async (req, res) => {
    const task = await todoModel.findByIdAndDelete(req.params.id);
    res.redirect("/");
  },
};
