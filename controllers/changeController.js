const db = require("../models");

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
