const router = require('express').Router();
const {
  getAllThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// /api/courses
router.route('/').get(getAllThoughts).post(createThought);

// /api/courses/:courseId
router
  .route('/:ThoughtId')
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

  router.route("/thoughtId/reactions/:reactions").post(createReaction);
  router.route("/thoughtId/reactions/:reactioniD").delete(deleteReaction);
module.exports = router;
