const MongoClient = require('mongodb').MongoClient;
const url         = "mongodb+srv://Anumalar:malar@customerapp.dpu2vnl.mongodb.net/model?retryWrites=true&w=majority";
let db            = null;
 
// connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log("Connected successfully to db server");
    // connect to myproject database
    db = client.db('model');
});


// login
function login(email, password){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .find({email: email},{password: password})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
        });    
    })
}


// find user account
function find(email){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .find({email: email})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
        });    
    })
}

// find user account
function findOne(email){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .findOne({email: email})
            .then((doc) => resolve(doc))
            .catch((err) => reject(err));    
    })
}


// all users
function all(){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
        });    
    })
}


module.exports = { findOne, find,  all, login};