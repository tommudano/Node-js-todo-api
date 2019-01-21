const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove();
//
Todo.findOneAndDelete({_id: '5c45da1890d53325acd27260'}).then((todo) => {
  console.log(todo);
});
