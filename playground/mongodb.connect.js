//var MongoClient = require("mongodb").MongoClient;

var {MongoClient} = require("mongodb");

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

	// db.collection('Todos').insertOne(todo, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// })

	db.collection('Users').insertOne(user, (err, result) => {
		if (err) {
			return console.log('Unable to insert todo', err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
		//console.log(result.ops[0]._id.getTimestamp()); RETORNA O _ID decodificado
	})

	db.close();
});