import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagerService } from '../services/session-manager.service';
import { DataManagerService } from '../services/data-manager.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, 
              private sessionService: SessionManagerService,
              private dataService: DataManagerService,
              private http : HttpClient) { }

  userData:any;
  ngOnInit() {
    /*
    this.dataService.getUserData().subscribe(data => 
      {
        this.userData = data;
      });
    */
  }

  firstUser:any;
  username: string;
  password: string;

  


  errorMessage=""
  signIn(){
    console.log("We're attempting to connect to server");
    this.http.get("http://localhost:4200/api/v1/server/login/"+this.username+"/"+this.password)
      .subscribe(res=>{
        if(res.code==0)
        {
          this.errorMessage=res.message;
          //console.log("Don't route")
        }
        else if(res.code==1)
        {
          console.log("Proceed to route");
          this.router.navigate(['quizSelect']);
        }
        });
  }

}


/* legacy code
validateUser()
  {
  //TODO: implement logic for validating a user
  for(let i in this.userData.users)
  {
  if(this.username == this.userData.users[i].email && this.password == this.userData.users[i].password)
  {
    this.firstUser = this.userData.users[i].name;
    return true;
  }
  
  }
  }*/