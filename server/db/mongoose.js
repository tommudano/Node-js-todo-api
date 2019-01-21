let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://tommudano:bycicle01.@ds159574.mlab.com:59574/todoapp' || 'mongodb://127.0.0.1:27017/TodoApp', { useNewUrlParser: true });


module.exports = {mongoose};
