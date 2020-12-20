import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './component/group/group.component';
import { CompanyComponent } from './component/company/company.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { StatisticsComponent } from './component/statistics/statistics.component';

const routes: Routes = [
    { path: 'group/:id', component: GroupComponent },
    { path: 'quiz/:id', component: QuizComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'statistics', component: StatisticsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
