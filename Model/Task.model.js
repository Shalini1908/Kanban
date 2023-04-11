const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({

    title : String,
    description : String,
    status:String,
    enum: String,
	default: String,
    subtask:String
    // status : {type: String, enum: ['Todo', 'Doing', 'Done'], default: 'Todo'},
    // subtask : [{ type: ObjectId, ref: 'Subtask'}]
  
    
})

const TaskModel = mongoose.model("task",taskSchema)

module.exports={TaskModel}