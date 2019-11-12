import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  constructor(private router:Router) { }

  isValidSession: boolean = false;
  activeUserName: string = "";

  logout()
  {
    // TODO: Destroy the session
    this.invalidateSession();
    this.router.navigate(['login']);
  }
  invalidateSession()
  {
    this.isValidSession = false;
    this.activeUserName = "";
  }
  validateSession(user:string)
  {
    this.isValidSession=true;
    this.activeUserName=user;
  }

  isValidQuizSession: boolean = false;
  quizId:number;

  invalidateQuizSession()
  {
    this.isValidQuizSession=false;
  }

  validateQuizSession(num:number)
  {
    
    if(typeof num == 'number')
    {
      console.log("Validating quiz session");
      this.isValidQuizSession=true;
      this.quizId=num;
    }
      
  }


  
  correctAnswers: number =0;

}
