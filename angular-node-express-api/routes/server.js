const express = require('express');
const path = require('path');
const router = express.Router();
var validations = require('../helpers/Validation.js');
var queries = require('../helpers/JsonQuery.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow_origin", "*");
  console.log("Its working");
  res.send({users: [{name: 'Timmy'}]});
  //res.send("In function");
});

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
  var emptyTestBook = queries.findQuiz(req.params.quizName);

  if(emptyTestBook = null)
  {
      // We didn't find a quiz with that name! 
      // Create an error message and route back to quiz
      var errorMessage = "No quiz found with name "+ req.params.quizName;
  }
  else{
      // put the emptyTestBook into the session so the quiz can get it
      //req.session.testBook = emptyTestBook;
      // TODO: Route to the quiz page
  }
});

// We're still not sure how to process the iterum page with posts
router.post('./quiz/:testBook', (req,res)=>{
  var score = validations.quizValidate(req.body.testBook);

  //req.session.testScore=score;
  //route to the results page
});


//app.use(session(sess));
module.exports = router;
