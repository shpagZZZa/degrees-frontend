import { Component, OnInit } from '@angular/core';
import { AnswerInterface, QuizInterface } from '../../data/interface/quiz.interface';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../service/quiz.service';
import { AuthService } from '../../service/auth.service';
import { EmployeeInterface } from '../../data/interface/employee.interface';

@Component({
  selector: 'app-new-feedback',
  templateUrl: './new-feedback.component.html',
  styleUrls: ['./new-feedback.component.sass', '../quiz/quiz.component.scss']
})
export class NewFeedbackComponent {

    answer!: AnswerInterface;
    comment = ' ';
    user!: EmployeeInterface;

    loading = true;
    quiz!: QuizInterface;
    subject: Subject<number> = new Subject<number>();

    constructor(
        private route: ActivatedRoute,
        private quizService: QuizService,
        private auth: AuthService,
        private router: Router
    ) {
        const id = parseInt(route.snapshot.paramMap.get('id') as string, 10);
        quizService.getQuiz(id).subscribe(
            quiz => {
                this.quiz = quiz;
                this.loading = false;
            }
        );
        this.auth.getUser().subscribe(
            res => {
                // @ts-ignore
                this.user = res;
            }
        );
    }

    public submit(): void {
        this.quizService.leaveFeedback(this.quiz.id, {
            answer: this.answer,
            comment: this.comment,
            authorId: this.user.id
        }).subscribe(
            feedback => {
                this.router.navigate(['/quiz/' + this.quiz.id]);
            }
        );
    }

    public check(answerId: number): void {
        this.answer = this.quiz.answers.filter(a => a.id === answerId)[0];
        this.subject.next(answerId);
    }
}
