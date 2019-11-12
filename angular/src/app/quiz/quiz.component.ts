import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagerService } from '../services/session-manager.service';
import { DataManagerService } from '../services/data-manager.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router: Router, 
              private sessionService: SessionManagerService,
              private dataService: DataManagerService) { }

  // quizData is initialized by ngOnInit to be an object of the quizData.json
  quizData:any;
  ngOnInit() {
    /*legacy code
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
  }
  
 
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
*/
  submitQuiz()
  {

    /* legacy code
    this.sessionService.correctAnswers=this.checkAnswers();
    this.router.navigate(['results']);
    */
  }

}

