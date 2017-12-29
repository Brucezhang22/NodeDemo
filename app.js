var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var connectionUrl = 'mongodb://localhost:27017';
var databaseName = 'nodeLearning';

var books = [{
    Title: 'Node Basics',
    Author: 'MudOnTire',
    Price: 100
}, {
    Title: 'MongoDB Basics',
    Author: 'Bruce Zhang',
    Price: 50
}];

//Connect
function connectDB(callback) {
    MongoClient.connect(connectionUrl, function (err, client) {
        console.log("Connected correctly to server");
        const db = client.db(databaseName);
        callback(db);
    });
}

//Insert
function insertBooks(db, books, callback) {
    const collection = db.collection('books');
    const count = books.length;
    collection.insertMany(books, function (err, result) {
        assert.equal(err, null);
        assert.equal(count, result.ops.length);
        console.log(`Inserted ${result.ops.length} books.`);
        callback(result);
    });
}

//Query
function queryBooks(db, filter, callback) {
    const collection = db.collection('books');
    collection.find(filter).toArray(function (err, books) {
        callback(books);
    });
}

connectDB(function (db) {
    queryBooks(db, {
        Title: { $regex: /^M.+s$/ }
    }, function (books) {
        console.log(books);
    });
});