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
function connectBookCollection(callback) {
    MongoClient.connect(connectionUrl, function (err, client) {
        console.log("Connected correctly to server");
        const db = client.db(databaseName);
        const collection = db.collection('books');
        callback(collection);
    });
}

//Insert
function insertBooks(collection, books, callback) {
    const count = books.length;
    collection.insertMany(books, function (err, result) {
        assert.equal(err, null);
        assert.equal(count, result.ops.length);
        console.log(`Inserted ${result.ops.length} books.`);
        callback(result);
    });
}

//Query
function queryBooks(collection, filter, callback) {
    collection.find(filter).toArray(function (err, books) {
        callback(books);
    });
}

connectBookCollection(function (collection) {
    // queryBooks(collection, {
    //     Title: { $regex: /^M.+s$/ }
    // }, function (books) {
    //     console.log(books);
    // });

    // collection.updateOne(
    //     { Title: 'CSS Basics' },
    //     {
    //         $set: {
    //             Author: 'Me',
    //             Price: '38',
    //             Language: 'English'
    //         }
    //     },
    //     { upsert: true },
    //     function (err, result) {
    //         assert.equal(err, null);
    //         console.log(result);
    //     }
    // );

    // collection.remove({ Title: 'What the hell' }, function (err, result) {
    //     console.log(result);
    // });

    // collection.createIndex({ Title: 1 }, null, function (err, result) {
    //     console.log(result);
    // });
});