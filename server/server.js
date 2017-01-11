var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require("mongodb");

var {mongoose} = require("./db/mongoose.js");
var {Todo} = require("./models/todo.js");
var {User} = require("./models/user.js");

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc)
	}, (e) =>{
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos/:id', (req, res) => {
	var id = req.params.id;
		if(!ObjectID.isValid){
			return res.status(404).send();
		}
		Todo.findById(id).then((todo) => {
			if(!todo){
				return res.status(404).send();
			}
			res.send(todo);
		}).catch((e) => { 
			res.status(400).send() 
		});
})

app.listen(3000, function(){
	console.log("Listen on 3000");
})





// var newTodo = new Todo({
// 	text: 'Cook Dinner'
// });

// newTodo.save().then((doc) => {
// 	console.log('saved todo', doc)
// }, (e) => {
// 	console.log('Unable to save todo');
// });

// var anotherTodo = new Todo({
// 	text: "Testando outro todo",
// 	completed: false,
// 	completedAt: 1
// });

// anotherTodo.save().then((doc) => {
// 	console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
// 	console.log(e);
// });