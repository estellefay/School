var express = require('express');
var http = require('http'); 
var router = express.Router();
const Formation = require('../models/formation');
const formationCtrl = require('../controllers/formation');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * Obtenir toutes les formations
 */
router.get('/formation', formationCtrl.getAllFormation);
router.post('/formation', formationCtrl.createFormation);
router.put('/formation/:id', formationCtrl.updateFormation);
router.delete('/formation/:id', formationCtrl.deleteFormation);
router.get('/formation/:id', formationCtrl.getOneFormation);







// router.get('/formation', function(req, res, next) {
//   Formation.find()
//   .then(formations => res.status(200).json(formations))
//   .catch(error => res.status(400).json({ error }));
// });

/**
 * Obtenir une formation spécifique
 */
// router.get('/formation/:id', function(req, res, next) {
//   console.log(req.params.id);
//   // TODO
//   // Quand il y aura une BDD aller chercher la formation corespondante
//   Formation.findOne({ _id: req.params.id })
//   .then(formation => res.status(200).json(formation))
//   .catch(error => res.status(404).json({ error }));
// });




module.exports = router;
