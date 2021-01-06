import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../service/quiz.service';
import { AnswerInterface } from '../../data/interface/quiz.interface';
import { EmployeeInterface } from '../../data/interface/employee.interface';
import { EmployeeService } from '../../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.scss']
})
export class NewQuizComponent {

    title = '';
    subtitle = '';
    employeeId!: number;

    defaultAnswers!: AnswerInterface[];
    customAnswers: AnswerInterface[] = [
        {
            id: 0,
            title: 'Нет'
        },
        {
            id: 1,
            title: 'Да'
        }
    ];
    isDefaultAnswers = true;
    allEmployees: EmployeeInterface[] = [];

    constructor(
        private quizService: QuizService,
        private employeeService: EmployeeService,
        private router: Router
    ) {
        quizService.getDefaultAnswers().subscribe(
            answers => {
                this.defaultAnswers = answers;
            }
        );
        employeeService.getAll().subscribe(
            emps => {
                this.allEmployees = emps;
            }
        );
    }

    submit(): void {
        const data = this.isDefaultAnswers ? {
                title: this.title,
                subtitle: this.subtitle,
                employeeId: this.employeeId,
                defaultAnswers: true
            } : {
            title: this.title,
            subtitle: this.subtitle,
            employeeId: this.employeeId,
            answers: this.customAnswers,
            defaultAnswers: false
        };
        this.quizService.newQuiz(data).subscribe(
            quiz => {
                this.router.navigate(['/quiz/' + quiz.id]);
            }
        );
    }

    deleteLast(): void {
        this.customAnswers.pop();
    }
}
