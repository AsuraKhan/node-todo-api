var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
	bcrypt.hash(password, salt, (err, hash) =>{
		
	});
});
var pass = '$2a$10$RhWJC2B9vPb0GCqrEaeWhOKHo8gzjrkQRTu98rqLfQFsC9I7.rkyG';
bcrypt.compare(password, pass, (err, res) =>{
	console.log(res);
})





// var data = {
// 	id: 10
// };

// var token = jwt.sign(data, '123abc');
// var decoded = jwt.verify(token, '123abc');