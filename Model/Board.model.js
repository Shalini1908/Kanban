const mongoose = require("mongoose")

const boardSchema = mongoose.Schema({

    name: String,
    tasks: Object
    
})

const BoardModel = mongoose.model("board",boardSchema)

module.exports={BoardModel}