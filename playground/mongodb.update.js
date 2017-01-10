//var MongoClient = require("mongodb").MongoClient;

var {MongoClient, ObjectId} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	
	if(err){
		console.log("Unable to conect to MongoDB server ", err);
	}

	console.log("Connected to Mongodb Server");

	db.collection('Todos').findOneAndUpdate({
		_id : new ObjectId("586bce7e0f988114147a50a1")
	}, {
		$set:{
			completed: true
		}
	},{
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	})
	db.close();
});