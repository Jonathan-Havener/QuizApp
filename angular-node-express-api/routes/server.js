const express = require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
var validations = require('../helpers/Validation.js');
var queries = require('../helpers/JsonQuery.js');

// router.use(bodyParser.urlencoded({ extended: false }));
// router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow_origin", "*");
  console.log("Its working");
  res.send({users: [{name: 'Timmy'}]});
  //res.send("In function");
});
// quiz-select by HDP



router.post('/results', function(req, res, next) {
  //
  //
  if(req.submit){
    res.writeHead(200,{'Content-Type':'JSON'});
    res.write(JSON.stringify({code:1}))
    res.end();
  }
});

router.get('/sessionManager/:code', function(req,res){
  if(req.params.code==1){
    res.json({name : req.session.name});
  }
  if(req.params.code==0){
    req.session.destroy();
  }
});

router.get('/dataManager', (req,res)=>{
  console.log(queries.findQuizes())
  res.json({quizes: queries.findQuizes()});
})

router.get('/login/:name/:password',(req,res,next)=>{
  
  //res.header("Access-Control-Allow_origin", "*");

  // validate the username and password from the userData
  var username=queries.findUser(req.params.name, req.params.password);
  
  
  // In the case that the user didn't exist in the userData.json, 
  // we will have an empty username string and we will qive the front
  // end an error message
  if (username == ""){
    res.writeHead(200, {'Content-Type': 'JSON'});
    res.write(JSON.stringify({message:"Wrong Credentials",
                              code:0}));
    res.end();
  }
  else{// Otherwise, validation successful and we can route to the next page
    // Save the username in the session
    req.session.name = username;
    res.writeHead(200, {'Content-Type': 'JSON'});
    res.write(JSON.stringify({message:"Credentials verified",
                              code:1}));
    res.end();
  
    // TODO: Route to quiz-select page
    /* Handle routing with angular instead
    console.log("Redirecting...");
    res.header("Access-Control-Allow-Origin", "*");
    res.writeHead(302,{
      'Location':'http://localhost:4200/api/v1/server/'
    });
    //res.redirect('http://google.com');
    res.end();
    */
  }  
});

// When a user selects a quiz, we should parse the quizName from the url
// Next we should find the appropriate quiz data and write it into the response
router.get('/quiz-select/:quizName',(req,res)=> {
  var emptyTestBook = queries.findQuiz(req.params.quizName.toString());
  if(emptyTestBook == null)
  {
      // We didn't find a quiz with that name! 
      // Create an error message and route back to quiz
      var errorMessage = "No quiz found with name "+ req.params.quizName;
  }
  else{
      // put the emptyTestBook into the session so the quiz can get it
      // req.session.testBook = emptyTestBook;
      // TODO: Route to the quiz page
      res.writeHead(200,{'Content-Type':'JSON'});
      res.write(JSON.stringify({code:1, emptyTest : emptyTestBook}))
      console.log("Test book is" +JSON.stringify(emptyTestBook));
      //res.write(JSON.stringify({emptyTest : JSON.stringify(emptyTestBook)}));
      res.end();

  }
} );


// We're still not sure how to process the iterum page with posts
router.post('/quiz/testBook', (req,res)=>{
  console.log(req.body)
  var score = validations.quizValidate(req.body);
  console.log(score);
  res.writeHead(200,{'Content-Type':'JSON'});
      res.write(JSON.stringify({score:score}));
     // console.log("Test book is" +JSON.stringify(emptyTestBook));
      //res.write(JSON.stringify({emptyTest : JSON.stringify(emptyTestBook)}));
      res.end();
  //req.session.testScore=score;
  //route to the results page
});

//app.use(session(sess));
module.exports = router;