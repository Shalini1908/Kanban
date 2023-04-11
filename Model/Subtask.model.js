// {
//     _id: ObjectId,
//      name: String,
//      tasks: [{ type: ObjectId, ref: 'Task'}]
//    }

const mongoose = require("mongoose")

const subtaskSchema = mongoose.Schema({

 
           title : String,
          isCompleted :Boolean
       
  
})

const SubtaskModel = mongoose.model("subtask",subtaskSchema)

module.exports={SubtaskModel}