var express = require('express');
var router = express.Router();
var request = require('request');

/* GET engine dashboard */
router.get('', function(req, res, next) {
  res.render('engine/flows', { title: 'Flows' });
});


/* Search flows in whole engine */
router.get('/:key', function(req, res, next) {
  res.render('engine/flowDetails', {
    title: 'Flow Details',
    key: req.params.key
  });
});

module.exports = router;
