var {ObjectID} = require("mongodb");

var {mongoose} = require("./../server/db/mongoose");
var {Todo} = require("./../server/models/todo");

var id = '5874005515afcf2768cbe799';

if(!ObjectID.isValid()){
	console.log("Id is not valid");
}
// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('todos', todos)
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 		console.log('Todo', todo)
// });

Todo.findById(id).then((todo) => {
	if(!todo){
		return console.log("Id not found -- MATA TODO MUUNDÓÓÓ ");
	}
	console.log('Todo By Id', todo);
}).catch((e) => console.log(e));