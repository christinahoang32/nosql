const router = require('express').Router();
const {
  getUsers,
//   getSingleUser,
//   postUsers,
//   updateUser,
//   deleteUser,
//   addFriend,
//   deleteFriend,
} = require('../../controllers/userscontroller.js');

// /api/users
router.route('/').get(getUsers)
// .post(postUsers);



// // /api/users/:userId
// router
//   .route('/:userId')
//   .get(getSingleUser)
//   .put(updateUser)
//   .delete(deleteUser);

//   router.route('/:userId/friends/:friendId')
//   .post(addFriend)
//   .delete(deleteFriend);

module.exports = router;
