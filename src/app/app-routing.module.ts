import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './component/group/group.component';
import { CompanyComponent } from './component/company/company.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { StatisticsComponent } from './component/statistics/statistics.component';
import { NewQuizComponent } from './component/new-quiz/new-quiz.component';
import { NewFeedbackComponent } from './component/new-feedback/new-feedback.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './component/login/login.component';
import { AdminComponent } from './component/admin/admin.component';

const routes: Routes = [
    { path: 'group/:id', component: GroupComponent, canActivate: [AuthGuard] },
    { path: 'quiz/:id', component: QuizComponent, canActivate: [AuthGuard] },
    { path: 'company', component: CompanyComponent, canActivate: [AuthGuard] },
    { path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard] },
    { path: 'new-quiz', component: NewQuizComponent, canActivate: [AuthGuard] },
    { path: 'quiz/:id/feedback', component: NewFeedbackComponent, canActivate: [AuthGuard] },
    { path: 'employee/:id', component: EmployeeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
