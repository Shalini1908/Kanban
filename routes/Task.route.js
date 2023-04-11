const express = require("express");
const { TaskModel } = require("../Model/Task.model");
const taskRouter = express.Router();

taskRouter.get("/", async (req, res) => {
  try {
    const posts = await TaskModel.find();
    res.send(posts);
  } catch (error) {
    res.send({ msg: "Something went wrong", error: error });
  }
});

taskRouter.post("/createtask", async (req, res) => {
  const payload = req.body;
  try {
    const post = new TaskModel(payload);
    await post.save();
    res.send("Task has been created");
  } catch (error) {
    res.send({ msg: "Something went wrong", error: error });
  }
});

taskRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
  const payload = req.body;

  try {
    await TaskModel.findByIdAndUpdate({ _id: id }, payload);
    res.send({ msg: "Updated Successfully" });
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went wrong" });
  }
});

taskRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await TaskModel.findByIdAndDelete({ _id: id });
    res.send({ msg: "Deleted Successfully" });
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went wrong" });
  }
});

module.exports = {
  taskRouter,
};
