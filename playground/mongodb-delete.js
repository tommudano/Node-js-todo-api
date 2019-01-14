// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true } , (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // deleteMany
  // Delete all with that text value
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // deleteOne
  // Delete the FIRST ONE that matches that criteria
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({name: 'Tom Mudano'}).then((res) => {
    console.log('Repeated users deleted');
  });

  db.collection('Users').findOneAndDelete({_id: ObjectID('5c3ca3d4b9d09526a39b5d87')}).then((res) => {
    console.log(`${res.value.name} was deleted`);
  });

  // client.close();
});
