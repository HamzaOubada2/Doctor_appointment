const { default: mongoose, mongo } = require("mongoose");


const departmentSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    image: { type: String},
})

const department = mongoose.model("Department", departmentSchema);

module.exports = department;