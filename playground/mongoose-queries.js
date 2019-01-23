const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5c45da1890d53325acd27260';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

let id = '5c48d67e88d8ed05003519e4';

if(!ObjectID.isValid(id)) {
  console.log('ID is not valid.');
}

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User not found; no matching ID.');
  }

  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
