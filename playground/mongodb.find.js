//var MongoClient = require("mongodb").MongoClient;

var {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	
	if(err){
		console.log("Unable to conect to MongoDB server ", err);
	}

	console.log("Connected to Mongodb Server");

	var user = {
		name: 'Nogueira',
		age: 18,
		location: 'Rua Soldado 322'
	};

	// db.collection("Todos").find({
	// 	_id: new ObjectID('586bd53db0b9bf0628be7351')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2))
	// }, (err) => {
	// 	console.log("Unable to fetch Todos", err);
	// });

	// db.collection("Todos").find().count().then((count) => {
	// 	console.log('Count ' + count);
	// }, (err) => {
	// 	console.log("Unable to fetch Todos", err);
	// });

	db.collection("Users").find({
		name: 'Nogueira'
	}).count().then((count) => {
		console.log('Count ' + count);
	}, (err) => {
		console.log("Unable to fetch Todos", err);
	});

	db.collection("Users").find({
		name: 'Nogueira'
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2))
	}, (err) => {
		console.log("Unable to fetch Todos", err);
	});

	db.close();
});