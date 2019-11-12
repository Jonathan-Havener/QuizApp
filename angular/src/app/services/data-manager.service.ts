import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(private http: HttpClient) {
    this.getQuizData().subscribe(data=>{console.log(data)});
    this.getUserData().subscribe(data=>{console.log(data)});
  }

  public getQuizData(){
    return this.http.get("../assets/quizData.json");
  }  
  public getUserData(){
    return this.http.get("../assets/userData.json")
  }

  quizData:any;
  //any function that should be used in multiple places go here
  public getQuizDataStructured(){
    this.getQuizData().subscribe(data=>{
      this.quizData = data;
      this.quizData.questions.forEach(function(quizElement)
      {
        console.log(quizElement.question);
        quizElement.answers.forEach(function(options)
        {
          console.log("*"+options);
        });
      });
    });
  }

}

interface StructuredQuizzes {
  quizzes : Array<QuestionSet>;
}
interface QuestionSet{
  quizName : string;
  //quizId : number;
  questions : Array<Question>;
}
interface Question{
  question : string;
  choices : Array<string>;
  answerIndex : number;
}
