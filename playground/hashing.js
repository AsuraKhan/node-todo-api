var jwt = require('jsonwebtoken');

var data = {
	id: 10
};

var token = jwt.sign(data, '123abc');
var decoded = jwt.verify(token, '123abc');