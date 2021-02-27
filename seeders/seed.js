var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/change-forecast",
 { useNewUrlParser: true }
);


var changeSeed = [
  {
    number_affected: 2,
    number: "CHG0001",
    reviewed:  "Pending",
    comments_and_work_notes: "Comments", 
    company: "Corporate",
    production_system: true,
    short_description: "Change description", 
    start_date: "2021-02-21T03:46:34.578+00:00", 
    end_date: "2021-02-21T03:46:34.578+00:00",
    class: "Application", 
    location: "Location1",
    time_zone: "America/New_York", 
    justification: "My justification1",
    assignment_group: "@Assign Group",
    sys_tag: "MAJOR"
  }];

db.Change.deleteMany({})
  .then(() => db.Change.collection.insertMany(changeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
