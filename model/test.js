const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://Anumalar:malar@customerapp.dpu2vnl.mongodb.net/model?retryWrites=true&w=majority';

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log('connected!')


//database Name
const dbName = 'model';
const db     = client.db(dbName);

//new user
var name = 'user' + Math.floor(Math.random()*10000);
var email = name + '@gmail.com';

//insert into customer table
var collection = db.collection('customers');
var doc = {name, email};
collection.insertOne(doc, {w:1}, function(err, result) {
    console.log('Document insert');
});

var customer = db.collection('customers')
.find()
.toArray(function(err, docs) {
    console.log('Collection:',docs);

    //clean up
    client.close();
});
});
