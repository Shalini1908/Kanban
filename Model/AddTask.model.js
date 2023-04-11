// - Task Name
// - Description
// - Subtasks (Should support multiple)
// - Current Status (Select tag with Todo, Doing, Done as options)
// - Create Task Button


const mongoose = require("mongoose")

const addSchema = mongoose.Schema({

    name: String,
    description:String,
    subtasks:String,
    currentstatus:String,

    
})

const AddModel = mongoose.model("add",addSchema)

module.exports={AddModel}