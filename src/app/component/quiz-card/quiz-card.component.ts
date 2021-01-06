import { Component, Input, OnInit } from '@angular/core';
import { QuizInterface } from '../../data/interface/quiz.interface';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {

    @Input() quiz!: QuizInterface;
    constructor() { }

    ngOnInit(): void {
    }

}
