var express = require('express');
var router = express.Router();
var validations = require('../helpers/Validation.js');
var queries = require('../helpers/JsonQuery.js');

var session = require('express-session');
//app.use(session({secret: "userSecret"}));


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow_origin", "*");
  console.log("Its working");
  res.send({users: [{name: 'Timmy'}]});
  //res.send("In function");
});

router.get('/login/:name/:password',(req,res)=>{
  res.header("Access-Control-Allow_origin", "*");

  console.log("We've submitted the user/password");

  // validate the username and password from the userData
  var username=queries.findUser(req.params.name, req.params.password);
  
  
  // In the case that the user didn't exist in the userData.json, 
  // we will have an empty username string and we will qive the front
  // end an error message
  if (username == ""){
    //res.send('Wrong Credential');
    console.log("Wrong Credentials");
  }
  // Otherwise, validation successful and we can route to the next page
  else{
      // Save the username in the session
      //req.session.username = username;
      //res.write(username);
      //res.end();

      // TODO: Route to quiz-select page

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

module.exports = router;
