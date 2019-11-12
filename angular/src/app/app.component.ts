import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagerService } from './services/session-manager.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quizApp';

  constructor(private router: Router,
              private sessionService: SessionManagerService
  ){}

}
