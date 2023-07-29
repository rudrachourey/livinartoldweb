var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const userModel = require('./users')
// const firebase = require('firebase');




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/maintaince', function(req, res, next) {
  res.render('maintaince');
});


router.get('/coundown', function(req, res, next) {
  res.render('coundown');
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


router.get('/blog-grid', function(req, res, next) {
  res.render('blog-grid');
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


router.get('/portfolio', function(req, res, next) {
  res.render('portfolio');
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


router.get('/service', function(req, res, next) {
  res.render('service');
});


router.get('/team.ejs', function(req, res, next) {
  res.render('team.ejs');
});


router.get('/contact-form', function(req, res, next) {
  res.render('contact-form');
});


router.post('/sendmail', function(req, res, next){
  const newmail = new userModel({
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
  });

  newmail.save().then((mail)=>{
      console.log(mail)
      res.redirect('back');
  })
});








/////////////////***********Comment Section *********//////////////////




  router.post('/blogs/comments', function(req, res, next) {
    const comment = new userModel({
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment,
    });

    comment.save()
      .then((newComment) => {
        res.redirect('/comments'); // Redirect to the comments route after saving
        console.log(newComment);
      })
      .catch((error) => {
        console.error('Error saving comment:', error);
        // Handle the error appropriately
      });
  });




  router.get('/comments', function(req, res, next) {
    userModel.find()
      .then((comments) => {
        res.render('b1', { comments: comments });
        console.log(comments)
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
        // Handle the error appropriately
      });
  });





////////////////*********end of comment section********************////////////////






////////////////*********contact Form section********************////////////////




router.get('/main-form', function(req, res, next) {
  res.render('main-form');
});
  





router.post('/processData', (req, res) => {
  const data = req.body; // The data sent from the client will be available in req.body

  // Manipulate the data as needed
  // Example: Save the data to the database, perform further processing, etc.
  console.log('Received data:', data);

  // Send a response to the client
  res.json({ message: 'Data received successfully!' });
});




/////////****meeting rout ******* *///////////////




router.post('/coundownn', function(req, res, next) {
  res.render('coundown');
});

router.get('/meeting-form', function(req, res, next) {
  res.render('meeting-form');
});


router.post('/datetime', function(req, res, next) {
  const timeSchedule = new userModel({
    date: req.body.date,
    time: req.body.time,
  });
  // console.log(timeSchedule)

  timeSchedule.save()
  .then((newtime)=>{
    console.log(newtime)
    // res.json({newtime})
    res.redirect('/coundown');
  })
});

















module.exports = router;
