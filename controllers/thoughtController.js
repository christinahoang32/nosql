const { User, Thought } = require('../models');


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


module.exports = {
  // Get all Thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(courses))
      .catch((err) => res.status(500).json(err));
  },
  // Get Thought
  getThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) => res.json(courses))
      .catch((err) => res.status(500).json(err));
  },
  // Create Thought
  async createThought(req, res) {
    console.log("create thought");
    try {
      const newThought = await Thought.create(req.body)
      if (newThought) {
        await User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addtoset: { thoughts: newThought._id } },
          { new: true }
      );
    }

    res.json("Thought created")
  } catch(err) {
    res.status(500).json(err);
  }
},

  // Delete a Thought
  deleteThoughte(req, res) {
  Thought.findOneAndDelete({ _id: req.params.courseId })
    .then((course) =>
      !course
        ? res.status(404).json({ message: 'No course with that ID' })
        : User.deleteMany({ _id: { $in: course.users } })
    )
    .then(() => res.json({ message: 'Course and students deleted!' }))
    .catch((err) => res.status(500).json(err));
},
// Update a Thought
updateThought(req, res) {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then((course) =>
      !course
        ? res.status(404).json({ message: 'No course with this id!' })
        : res.json(course)
    )
    .catch((err) => res.status(500).json(err));
},

// addReaction

createReaction(req, res) {
  console.log('You are adding a reaction');
  console.log(req.body);
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $addToSet: { reactions: req.body} },
    { runValidators: true, new: true }
  )
    .then((thought) =>
      !thought
        ? res
            .status(404)
            .json({ message: 'No friend found with that ID :(' })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},

// deleteReaction

deleteReaction(req, res) {
  console.log(req.params)

    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId} } },
      { runValidators: true, new: true }
      // { new: true }
    )
      .then((thought) =>
      // console.log("get the deleteReaction")
        !thought
          ? res
              .status(404)
              .json({ message: 'No thought found with that ID :(' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
