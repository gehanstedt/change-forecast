const db = require("../models");
var passport = require("../config/passport");


// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Change
      .find(req.query)
      .sort({ start_date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Change
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findMajor: function(req, res) {
    db.Change
      .find({
        sys_tag: "MAJOR"
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findMajorDayRange: function(req, res) {
    const daysRequested = parseInt (req.body.days);
    var currentDate = new Date ();
    currentDate.setHours(0);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);
    var cutOffDate = new Date ();
    cutOffDate.setDate(cutOffDate.getDate() + daysRequested);
    cutOffDate.setHours(23);
    cutOffDate.setMinutes(59);
    cutOffDate.setSeconds(59);
    console.log (`currentDate:  ${currentDate}`);
    console.log (`cutOffDate ${cutOffDate}`);
    db.Change
      .find({
        start_date: {
          $lt: cutOffDate,
          $gt: currentDate
        },
        sys_tag: "MAJOR"
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findDayCount: function(req, res) {
    const daysRequested = parseInt (req.query.days);
    const daysRequestedOffset = parseInt (req.query.offset);
    var currentDate = new Date ();
    currentDate.setDate(currentDate.getDate() + daysRequestedOffset);
    currentDate.setHours(0);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);
    var cutOffDate = new Date (currentDate);
    cutOffDate.setDate(cutOffDate.getDate() + daysRequested);
    cutOffDate.setHours(23);
    cutOffDate.setMinutes(59);
    cutOffDate.setSeconds(59);
    console.log (`currentDate:  ${currentDate}`);
    console.log (`cutOffDate ${cutOffDate}`);

    if (req.query.major === 'true') {
      db.Change
        .find({
          start_date: {
            $lt: cutOffDate,
            $gt: currentDate
          },
          sys_tag: "MAJOR"
        }).count()
        .then(majorDayCount => {
          res.json(majorDayCount)
        })
        .catch(err => res.status(422).json(err));
      }
  else {
      db.Change
        .find({
          start_date: {
            $lt: cutOffDate,
            $gt: currentDate
          }
        }).count()
        .then(majorDayCount => {
          res.json(majorDayCount)
        })
        .catch(err => res.status(422).json(err));   
      }
  },
  findByMonthCount: function(req, res) {
    console.log (`in findByMonthCount ()`);
    var endDate;
    const monthRequested = parseInt (req.query.month);
    const yearRequested = parseInt (req.query.year);
    // Create start date:
    const beginDate = new Date (yearRequested, monthRequested - 1, 1, 0, 0, 0);
    if (monthRequested === 12) {
      endDate = new Date (yearRequested + 1, 0, 1, 0, 0, 0);
    }

    else {
      endDate = new Date (yearRequested, monthRequested, 1, 0, 0, 0)
    }

    console.log (`beginDate:  ${beginDate}`);
    console.log (`endDate ${endDate}`);

    if (req.query.major === 'true') {
      db.Change
        .find({
          start_date: {
            $lt: endDate,
            $gte: beginDate
          },
          sys_tag: "MAJOR"
        }).count()
        .then(result => {
          res.json(result)
        })
        .catch(err => res.status(422).json(err));
    }

    else {
      db.Change
      .find({
        start_date: {
          $lt: endDate,
          $gte: beginDate
        },
      }).count()
      .then(result => {
        res.json(result)
      })
      .catch(err => res.status(422).json(err));
    }
  },
  findMajorbyVariables: function(req, res) {
    const daysRequested = parseInt (req.query.days);
    console.log (`daysRequested: ${daysRequested}`);
    console.log (`major:  ${req.query.major}`);
    var currentDate = new Date ();
    currentDate.setHours(0);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);
    var cutOffDate = new Date ();
    cutOffDate.setDate(cutOffDate.getDate() + daysRequested);
    cutOffDate.setHours(23);
    cutOffDate.setMinutes(59);
    cutOffDate.setSeconds(59);
    console.log (`currentDate:  ${currentDate}`);
    console.log (`cutOffDate ${cutOffDate}`);
    if (req.query.major === 'true') {
      console.log (`Only major changes requested.`)
      db.Change
      .find({
        start_date: {
          $lt: cutOffDate,
          $gt: currentDate
        },
        sys_tag: "MAJOR"
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    }

    else {
      console.log (`All changes requested.`)
      db.Change
      .find({
        start_date: {
          $lt: cutOffDate,
          $gt: currentDate
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    }
  },
  userAdd: function(req, res) {
    console.log (`In the userAdd controller.`);
    console.log (`Req.body:`);
    console.log (req.body);
    db.User
      .create ({
        username: req.body.username,
        full_name: req.body.full_name,
        email: req.body.email,
        password: req.body.password})
      .then(dbModel => {
        console.log (dbModel);
        res.json({
          _id: dbModel._id,
          username: dbModel.username,
          full_name: dbModel.full_name,
          email: dbModel.email
        });
      })
      .catch(err => res.status(422).json(err));
  },
  userStatus: function(req, res) {
    console.log (`In the userStatus controller.`);
    console.log (`Req.user:`);
    console.log (req.user);
    if (req.user) {
      return res.json({ user: req.user });
    } 
    
    else {
      return res.json({ user: null });
    }
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
