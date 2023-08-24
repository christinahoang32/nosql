const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');
const { create } = require('../models/User');


const usercontroller = {

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
  getUserById(req, res) {
    User.findOne({ _id: req.params.UserId })
      .select('-__v')
      .then((user) => {
        req.json(user);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err)
      });
    },
    
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


  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $addToSet: { friends: params.friendId } },
      { new: true, runValidators: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  
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
}
};

module.exports = usercontroller;