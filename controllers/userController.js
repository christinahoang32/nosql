const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');
const { create } = require('../models/User');

//crud cheatsheet

// create

// .create

// read
// .find
// .findOne
// update
// .findOneAndUpdate

//delete
// .findOneAndRemove
// .findOneAndDelete

// tools




module.exports = {
  // Get all Users

  getAllUsers(req, res) {
    User.find().populate("thoughts").populate("friends")
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Get a single student
  getUser(req, res) {
    User.findOne({ _id: req.params.UserId })
      .select('-__v')
      .then((user) => {
        req.json(user);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new student
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));

  },

  // update user
  updateUser(req, res) {
    User.findOneAndUpdate({
      _id: req.params.id
    }, {
      $set: req.body
    }, {
      runValidators: true,
      new: true
    }).then((user) => {
      !user ? res.status(404).json({ message: 'No user' }) : res.json(user);

    }).catch((err) => res.status(500).json(err));


  },
  // Delete User
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) => req.json(user))
      .catch((err) => res.status(500).json(err));
  },


  // Add friend
  addfriend(req, res) {
    console.log('You are adding a friend');
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) => req.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Remove Friend
  removeFriend(req, res) {
    User.findOneAndUpdate({
      _id: req.params.id
    }, {
      $pull: {
        friends: req.params.friendsId
      }
    }, {
      runValidators: true,
      new: true
    }).then((user) => !user ? res.status(404).json({ message: 'No friend found with that ID :(' }) : res.json(user)).catch((err) => res.status(500).json(err));
  },
};