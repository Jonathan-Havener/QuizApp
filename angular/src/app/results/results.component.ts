import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagerService } from '../services/session-manager.service';
import { DataManagerService } from '../services/data-manager.service';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private router: Router, 
              private sessionService: SessionManagerService,
              private dataService: DataManagerService) { }

  ngOnInit() {
    if(!this.sessionService.isValidSession)
    {
      this.router.navigate(['login']);
    }
  }

  selectNewQuiz()
  {
    this.router.navigate(['quizSelect']);
  }
  
}
