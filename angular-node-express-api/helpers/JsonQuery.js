
module.exports = {

    // compare the information in the email and password field
    // to what we have in the stored json "database". If we find
    // something, return the name of the user. Return empty string
    // otherwise
    findUser: function(email, password)
    {
        var userData = require('../assets/userData.json');

        for(var i =0; i <userData.users.length; i++)
        {
            if((email == userData.users[i].email)
            && (password == userData.users[i].password))
            {
                // We've found a valid user in the json "db". 
                // return the user's name;
                return userData.users[i].name;
            }
        }

        // The user didn't exist.
        return "";
    },

    // Returns the question data associated with the quizName or 
    // null if the quiz with that quiz name does not exist
    findQuiz: function(quizName){
        
        var quizData = require('../assets/quizData.json');

        for(var i =0; i < quizData.quizes.length; i++)
        {
            if(quizName == quizData.quizes[i].quizName)
            {
                // we've found a quiz with that name. Return
                // the quiz's information
                return quizData.quizes[i];
            }
        }
        // we did not find an email
        return null;
    },

    findQuizes: function(){
        return require('../assets/quizData.json');
    }

}