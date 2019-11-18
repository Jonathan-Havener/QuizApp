import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { ArrayType } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(private http: HttpClient) {
    //this.getQuizData().subscribe(data=>{console.log(data)});
    //this.getUserData().subscribe(data=>{console.log(data)});
  }

  public getQuizData(){
    return this.http.get<any>("http://localhost:4200/api/v1/server/dataManager");
  }


  public getUserData(){
    return this.http.get("../assets/userData.json")
  }

  
 


  quizData:any;
  emptyTestBook;
  score:any;
  //any function that should be used in multiple places go here

}

