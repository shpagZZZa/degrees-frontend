import { Component, OnInit } from '@angular/core';
import { QuizModel } from '../../data/model/quiz.model';
import { QuizService } from '../../service/quiz.service';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { QuizCardComponent } from '../quiz-card/quiz-card.component';
import { NewQuizModalComponent } from '../new-quiz-modal/new-quiz-modal.component';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

    quizzes: QuizModel[];

    constructor(quizService: QuizService, private matDialog: MatDialog) {
      this.quizzes = quizService.getQuizzes(1);
    }

    getRandomInt(): number {
        return Math.floor(Math.random() * 20);
    }
    ngOnInit(): void {
    }
}
