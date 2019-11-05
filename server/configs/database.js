const mongoose = require('mongoose')

// Don't forget to set "MONGODB_URI" in ~/server/.env

mongoose.Promise = Promise;

mongoose
  .connect(process.env.MONGOLAB_URI ||
    `mongodb://localhost/spirits-by-marcos`, {
    useNewUrlParser: true
  }, { useMongoClient: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })

// const mongoose = require('mongoose')

// // Don't forget to set "MONGODB_URI" in ~/server/.env
// const uri =
//   process.env.MONGODB_URI ||
//   `mongodb://localhost/spirits-by-marcos`

// mongoose.Promise = Promise;

// mongoose
//   .connect(uri, {
//     useNewUrlParser: true
//   })
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   })
// const MongoClient = require('mongodb').MongoClient;

// // replace the uri string with your connection string.
// const uri = process.env.MONGODB_URI || `mongodb://localhost/spirits-by-marcos`
// MongoClient.connect(uri, function (err, client) {
//   if (err) {
//     console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
//   }
//   console.log('Connected...');
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// })