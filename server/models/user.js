var mongoose = require("mongoose");
var validator = require("validator");

var User = mongoose.model('User', {
	Email:{
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
		validate: {
			validator: validator.isEmail,
			message: '{VALUE} is not a valid E-MAIL'
		}
	},
	password:{
		type: String,
		require: true,
		minlength: 6
	},
	tokens: [{
		access: {
			type: String,
			require: true
		},
		tokens: {
			type: String,
			required: true
		}
	}]
});

module.exports = {
	User
};