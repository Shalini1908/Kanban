const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({

    title : String,
    description : String,
    status:String,
    enum: String,
	default: String,
    subtask:String

  
    
})

const TaskModel = mongoose.model("task",taskSchema)

module.exports={TaskModel}