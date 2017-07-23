var express = require('express');
var router = express.Router();
var Post = require('../schema/post');

/* GET post page. */
router.get('/', function(req, res, next) {
  Post.find({}, function(err, posts) {
    if (err) {
      console.log(err);
    } else {
      res.render('post', { title: 'Post', posts: posts });
    }
  }); 
  
});


/* GET SINGLE POST BY ID */
router.get('/edit/:id', function(req, res, next) {
  Post.findById(req.params.id, function (err, post) {
    if (err) {
      console.log(err);
    } else {
      res.render('post', { title: 'Post Details', postDetail: post });
    }
  });
});

/* DELETE POST BY ID */
router.get('/destroy/:id', function(req, res, next) {
  Post.findByIdAndRemove(req.params.id, function (err, post) {
    if (err) {
      res.render('post', { title: 'Hey', message: 'Not deleted!' });
    } else {
      res.render('post', { title: 'Hey', message: 'Post deleted!' });
    }
  });
});


/* POST Data. */
router.post('/', function(req, res, next) {
 var data = new Post(req.body);
 data.save(function(err){
  if(err){
    res.render('post', { title: 'Hey', message: 'Invalid request!' });
  } else {
    res.render('post', { title: 'Hey', message: 'Request received!' });
  }
 })
});


/* UPDATE POST */
router.put('/post/:id', function(req, res, next) {
  Product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if(err){
    res.render('post', { title: 'Hey', message: 'Invalid request!' });
  } else {
    res.render('post', { title: 'Hey', message: 'Post updated!' });
  }
  });
});

module.exports = router;
