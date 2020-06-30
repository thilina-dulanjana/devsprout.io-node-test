var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  res.send('post an user');
});

router.patch('/:id', function(req, res, next) {  
  res.send('patch an user');
})

module.exports = router;
