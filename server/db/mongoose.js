let mongoose = require('mongoose');

// DEBUG
// .set('debug', true)

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://tommudano:bycicle01.@ds159574.mlab.com:59574/todoapp');

module.exports = {mongoose};
