const Hapi = require('hapi');
const MongoClient = require('mongodb').MongoClient;

function startServer(db) {  
  return new Promise(function(resolve, reject) {
    var server = new Hapi.Server();
    server.connection({ port: 3000 });

    try {
      server.route(require('./routes')(db));
    } catch (exception) {
      return reject(exception);
    }

    server.start(function () {
      console.log('Server running at:', server.info.uri);
      resolve(server);
    });
  });
}

function connectToDatabase(url) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, function(err, db) {
      if (err) {
        reject(err);
      } else {
        console.log('Connected to database:', url);
        resolve(db);
      }
    });
  });
}

var db_url = 'mongodb://localhost:27017/hapi-mongo-stream';

connectToDatabase(db_url).then(startServer).catch(function(exception) {
  console.error(exception);
  process.exit(1);
});
