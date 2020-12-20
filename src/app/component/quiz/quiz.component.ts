import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../service/quiz.service';
import { AnswerInterface, QuizModel } from '../../data/model/quiz.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {

    quiz: QuizModel;
    answers: { mark: number; title: string }[];
    subject: Subject<number> = new Subject<number>();

    constructor(route: ActivatedRoute, quizService: QuizService) {
        const id = parseInt(route.snapshot.paramMap.get('id') as string, 10);
        this.quiz = quizService.getQuiz(id);
        this.answers = this.quiz.possible_answers;
    }

    public check(mark: number): void {
        this.subject.next(mark);
    }
}
