import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagerService } from '../services/session-manager.service';
import { DataManagerService } from '../services/data-manager.service';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router: Router, 
              private sessionService: SessionManagerService,
              private dataService: DataManagerService,
              private http : HttpClient) { }

  // quizData is initialized by ngOnInit to be an object of the quizData.json
  testBookData;
  ngOnInit() {
    
    this.testBookData = this.dataService.emptyTestBook;
      //this.quizData = this.dataService.getQuizData();
      
    }
  
  
  postData(){
    return this.http.post('/quiz/testBook', this.testBookData)
    }
    
  
  submitQuiz()
  {
    
    //console.log("We're attempting to connect to server");
    console.log(JSON.stringify(this.testBookData));
    let body=JSON.stringify(this.testBookData)
    let headers=new HttpHeaders({'Content-Type':'application/json'});
    let options={headers:headers};
    this.http.post<any>('http://localhost:4200/api/v1/server/quiz/testBook/',body,options)
      .subscribe(res=>{
        console.log(res.score+"score");
          this.dataService.score=res.score
          console.log("this is the score in quiz component"+this.dataService.score)
          console.log("Proceed to route");
          this.router.navigate(['results']);
        
        }
        );
        
    /* legacy code
    this.sessionService.correctAnswers=this.checkAnswers();
    this.router.navigate(['results']);
    */
  }



/*legacy code ngONinit
    this.dataService.getQuizData().subscribe(data => 
      {
        this.quizData = data;
      });
    if(typeof this.sessionService.quizId==="undefined")
    {
      this.router.navigate(['quizSelect']);
    }
    if(!this.sessionService.isValidSession)
    {
      this.router.navigate(['login']);
    }
    */

  /*legacy code
  checkAnswers()
  {
    let count =0;
    for(var i=0; i < this.quizData.quizes[this.sessionService.quizId].questions.length; i++)
    {
      if(this.quizData.quizes[this.sessionService.quizId].questions[i].answerIndex
      ==this.quizData.quizes[this.sessionService.quizId].questions[i].answerSelected)
      {
        count++;
      }
    }
    return count;
  }
*/}