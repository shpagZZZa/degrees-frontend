import { Component, Input, OnInit } from '@angular/core';
import { AnswerInterface } from '../../../data/model/quiz.model';

@Component({
  selector: 'app-answers-block',
  templateUrl: './answers-block.component.html',
  styleUrls: ['./answers-block.component.scss']
})
export class AnswersBlockComponent implements OnInit {

    @Input() answers!: AnswerInterface[];
    @Input() canEdit!: boolean;

    constructor() { }

    ngOnInit(): void {
    }

    public addAnswer(): void {
        this.answers.push(
            {
                mark: this.answers.length,
                title: ''
            }
        );
    }
}
