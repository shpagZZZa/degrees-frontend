import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../service/quiz.service';
import { Subject } from 'rxjs';
import { QuizInterface } from '../../data/interface/quiz.interface';
import { EmployeeInterface } from '../../data/interface/employee.interface';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {

    user!: EmployeeInterface | null;
    loading = true;
    quiz!: QuizInterface;
    answered = true;

    constructor(
        route: ActivatedRoute,
        quizService: QuizService,
        auth: AuthService
    ) {
        const id = parseInt(route.snapshot.paramMap.get('id') as string, 10);
        quizService.getQuiz(id).subscribe(
            quiz => {
                this.quiz = quiz;
                this.loading = false;
            }
        );
        auth.getUser().subscribe(
            res => {
                // @ts-ignore
                this.user = res;
            }
        );
        quizService.isAnswered(id).subscribe(
            success => {
                this.answered = success.success;
            }
        );
    }
}
