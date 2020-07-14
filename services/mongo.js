const mongoose = require('mongoose');

function connect() {
  mongoose.connect(
      process.env.MONGODB_URL,
      {useNewUrlParser: true, useUnifiedTopology: true});
  const db = mongoose.connection;

  db.on('error', console.log);
  db.once('open', () => {
    console.log('Connected to Mongo');
  })
}

module.exports = {connect};
