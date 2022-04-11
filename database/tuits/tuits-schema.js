const mongoose = require('mongoose');
//will need more stuff here for it to work with out implimentation
const tuitsSchema = mongoose.Schema({
  tuit: String,
  username: {type: String, default: 'bestboy'},
  handle: {type: String, default: 'gooddoggo'},
  videoClass: {type: String, default: 'wd-mediaBoxHide'},
  imageClass: {type: String, default: 'wd-mediaBoxHide'},
  avatar: {type: String, default: '/images/user.jpg'},
  retuits: {type: Number, default: 0},
  dislikes: {type: Number, default: 0},
  replies: {type: Number, default: 0},

  likes: {type: Number, default: 0},
  liked: {type: String, default:'F'}

}, {collection: 'tuits'});

module.exports = tuitsSchema;


