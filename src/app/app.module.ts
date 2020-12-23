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
import { NewQuizModalComponent } from './component/new-quiz-modal/new-quiz-modal.component';
import { CardComponent } from './component/card/card.component';
import { NewQuizComponent } from './component/new-quiz/new-quiz.component';
import { AnswersBlockComponent } from './component/new-quiz/answers-block/answers-block.component';
import { FormsModule } from '@angular/forms';

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
        NewQuizModalComponent,
        CardComponent,
        NewQuizComponent,
        AnswersBlockComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
