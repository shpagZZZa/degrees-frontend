import { Component, Input, OnInit } from '@angular/core';
import { QuizModel } from '../../data/model/quiz.model';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {

    @Input() quiz!: QuizModel;
    constructor() { }

    ngOnInit(): void {
    }

}
