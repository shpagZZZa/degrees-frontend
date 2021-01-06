import { Injectable } from '@angular/core';
import { EmployeeInterface } from '../data/interface/employee.interface';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private backendUrl = 'http://localhost:8000';

    constructor(private http: HttpClient) {
    }
    public getUser(): Observable<EmployeeInterface> {
        return this.http.post<EmployeeInterface>(this.backendUrl + '/api/auth/get-user', {
            accessCode: this.getAccessCode()
        });
    }

    public getAccessCode(): number {
        return 95234;
    }
}
