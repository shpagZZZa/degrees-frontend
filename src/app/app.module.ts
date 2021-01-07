import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './component/company/company.component';
import { GroupComponent } from './component/group/group.component';
import { EmployeeCardComponent } from './component/employee-card/employee-card.component';
import { GroupCardComponent } from './component/group-card/group-card.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { QuizCardComponent } from './component/quiz-card/quiz-card.component';
import { AnswerComponent } from './control/answer/answer.component';
import { StatisticsComponent } from './component/statistics/statistics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CardComponent } from './component/card/card.component';
import { NewQuizComponent } from './component/new-quiz/new-quiz.component';
import { AnswersBlockComponent } from './component/new-quiz/answers-block/answers-block.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './component/loading/loading.component';
import { NewFeedbackComponent } from './component/new-feedback/new-feedback.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { ModalComponent } from './component/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './component/login/login.component';
import { PositionCardComponent } from './component/position-card/position-card.component';
import { AdminComponent } from './component/admin/admin.component';

@NgModule({
    declarations: [
        AppComponent,
        CompanyComponent,
        GroupComponent,
        EmployeeCardComponent,
        GroupCardComponent,
        QuizComponent,
        QuizCardComponent,
        AnswerComponent,
        StatisticsComponent,
        CardComponent,
        NewQuizComponent,
        AnswersBlockComponent,
        LoadingComponent,
        NewFeedbackComponent,
        EmployeeComponent,
        ModalComponent,
        LoginComponent,
        PositionCardComponent,
        AdminComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
