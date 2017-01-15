var {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
//	console.log(result);
//})

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5874005515afcf2768cbe799').then((todo) => {
	console.log(todo);
});