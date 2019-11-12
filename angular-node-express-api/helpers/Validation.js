
var queries = require('../helpers/JsonQuery.js');

module.exports = {

    // return a name if it exists in the json
    // return empty string if it does not
    /*userValidate : function(email, pword)
    {
        return queries.findUser(email, pword);
    },*/

    // given a completed test, testBook, count all of the correct answers
    quizValidate : function(testBook)
    {
        let count =0;
        for(var i=0; i < testBook.questions.length; i++)
        {
        //if the selected answers = the correct answer
        if(testBook.questions[i].answerIndex
            ==testBook.questions[i].answerSelected)
            {
                count++;
            }
        }
        return count;
    }
}