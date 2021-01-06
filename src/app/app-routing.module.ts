import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './component/group/group.component';
import { CompanyComponent } from './component/company/company.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { StatisticsComponent } from './component/statistics/statistics.component';
import { NewQuizComponent } from './component/new-quiz/new-quiz.component';
import { NewFeedbackComponent } from './component/new-feedback/new-feedback.component';
import { EmployeeComponent } from './component/employee/employee.component';

const routes: Routes = [
    { path: 'group/:id', component: GroupComponent },
    { path: 'quiz/:id', component: QuizComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'new-quiz', component: NewQuizComponent },
    { path: 'quiz/:id/feedback', component: NewFeedbackComponent },
    { path: 'employee/:id', component: EmployeeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
