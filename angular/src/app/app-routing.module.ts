import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { AppComponent } from 'src/app/app.component';
import { QuizSelectComponent } from 'src/app/quiz-select/quiz-select.component';
import { QuizComponent } from 'src/app/quiz/quiz.component';
import { ResultsComponent } from 'src/app/results/results.component';

const routes: Routes = [{path: 'login', component:LoginComponent},
                        {path: 'quizSelect', component: QuizSelectComponent},
                        {path: 'quiz', component: QuizComponent},
                        {path: 'results', component: ResultsComponent},
                        {path: '', component:LoginComponent}];
export default routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

 }
