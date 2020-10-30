var express = require('express');
var router = express.Router();
var db = require('../db');

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

  var sql = "INSERT INTO users(email,password) VALUES("+email+", "+password+")";

  // execute the insert statment

  db.query(sql);
  db.end()
  res.send('POST request to the homepage '+email)
  
});


module.exports = router;
