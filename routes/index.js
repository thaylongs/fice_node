var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'Express' });
});

router.get('/convocatoria', function(req, res, next) {
  res.render('convocatoria', { title: 'Express' });
});

router.get('/convocatoriasfice', function(req, res, next) {
  res.render('convocatoriasfice', { title: 'Express' });
});

router.get('/voluntarios', function(req, res, next) {
  res.render('voluntarios', { title: 'Express' });
});

router.get('/programacao', function(req, res, next) {
  res.render('programacao', { title: 'Express' });
});


router.get('/programacao/piranha', function(req, res, next) {
  res.render('programacao/piranha', { title: 'Express' });
});

module.exports = router;
