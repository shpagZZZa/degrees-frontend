import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { EmployeeInterface } from '../../data/interface/employee.interface';
import { QuizInterface } from '../../data/interface/quiz.interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent {

    employee!: EmployeeInterface;
    quizzes!: QuizInterface[];
    loading = true;

    constructor(
        route: ActivatedRoute,
        employeeService: EmployeeService
    ) {
        const id = parseInt(route.snapshot.paramMap.get('id') as string, 10);
        employeeService.getEmployee(id).subscribe(
            emp => {
                this.loading = false;
                this.employee = emp;
            }
        );
        employeeService.getQuizzes(id).subscribe(
            quizzes => {
                this.quizzes = quizzes;
            }
        );
    }
}
