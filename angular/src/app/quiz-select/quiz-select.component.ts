import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagerService } from '../services/session-manager.service';
import { DataManagerService } from '../services/data-manager.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz-select',
  templateUrl: './quiz-select.component.html',
  styleUrls: ['./quiz-select.component.css']
})
export class QuizSelectComponent implements OnInit {

  constructor(private router: Router, 
             private sessionService: SessionManagerService,
             private dataService: DataManagerService,
             private http : HttpClient) { }
quizData:any;
  ngOnInit() {
    //this.quizData = this.dataService.getQuizData();
    this.dataService.getQuizData().subscribe(data => 
      {
        this.quizData = data.quizes;
        console.log(this.quizData);

        
      });
    /*if(!this.sessionService.isValidSession)
    {
      this.router.navigate(['login']);
    }*/
    
  }

quizIndex:number;
quizName:string;

selectQuiz(){
  console.log("We're attempting to connect to server");
  var tempString =""
  //this.quizName = "quiz";
  //for(var i =0; i <this.quizName; )
  this.http.get<any>("http://localhost:4200/api/v1/server/quiz-select/"+this.quizName)
    .subscribe(res=>{
      
      if(res.code==1)
      {
        this.dataService.emptyTestBook = res.emptyTest;
        this.router.navigate(['quiz']);
      }
      });
}





//selectQuiz(){
/*legacy code
if(typeof this.selectedLevel1 == "undefined")
{
  this.errorMessage="Please pick a quiz from below. (You may have to deselect the first quiz and reselect it)";
  return;
}
  this.errorMessage="";

  var quizIndex;
  for(var i =0; i<this.quizData.quizes.length; i++)
  {
    if(this.selectedLevel1 == this.quizData.quizes[i].quizName)
    {
      console.log("found it!")
      this.quizIndex=i;
    }
  }

    this.sessionService.validateQuizSession(this.quizIndex);
    setTimeout(() => {
      this.router.navigate(['quiz']);
    }, 100);
  */ 
  //}
}