const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Name should be provided"],
        trim: true,
        maxlength: [20, "Name should not exceed 20 characters"]
    },
    completed: { 
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Task", TaskSchema)