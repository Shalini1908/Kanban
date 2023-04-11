const express = require("express");
require("dotenv").config();
const { connection } = require("./db");
const { Auth} = require("./middleware/Auth.middleware");
const { userRouter } = require("./routes/user.route");
const { boardRouter } = require("./routes/board.route");
const { taskRouter } = require("./routes/Task.route");
const { subtaskRouter } = require("./routes/Subtask.route");
const {addRouter} = require("./routes/addtask.route")


const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Kanban Board");
});

app.use("/user", userRouter);
app.use(Auth);
app.use("/board", boardRouter);
app.use("/task", taskRouter);
app.use("/subtask", subtaskRouter);
app.use("/add",addRouter)



app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
  console.log("Server is running on port 7300");
});
