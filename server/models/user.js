var _ = require("lodash");
var mongoose = require("mongoose");
var validator = require("validator");
var jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
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
		token: {
			type: String,
			required: true
		}
	}]
});

UserSchema.methods.toJSON = function () {
	var user = this;
	var userObject = user.toObject();

	return _.pick(userObject, ['_id', 'Email']);
};

UserSchema.methods.generateAuthToken = function () {
	var user = this;
	var access = 'auth';
	var token = jwt.sign({_id: user._id.toHexString(), access},'abc123').toString();

	user.tokens.push({access, token});
	console.log(user);
	return user.save().then(()=>{
		return token;
	});
};

var User = mongoose.model('User', UserSchema);

module.exports = {
	User
};