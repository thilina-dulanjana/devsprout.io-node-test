var express = require('express');
var router = express.Router();
const { postRegister, postLogin } = require('../controllers/index');
const { errorHandler } = require('../middleware/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', (req, res, next) => {
  res.send('GET /login');
});
router.post('/register', errorHandler(postRegister));

router.post('/login', postLogin);
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
