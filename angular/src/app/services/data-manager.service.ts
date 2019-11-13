import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(private http: HttpClient) {
    //this.getQuizData().subscribe(data=>{console.log(data)});
    //this.getUserData().subscribe(data=>{console.log(data)});
  }

  public getQuizData(){
    return this.http.get("http://localhost:4200/api/v1/server/dataManager");
  }

  public getUserData(){
    return this.http.get("../assets/userData.json")
  }

  quizData:any;
  //any function that should be used in multiple places go here

}

