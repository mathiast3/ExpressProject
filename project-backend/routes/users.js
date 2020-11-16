var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'express_db'
})

connection.connect()


/* GET users listing. */
router.get('/', function(req, res, next) {
  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);
});

// POST method route
router.post('/add', function (req, res) {
  console.log(req);
  var email= req.body.email;
  var password= req.body.password;

  var sql = "INSERT INTO users(email,password) VALUES('"+email+"', '"+password+"')";

  // execute the insert statment

  connection.query(sql);
  res.send('POST request to the homepage '+email)
  
});

/* Check if credentials work */
router.get('/check', function(req, res, next) {
  var sql = "SELECT * FROM users";

  // execute the insert statment

  connection.query(sql, function (err, result, fields) {
    if (err) throw err;
    for(var i = 0;i<result.length;i++){
        console.log(result[i])
    }
    
  });

  res.send('Getting all users')
});


module.exports = router;
