import { Component, Input, OnInit, Output } from '@angular/core';
import { AnswerInterface } from '../../data/model/quiz.model';
import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
    @Input() answer!: AnswerInterface;
    @Input() subject!: Subject<number>;
    @Output() checked = new EventEmitter<number>();
    isChecked = false;

    check(): void {
        this.isChecked = !this.checked;
        this.checked.emit(this.answer.mark);
    }

    ngOnInit(): void {
        this.subject.subscribe(mark => {
            this.isChecked = mark === this.answer.mark;
        });
    }
}
