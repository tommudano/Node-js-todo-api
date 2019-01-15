let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});













































































// let newTodo = new Todo({
//   text: 'Cook diner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

// let secondTodo = new Todo({
//   text: 'Something to do'
// });
//
// secondTodo.save().then((doc) => {
//   console.log('Todo: Saved', doc);
// });
//
//
// let newUser = new User({
//   email: '  mudano.tomas@gmail.com  '
// });
//
// newUser.save().then((user) => {
//   console.log('User: Saved', user);
// }, (e) => {
//   console.log('Unable to save user', e);
// });
