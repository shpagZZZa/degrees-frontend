import { Injectable } from '@angular/core';
import { EmployeeInterface } from '../data/interface/employee.interface';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';
import { QuizInterface } from '../data/interface/quiz.interface';

export interface NewEmployeeInterface {
    fullName: string;
    positionId: number;
    groupId: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BackendService {

    public getEmployee(id: number): Observable<EmployeeInterface> {
        return this.http.get<EmployeeInterface>(this.backendUrl + '/api/employee/' + id);
    }

    public getQuizzes(id: number): Observable<QuizInterface[]> {
        return this.http.get<QuizInterface[]>(this.backendUrl + '/api/employee/' + id + '/quizzes');
    }

    public save(emp: NewEmployeeInterface): Observable<EmployeeInterface> {
        return this.http.post<EmployeeInterface>(this.backendUrl + '/api/employee/', emp);
    }

    public getAll(): Observable<EmployeeInterface[]> {
        return this.http.get<EmployeeInterface[]>(this.backendUrl + '/api/employee/list');
    }
}
