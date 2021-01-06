import { Component, Input, OnInit, Output } from '@angular/core';
import { AnswerInterface } from '../../../data/interface/quiz.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answers-block',
  templateUrl: './answers-block.component.html',
  styleUrls: ['./answers-block.component.scss']
})
export class AnswersBlockComponent implements OnInit {

    @Input() answers!: AnswerInterface[];
    @Input() canEdit!: boolean;
    @Output() delete = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    public addAnswer(): void {
        this.answers.push(
            {
                id: this.answers.length,
                title: ''
            }
        );
    }
}
