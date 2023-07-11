var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const commentModel = require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/maintaince', function(req, res, next) {
  res.render('maintaince');
});


router.get('/b1', function(req, res, next) {
  res.render('b1');
});


router.get('/b2', function(req, res, next) {
  res.render('b2');
});


router.get('/b3', function(req, res, next) {
  res.render('b3');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});


router.get('/blog-masonry.ejs', function(req, res, next) {
  res.render('blog-masonry.ejs');
});


router.get('/about-element-1.ejs', function(req, res, next) {
  res.render('about-element-1.ejs');
});


router.get('/blog-standard.ejs', function(req, res, next) {
  res.render('blog-standard.ejs');
});


router.get('/blog-grid.ejs', function(req, res, next) {
  res.render('blog-grid.ejs');
});


router.get('/blog-element-1.ejs', function(req, res, next) {
  res.render('blog-element-1.ejs');
});

router.get('/blog-details.ejs', function(req, res, next) {
  res.render('blog-details.ejs');
});


router.get('/choose-element.ejs', function(req, res, next) {
  res.render('choose-element.ejs');
});


router.get('/faq.ejs', function(req, res, next) {
  res.render('faq.ejs');
});


router.get('/faq-element.ejs', function(req, res, next) {
  res.render('faq-element.ejs');
});


router.get('/feature-element-1.ejs', function(req, res, next) {
  res.render('feature-element-1.ejs');
});


router.get('/index-boxed.ejs', function(req, res, next) {
  res.render('index-boxed.ejs');
});

router.get('/index-onepage.ejs', function(req, res, next) {
  res.render('index-onepage.ejs');
});


router.get('/portfolio.ejs', function(req, res, next) {
  res.render('portfolio.ejs');
});


router.get('/portfolio-details.ejs', function(req, res, next) {
  res.render('portfolio-details.ejs');
});


router.get('/pricing.ejs', function(req, res, next) {
  res.render('pricing.ejs');
});


router.get('/process-element-1.ejs', function(req, res, next) {
  res.render('process-element-1.ejs');
});


router.get('/service-element.ejs', function(req, res, next) {
  res.render('service-element.ejs');
});


router.get('/services.ejs', function(req, res, next) {
  res.render('service.ejs');
});


router.get('/team.ejs', function(req, res, next) {
  res.render('team.ejs');
});


router.get('/contact-form.ejs', function(req, res, next) {
  res.render('contact-form.ejs');
});


// router.post('/blogs/comments', function(req, res, next) {
//   // console.log(req.params.id)
//   // console.log(req.body.name)
//   // console.log(req.body.email)
//   // console.log(req.body.message)
//   const comment = new commentModel({
//     name: req.body.name,
//     email: req.body.email,
//     comment: req.body.comment,
//   })
//   .then((newComment)=>{
//     comment.save(()=>{
      
//         res.json(comment)
//         console.log(comment);
//       // }
//   })

//   })
// })



router.post('/blogs/comments', function(req, res, next) {
  const comment = new commentModel({
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
  });

  comment.save()
    .then((newComment) => {
      res.render('/b1',newComment);
      console.log(newComment);
    })
    .catch((error) => {
      console.error('Error saving comment:', error);
      // Handle the error appropriately
    });
});


module.exports = router;
