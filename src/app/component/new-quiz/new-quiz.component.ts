import { Component, OnInit } from '@angular/core';
import { AnswerInterface } from '../../data/model/quiz.model';
import { QuizService } from '../../service/quiz.service';

@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.scss']
})
export class NewQuizComponent {

    defaultAnswers: AnswerInterface[];
    customAnswers: AnswerInterface[] = [
        {
            mark: 0,
            title: 'Нет'
        },
        {
            mark: 1,
            title: 'Да'
        }
    ];
    isDefaultAnswers = true;

    constructor(
        private quizService: QuizService
    ) {
        this.defaultAnswers = quizService.getDefaultAnswers();
    }

    submit(): void {
        const answers = this.isDefaultAnswers ? this.defaultAnswers : this.customAnswers;
        console.log(answers);
    }

}
