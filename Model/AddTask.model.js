const mongoose = require("mongoose")

const addSchema = mongoose.Schema({

    name: String,
    description:String,
    subtasks:String,
    currentstatus:String,

    
})

const AddModel = mongoose.model("add",addSchema)

module.exports={AddModel}