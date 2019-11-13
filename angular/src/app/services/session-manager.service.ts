import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  constructor(private router:Router,
              private http: HttpClient) { }

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
    console.log("invalidating session");
    this.http.get("http://localhost:4200/api/v1/server/sessionManager/"+0);
    console.log("within invaidation");
    this.activeUserName = "";
    this.isValidSession = false;
  }
  validateSession()
  {
    this.http.get("http://localhost:4200/api/v1/server/sessionManager/"+1).subscribe(res=>{
      this.activeUserName=res.name.toString();
      this.isValidSession=true;
    });
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
