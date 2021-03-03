const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const changeSchema = new Schema({
    number_affected: { type: String, required: true },
    number: { type: String, required: true },
    reviewed: { type: String, required: true },
    company: { type: String, required: true },
    production_system: { type: String, required: true },
    short_description: { type: String, required: true }, 
    start_date: { type: Date }, 
    end_date: { type: Date },
    class: { type: String, required: true },  
    location: { type: String, required: true },
    time_zone: { type: String, required: true }, 
    justification: { type: String, required: true },
    assignment_group: { type: String, required: true },
    sys_tag: { type: String, required: true }
});

const Change = mongoose.model("Change", changeSchema);

module.exports = Change;