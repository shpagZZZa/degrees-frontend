import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './component/group/group.component';
import { CompanyComponent } from './component/company/company.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { StatisticsComponent } from './component/statistics/statistics.component';
import { NewQuizComponent } from './component/new-quiz/new-quiz.component';

const routes: Routes = [
    { path: 'group/:id', component: GroupComponent },
    { path: 'quiz/:id', component: QuizComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'new-quiz', component: NewQuizComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
