// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true } , (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c3ca120b9d09526a39b5c31')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c38d99985e94c2510fdca1a')
  }, {
    $inc: {
      age: 1
    },
    $set: {
      name: 'Tom Mudano'
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });

  // client.close();
});


/*

  .find({QUERY(key: value)}).

*/
