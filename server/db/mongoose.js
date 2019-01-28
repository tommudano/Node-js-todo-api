let mongoose = require('mongoose');

// DEBUG
// .set('debug', true)

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};
