var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'Express' });
});

router.get('/calendario', function(req, res, next) {
  res.render('calendario', { title: 'Express' });
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

router.get('/ingressos', function(req, res, next) {
  res.render('ingressos', { title: 'Express' });
});

router.get('/imprensa', function(req, res, next) {
  res.render('imprensa', { title: 'Express' });
});

router.get('/expandido', function(req, res, next) {
  res.render('expandido', { title: 'Express' });
});

router.get('/palestras', function(req, res, next) {
  res.render('palestras', { title: 'Express' });
});

router.get('/batepapo', function(req, res, next){
  res.render('batepapo',{ title: 'Express' });
});

router.get('/oficinas', function(req, res, next) {
  res.render('oficinas', { title: 'Express' });
});

router.get('/programacao/piranha', function(req, res, next) {
  res.render('programacao/piranha', { title: 'Express' });
});

router.get('/programacao/danca', function(req, res, next) {
  res.render('programacao/danca', { title: 'Express' });
});

router.get('/programacao/suely', function(req, res, next) {
  res.render('programacao/suely', { title: 'Express' });
});

router.get('/programacao/medelei', function(req, res, next) {
  res.render('programacao/medelei', { title: 'Express' });
});

router.get('/programacao/kardashian', function(req, res, next) {
  res.render('programacao/kardashian', { title: 'Express' });
});

router.get('/programacao/contemporanea', function(req, res, next) {
  res.render('programacao/contemporanea', { title: 'Express' });
});

router.get('/programacao/birds', function(req, res, next) {
  res.render('programacao/birds', { title: 'Express' });
});

router.get('/programacao/ricardo', function(req, res, next) {
  res.render('programacao/ricardo', { title: 'Express' });
});

router.get('/programacao/ciclo', function(req, res, next) {
  res.render('programacao/ciclo', { title: 'Express' });
});

router.get('/programacao/ator', function(req, res, next) {
  res.render('programacao/ator', { title: 'Express' });
});

router.get('/programacao/the-sirens', function(req, res, next) {
  res.render('programacao/the-sirens', { title: 'Express' });
});

router.get('/imprensa', function(req, res, next) {
  res.render('imprensa', { title: 'Express' });
});


module.exports = router;
