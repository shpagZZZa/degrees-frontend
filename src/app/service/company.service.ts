import { Injectable } from '@angular/core';
import { CompanyInterface } from '../data/interface/company.interface';
import { HttpClient } from '@angular/common/http';
import { QuizInterface } from '../data/interface/quiz.interface';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service';

@Injectable({
    providedIn: 'root'
})
export class CompanyService extends BackendService {

    public getCompany(id: number): Observable<CompanyInterface> {
        return this.http.get<CompanyInterface>(this.backendUrl + '/api/company/' + id);
    }

    public getQuizzes(id: number): Observable<QuizInterface[]> {
        return this.http.get<QuizInterface[]>(this.backendUrl + '/api/company/' + id + '/quizzes');
    }
}
