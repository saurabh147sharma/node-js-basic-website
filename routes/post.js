var express = require('express');
var router = express.Router();
var Post = require('../schema/post');

/* GET post page. */
router.get('/', function(req, res, next) {
  res.render('post', { title: 'Post' });
});


/* POST Data. */
router.post('/', function(req, res, next) {
 console.log(req.body);
 var data = new Post(req.body);
 data.save(function(err){
  if(err){
    res.render('post', { title: 'Hey', message: 'Invalid request!' });
  } else {
    res.render('post', { title: 'Hey', message: 'Request received!' });
  }
 })
});

module.exports = router;
