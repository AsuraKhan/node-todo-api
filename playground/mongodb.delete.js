//var MongoClient = require("mongodb").MongoClient;

var {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	
	if(err){
		console.log("Unable to conect to MongoDB server ", err);
	}

	console.log("Connected to Mongodb Server");

	//DeleteMany Exibe um monte de informação, maior parte inutil.
	db.collection('Todos').deleteMany({text: 'texto aqui a ser procurado'}).then((result) => {
		console.log(result);
	})

	//DeleteOne exibe um monte informação, maior parte inutil.
	db.collection('Todos').deleteOne({text: 'texto aqui a ser procurado'}).then((result) => {
		console.log(result);
	})

	//findOneAndDelete exibe informações esssenciais
	db.collection('Todos').findOneAndDelete	({text: 'texto aqui a ser procurado'}).then((result) => {
		console.log(result);
	})
	db.close();
});