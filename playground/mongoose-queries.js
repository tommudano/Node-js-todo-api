const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5c3f66ff4b43f139c4fe838911';
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

let id = '5c3e0137cb5aee22708cc7b1';

if(!ObjectID.isValid(id)) {
  console.log('ID is not valid.');
}

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User not found; no matching ID.');
  }

  console.log('User', user);
}).catch((e) => console.log(e));
