// {
//     _id: ObjectId,
//      name: String,
//      tasks: [{ type: ObjectId, ref: 'Task'}]
//    }

const mongoose = require("mongoose")

const boardSchema = mongoose.Schema({

    name: String,
    // tasks: [{ type: ObjectId, ref: 'Task'}]
    tasks: Object
    
})

const BoardModel = mongoose.model("board",boardSchema)

module.exports={BoardModel}